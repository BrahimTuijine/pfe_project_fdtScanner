import click
from selenium import webdriver
from time import sleep


driver = webdriver.Chrome(executable_path="C:\webdrivers\chromedriver.exe")

driver.get("https://www.google.com/maps/")

sleep(2)

directionBtn = driver.find_element_by_xpath("//*[@id='xoLGzf-T3iPGc']").click()

sleep(2)

originInput = driver.find_element_by_xpath(
    "/html/body/div[3]/div[9]/div[3]/div[1]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[1]/div/input").send_keys("El Alia")

sleep(2)

distinationInput = driver.find_element_by_xpath(
    "/html/body/div[3]/div[9]/div[3]/div[1]/div[2]/div/div[3]/div[1]/div[2]/div[2]/div[1]/div/input").send_keys("Ariana")

searchBtn = driver.find_element_by_xpath(
    "/html/body/div[3]/div[9]/div[3]/div[1]/div[2]/div/div[3]/div[1]/div[2]/div[2]/button[1]").click()

sleep(2)
menuBtn = driver.find_element_by_xpath(
    "/html/body/div[3]/div[9]/div[3]/div[1]/div[2]/div/div[1]/button").click()

sleep(2)

mapBtn = driver.find_element_by_xpath(
    "/html/body/div[3]/div[9]/div[25]/div/div[2]/ul/div[5]/li[1]/button").click()

sleep(2)

embedMap = driver.find_element_by_xpath(
    "/html/body/div[3]/div[1]/div/div[2]/div/div[3]/div/div/div/div[2]/button[2]").click()

sleep(2)

myframe = driver.find_element_by_xpath("/html/body/div[3]/div[1]/div/div[2]/div/div[3]/div/div/div/div[3]/div[1]/input")

sleep(2)

print(myframe.get_attribute('value'))

sleep(5)

driver.close()
