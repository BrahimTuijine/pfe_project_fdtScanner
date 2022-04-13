
from selenium import webdriver
from time import sleep
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
import socketio
import json


def getDistinatonIframe(fdtPlace):

    driver = webdriver.Chrome(executable_path="C:\webdrivers\chromedriver.exe")
    wait = WebDriverWait(driver, 10)

    driver.get("https://www.google.com/maps/")

    wait.until(EC.element_to_be_clickable(
        (By.XPATH, "//*[@id='xoLGzf-T3iPGc']")))

    directionBtn = driver.find_element_by_xpath(
        "//*[@id='xoLGzf-T3iPGc']").click()

    driver.implicitly_wait(10)

    originInput = driver.find_element_by_xpath(
        "/html/body/div[3]/div[9]/div[3]/div[1]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[1]/div/input").send_keys(fdtPlace)

    driver.implicitly_wait(10)

    distinationInput = driver.find_element_by_xpath(
        "/html/body/div[3]/div[9]/div[3]/div[1]/div[2]/div/div[3]/div[1]/div[2]/div[2]/div[1]/div/input").send_keys("Ariana")

    wait.until(EC.element_to_be_clickable(
        (By.XPATH, "/html/body/div[3]/div[9]/div[3]/div[1]/div[2]/div/div[3]/div[1]/div[2]/div[2]/button[1]")))

    searchBtn = driver.find_element_by_xpath(
        "/html/body/div[3]/div[9]/div[3]/div[1]/div[2]/div/div[3]/div[1]/div[2]/div[2]/button[1]").click()

    sleep(2)

    menuBtn = driver.find_element_by_xpath(
        "/html/body/div[3]/div[9]/div[3]/div[1]/div[2]/div/div[1]/button").click()

    sleep(4)

    mapBtn = driver.find_element_by_xpath(
        "/html/body/div[3]/div[9]/div[25]/div/div[2]/ul/div[5]/li[1]/button").click()

    sleep(4)

    embedMap = driver.find_element_by_xpath(
        "/html/body/div[3]/div[1]/div/div[2]/div/div[3]/div/div/div/div[2]/button[2]").click()

    sleep(4)

    myframe = driver.find_element_by_xpath(
        "/html/body/div[3]/div[1]/div/div[2]/div/div[3]/div/div/div/div[3]/div[1]/input")

    iframe = myframe.get_attribute('value')

    driver.quit()

    return iframe


def myLocation():

    driver = webdriver.Chrome(executable_path="C:\webdrivers\chromedriver.exe")

    driver.get("file:///C:/Users/MSI/OneDrive/Desktop/devlopment/html/index.html")

    driver.implicitly_wait(10)

    driver.find_element_by_xpath("/html/body/button").click()

    driver.implicitly_wait(10)

    lat = driver.find_element_by_xpath("/html/body/p[2]/p[1]").text
    long = driver.find_element_by_xpath("/html/body/p[2]/div").text

    driver.quit()
    return [lat, long]


def latLngToAdd(latLngTab):
    driver = webdriver.Chrome(executable_path="C:\webdrivers\chromedriver.exe")
    wait = WebDriverWait(driver, 10)

    driver.get("https://www.gps-coordinates.net/gps-coordinates-converter")

    driver.implicitly_wait(10)

    latitudeInput = driver.find_element_by_xpath(
        "//*[@id='latitude']").send_keys(latLngTab[0])
    longitudeInput = driver.find_element_by_xpath(
        "//*[@id='longitude']").send_keys(latLngTab[1])

    sleep(2)

    getAddressBtn = driver.find_element_by_xpath(
        "/html/body/div[2]/div[2]/div[2]/div[1]/form[2]/div[3]/div/button").click()

    sleep(2)

    addressInput = driver.find_element_by_xpath(
        "//*[@id='address']").get_attribute('value')

    driver.quit()

    return addressInput


def registerInFdtList(fdtPlace, location):
    myData = {
        "fdtName": fdtPlace,
        "fdtLat": location[0],
        "fdtLng": location[1]
    }
    x = requests.post("http://127.0.0.1:8000/api/fdtList", data=myData)
    return x.json()["id"]


myLatLng = myLocation()
fdtAddresse = latLngToAdd(myLatLng)
location = myLatLng[0] + "," + myLatLng[1]
iframeLink = getDistinatonIframe(location).split()[1][:-1].replace('src="', '')
fdtId = registerInFdtList(fdtAddresse, myLatLng)


sio = socketio.Client()

sio.connect('http://localhost:4444',
            headers={"name": str(fdtId)})

myTab = [9, 8, 12, 7]

i = 0


@sio.on('getCurrentValue')
def on_message():
    print("hay wouslet")
    sio.emit("segnalValue", {"value": myTab[3]})


while (i != len(myTab)):

    print(i)
    if(myTab[i] > 10):
        sio.emit('showAngularNotification')

        notificatonData = {
            "fdtName": fdtAddresse,
            "value": myTab[i],
            "mapLink": iframeLink
        }

        res = requests.post(
            "http://127.0.0.1:8000/api/notification", data=notificatonData)

    sleep(5)
    i += 1
