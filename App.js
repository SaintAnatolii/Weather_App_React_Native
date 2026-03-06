import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import Welcome from "./components/Welcome";
import { useState, useEffect } from "react";

const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "804b983f241df45091b96987b50a53c6";
const city = "Люберцы";
const full_url = `${API_URL}weather?units=metric&q=${city}&appid=${API_KEY}&lang=en`;

const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении погоды:", error);
    throw error;
  }
};

const getDate = () => {
  const now = new Date();

  const month = now.getMonth();

  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aau",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = now.getDay();

  return `${months[month]} ${day}`;
};

export default function App() {
  const [weather_data, setWeatherData] = useState(null);

  useEffect(() => {
    getData(full_url)
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!weather_data) {
    return null;
  }

  return (
    <ImageBackground
      source={require("./assets/bg.jpg")}
      style={styles.background}
      imageStyle={{ opacity: 1 }}
    >
      {/* <Welcome /> */}
      <SafeAreaView style={styles.container}>
        <View
          style={{
            alignItems: "center",
            borderRadius: 30,
            paddingVertical: 16,
            marginBottom: 48,
            backgroundColor: "#00000071",
            width: "95%",
            borderRadius: 20,
            borderWidth: 2,
            borderRightColor: "#414141",
            borderBottomColor: "#414141",
            borderLeftColor: "#767676",
            borderTopColor: "#767676",
          }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>
            {weather_data.name}
          </Text>
          <Image
            source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f42aea83-260f-4562-aa22-0d1772104fe9",
            }}
            resizeMode={"stretch"}
            style={{
              width: 240,
              height: 240,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                marginRight: 26,
              }}
            >
              {weather_data.weather[0].main}
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
              }}
            >
              {getDate()}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: 8,
                height: 8,
                marginTop: 11,
                marginRight: 7,
              }}
            ></View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 72,
                fontWeight: "bold",
                marginRight: 7,
              }}
            >
              {parseInt(weather_data.main.temp)}
            </Text>
            <Image
              source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1a487e4-6b1d-4a80-9a85-4fccd9258447",
              }}
              resizeMode={"stretch"}
              style={{
                width: 8,
                height: 8,
                marginTop: 11,
              }}
            />
          </View>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              marginBottom: 16,
            }}
          >
            {weather_data.weather[0].description}
          </Text>
          <View
            style={{
              alignSelf: "stretch",
              marginHorizontal: 16,
            }}
          >
            <View
              style={{
                height: 1,
                backgroundColor: "#FFFFFF",
                marginBottom: 16,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 24,
                marginHorizontal: 22,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: 16,
                }}
              >
                <Image
                  source={{
                    uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f4c54ef-00da-44af-ab1e-5ee0eb77e37f",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 16,
                    width: 32,
                    height: 32,
                    marginRight: 4,
                  }}
                />
                <View>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      marginBottom: 4,
                    }}
                  >
                    {"3.7 km/h"}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      marginRight: 20,
                    }}
                  >
                    {"Wind"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 4,
                }}
              >
                <View
                  style={{
                    marginRight: 8,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e5d5616-44c5-4b9a-aba0-3d3fcc22fe0c",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 24,
                      height: 20,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      marginBottom: 4,
                      marginRight: 63,
                    }}
                  >
                    {"74%"}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                    }}
                  >
                    {"Chance of rain"}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 22,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 9,
                }}
              >
                <View
                  style={{
                    marginRight: 13,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c75f84c8-ac5d-4c2e-bd40-b3dc3ab73f4c",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 13,
                      height: 26,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      marginBottom: 4,
                    }}
                  >
                    {"1010 mbar"}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                    }}
                  >
                    {"Pressure"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d5e693e-bc6e-4afa-bcb5-cb2867f29ca1",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 32,
                    height: 32,
                    marginRight: 4,
                  }}
                />
                <View>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      marginBottom: 4,
                      marginRight: 54,
                    }}
                  >
                    {"83%"}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                    }}
                  >
                    {"Humidity 83%"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const background = { flex: 1 };

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: 40,
    backgroundColor: "#00000000",
    alignItems: "center",
    justifyContent: "center",
  },
  background,
});
