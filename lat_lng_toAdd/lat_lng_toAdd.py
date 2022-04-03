from geopy.geocoders import Nominatim

# calling the nominatim tool
geoLoc = Nominatim(user_agent="GetLoc")

# passing the coordinates
locname = geoLoc.reverse("37.169327 , 10.033846")

# printing the address/location name
print(locname.address)

# https://www.gps-coordinates.net/gps-coordinates-converter
