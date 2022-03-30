from selenium import webdriver
from time import sleep

driver = webdriver.Chrome(executable_path="C:\webdrivers\chromedriver.exe")

driver.get("file:///C:/Users/MSI/OneDrive/Desktop/devlopment/html/index.html")

driver.find_element_by_xpath("/html/body/button").click()

sleep(1)

lat = driver.find_element_by_xpath("/html/body/p[2]/p[1]").text
long = driver.find_element_by_xpath("/html/body/p[2]/div").text

print("latitude ", lat)
print("long ", long)


driver.close()


# driver.switch_to().accept()
