from selenium import webdriver
from time import sleep
import arabic_reshaper
from bidi.algorithm import get_display

driver = webdriver.Chrome(executable_path="C:\webdrivers\chromedriver.exe")

driver.get("https://www.gps-coordinates.net/gps-coordinates-converter")

sleep(2)

latitudeInput = driver.find_element_by_xpath(
    "//*[@id='latitude']").send_keys("37.169327")
longitudeInput = driver.find_element_by_xpath(
    "//*[@id='longitude']").send_keys("10.033846")

sleep(2)

getAddressBtn = driver.find_element_by_xpath(
    "/html/body/div[2]/div[2]/div[2]/div[1]/form[2]/div[3]/div/button").click()

addressInput = driver.find_element_by_xpath("//*[@id='address']")

sleep(2)

print(get_display(arabic_reshaper.reshape(addressInput.get_attribute('value'))))

driver.close()

# text = "ذهب الطالب الى المدرسة"
# reshaped_text = arabic_reshaper.reshape(text)    # correct its shape
# bidi_text = get_display(reshaped_text)
# print(bidi_text)
