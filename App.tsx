import { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type HourlyForecast = {
  time: string;
  temperature: number;
  icon: string;
};

type DailyForecast = {
  day: string;
  condition: string;
  icon: string;
  high: number;
  low: number;
};

type WeatherData = {
  city: string;
  country: string;
  condition: string;
  icon: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  visibility: number;
  pressure: number;
  uvIndex: number;
  backgroundImage: string;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moonPhase: string;
};

const weatherData: WeatherData[] = [
  {
    city: 'Johannesburg',
    country: 'South Africa',
    condition: 'Sunny',
    icon: '☀️',
    temperature: 24,
    feelsLike: 25,
    humidity: 42,
    windSpeed: 18,
    windDirection: 'NW',
    visibility: 10,
    pressure: 1018,
    uvIndex: 7,
    backgroundImage:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    hourly: [
      { time: '10 AM', temperature: 24, icon: '☀️' },
      { time: '11 AM', temperature: 25, icon: '☀️' },
      { time: '12 PM', temperature: 26, icon: '🌤️' },
      { time: '1 PM', temperature: 27, icon: '☀️' },
      { time: '2 PM', temperature: 27, icon: '☀️' },
      { time: '3 PM', temperature: 26, icon: '🌤️' },
      { time: '4 PM', temperature: 25, icon: '🌤️' },
      { time: '5 PM', temperature: 23, icon: '🌅' },
      { time: '6 PM', temperature: 21, icon: '🌅' },
      { time: '7 PM', temperature: 19, icon: '🌙' },
      { time: '8 PM', temperature: 18, icon: '🌙' },
      { time: '9 PM', temperature: 17, icon: '🌙' },
      { time: '10 PM', temperature: 16, icon: '🌙' },
      { time: '11 PM', temperature: 15, icon: '🌙' },
      { time: '12 AM', temperature: 14, icon: '🌙' },
      { time: '1 AM', temperature: 14, icon: '🌙' },
      { time: '2 AM', temperature: 13, icon: '🌙' },
      { time: '3 AM', temperature: 13, icon: '🌙' },
      { time: '4 AM', temperature: 13, icon: '🌙' },
      { time: '5 AM', temperature: 14, icon: '🌅' },
      { time: '6 AM', temperature: 15, icon: '🌅' },
      { time: '7 AM', temperature: 17, icon: '🌤️' },
      { time: '8 AM', temperature: 19, icon: '☀️' },
      { time: '9 AM', temperature: 22, icon: '☀️' },
    ],
    daily: [
      { day: 'Mon', condition: 'Sunny', icon: '☀️', high: 25, low: 16 },
      {
        day: 'Tue',
        condition: 'Partly Cloudy',
        icon: '🌤️',
        high: 23,
        low: 15,
      },
      {
        day: 'Wed',
        condition: 'Showers',
        icon: '🌦️',
        high: 20,
        low: 14,
      },
      { day: 'Thu', condition: 'Sunny', icon: '☀️', high: 24, low: 15 },
      { day: 'Fri', condition: 'Sunny', icon: '☀️', high: 26, low: 17 },
    ],
    sunrise: '05:32',
    sunset: '18:12',
    moonrise: '21:15',
    moonset: '08:44',
    moonPhase: 'Waxing Gibbous 🌔',
  },

  {
    city: 'Cape Town',
    country: 'South Africa',
    condition: 'Partly Cloudy',
    icon: '🌤️',
    temperature: 19,
    feelsLike: 18,
    humidity: 68,
    windSpeed: 24,
    windDirection: 'SW',
    visibility: 12,
    pressure: 1014,
    uvIndex: 5,
    backgroundImage:
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=80',
    hourly: [
      { time: '10 AM', temperature: 18, icon: '🌤️' },
      { time: '11 AM', temperature: 19, icon: '🌤️' },
      { time: '12 PM', temperature: 20, icon: '⛅' },
      { time: '1 PM', temperature: 20, icon: '⛅' },
      { time: '2 PM', temperature: 19, icon: '🌤️' },
      { time: '3 PM', temperature: 18, icon: '🌥️' },
      { time: '4 PM', temperature: 17, icon: '🌥️' },
      { time: '5 PM', temperature: 16, icon: '🌥️' },
      { time: '6 PM', temperature: 15, icon: '🌅' },
      { time: '7 PM', temperature: 14, icon: '🌙' },
      { time: '8 PM', temperature: 13, icon: '🌙' },
      { time: '9 PM', temperature: 13, icon: '🌙' },
      { time: '10 PM', temperature: 12, icon: '🌙' },
      { time: '11 PM', temperature: 12, icon: '🌙' },
      { time: '12 AM', temperature: 11, icon: '🌙' },
      { time: '1 AM', temperature: 11, icon: '🌙' },
      { time: '2 AM', temperature: 10, icon: '🌙' },
      { time: '3 AM', temperature: 10, icon: '🌙' },
      { time: '4 AM', temperature: 10, icon: '🌙' },
      { time: '5 AM', temperature: 11, icon: '🌅' },
      { time: '6 AM', temperature: 12, icon: '🌅' },
      { time: '7 AM', temperature: 14, icon: '🌤️' },
      { time: '8 AM', temperature: 16, icon: '🌤️' },
      { time: '9 AM', temperature: 18, icon: '🌤️' },
    ],
    daily: [
      {
        day: 'Mon',
        condition: 'Partly Cloudy',
        icon: '🌤️',
        high: 20,
        low: 14,
      },
      {
        day: 'Tue',
        condition: 'Cloudy',
        icon: '☁️',
        high: 18,
        low: 13,
      },
      {
        day: 'Wed',
        condition: 'Rain',
        icon: '🌧️',
        high: 16,
        low: 12,
      },
      {
        day: 'Thu',
        condition: 'Partly Cloudy',
        icon: '🌤️',
        high: 19,
        low: 13,
      },
      {
        day: 'Fri',
        condition: 'Sunny',
        icon: '☀️',
        high: 21,
        low: 14,
      },
    ],
    sunrise: '06:18',
    sunset: '18:45',
    moonrise: '20:52',
    moonset: '09:12',
    moonPhase: 'Waxing Gibbous 🌔',
  },

  {
    city: 'Durban',
    country: 'South Africa',
    condition: 'Mostly Cloudy',
    icon: '☁️',
    temperature: 26,
    feelsLike: 28,
    humidity: 76,
    windSpeed: 15,
    windDirection: 'NE',
    visibility: 9,
    pressure: 1012,
    uvIndex: 8,
    backgroundImage:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    hourly: [
      { time: '10 AM', temperature: 25, icon: '☁️' },
      { time: '11 AM', temperature: 26, icon: '🌤️' },
      { time: '12 PM', temperature: 27, icon: '🌤️' },
      { time: '1 PM', temperature: 28, icon: '⛅' },
      { time: '2 PM', temperature: 28, icon: '⛅' },
      { time: '3 PM', temperature: 27, icon: '🌥️' },
      { time: '4 PM', temperature: 26, icon: '🌥️' },
      { time: '5 PM', temperature: 25, icon: '🌥️' },
      { time: '6 PM', temperature: 23, icon: '🌅' },
      { time: '7 PM', temperature: 22, icon: '🌙' },
      { time: '8 PM', temperature: 21, icon: '🌙' },
      { time: '9 PM', temperature: 21, icon: '🌙' },
      { time: '10 PM', temperature: 20, icon: '🌙' },
      { time: '11 PM', temperature: 20, icon: '🌙' },
      { time: '12 AM', temperature: 19, icon: '🌙' },
      { time: '1 AM', temperature: 19, icon: '🌙' },
      { time: '2 AM', temperature: 18, icon: '🌙' },
      { time: '3 AM', temperature: 18, icon: '🌙' },
      { time: '4 AM', temperature: 18, icon: '🌙' },
      { time: '5 AM', temperature: 19, icon: '🌅' },
      { time: '6 AM', temperature: 20, icon: '🌅' },
      { time: '7 AM', temperature: 22, icon: '🌤️' },
      { time: '8 AM', temperature: 24, icon: '🌤️' },
      { time: '9 AM', temperature: 25, icon: '☀️' },
    ],
    daily: [
      {
        day: 'Mon',
        condition: 'Mostly Cloudy',
        icon: '☁️',
        high: 28,
        low: 20,
      },
      {
        day: 'Tue',
        condition: 'Partly Cloudy',
        icon: '🌤️',
        high: 29,
        low: 21,
      },
      {
        day: 'Wed',
        condition: 'Showers',
        icon: '🌦️',
        high: 27,
        low: 20,
      },
      {
        day: 'Thu',
        condition: 'Sunny',
        icon: '☀️',
        high: 30,
        low: 21,
      },
      {
        day: 'Fri',
        condition: 'Partly Cloudy',
        icon: '🌤️',
        high: 28,
        low: 20,
      },
    ],
    sunrise: '05:05',
    sunset: '18:08',
    moonrise: '21:32',
    moonset: '08:21',
    moonPhase: 'Waxing Gibbous 🌔',
  },
];

export default function App() {
  const [selectedCity, setSelectedCity] = useState<string>('Johannesburg');

  const selectedWeather = weatherData.find(
    (weather) => weather.city === selectedCity
  );

  if (!selectedWeather) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Weather information unavailable.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Weather Dashboard</Text>

      <View style={styles.citySelector}>
        {weatherData.map((weather) => (
          <TouchableOpacity
            key={weather.city}
            style={[
              styles.cityButton,
              selectedCity === weather.city && styles.selectedCityButton,
            ]}
            onPress={() => setSelectedCity(weather.city)}
          >
            <Text
              style={[
                styles.cityButtonText,
                selectedCity === weather.city && styles.selectedCityButtonText,
              ]}
            >
              {weather.city}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ImageBackground
        source={{ uri: selectedWeather.backgroundImage }}
        style={styles.weatherHero}
        imageStyle={styles.weatherHeroImage}
      >
        <View style={styles.heroOverlay}>
          <Text style={styles.cityName}>{selectedWeather.city}</Text>
          <Text style={styles.countryName}>{selectedWeather.country}</Text>
          <Text style={styles.currentIcon}>{selectedWeather.icon}</Text>
          <Text style={styles.currentTemperature}>
            {selectedWeather.temperature}°
          </Text>
          <Text style={styles.currentCondition}>{selectedWeather.condition}</Text>
        </View>
      </ImageBackground>

      <View style={styles.detailsPanel}>
        <Text style={styles.sectionTitle}>Today</Text>
        <View style={styles.infoGrid}>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Feels like</Text>
            <Text style={styles.infoValue}>{selectedWeather.feelsLike}°</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Humidity</Text>
            <Text style={styles.infoValue}>{selectedWeather.humidity}%</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Wind</Text>
            <Text style={styles.infoValue}>{selectedWeather.windSpeed} km/h</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Visibility</Text>
            <Text style={styles.infoValue}>{selectedWeather.visibility} km</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Pressure</Text>
            <Text style={styles.infoValue}>{selectedWeather.pressure} hPa</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>UV Index</Text>
            <Text style={styles.infoValue}>{selectedWeather.uvIndex}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hourly Forecast</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hourlyScroll}>
          {selectedWeather.hourly.map((hour) => (
            <View key={`${selectedWeather.city}-${hour.time}`} style={styles.hourCard}>
              <Text style={styles.hourText}>{hour.time}</Text>
              <Text style={styles.hourIcon}>{hour.icon}</Text>
              <Text style={styles.hourTemp}>{hour.temperature}°</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>7-Day Forecast</Text>
        {selectedWeather.daily.map((day) => (
          <View key={`${selectedWeather.city}-${day.day}`} style={styles.dayRow}>
            <Text style={styles.dayName}>{day.day}</Text>
            <Text style={styles.dayCondition}>
              {day.icon} {day.condition}
            </Text>
            <View style={styles.dayTemps}>
              <Text style={styles.dayHigh}>{day.high}°</Text>
              <Text style={styles.dayLow}>{day.low}°</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sun & Moon</Text>
        <View style={styles.sunMoonRow}>
          <Text style={styles.sunMoonLabel}>Sunrise</Text>
          <Text style={styles.sunMoonValue}>{selectedWeather.sunrise}</Text>
        </View>
        <View style={styles.sunMoonRow}>
          <Text style={styles.sunMoonLabel}>Sunset</Text>
          <Text style={styles.sunMoonValue}>{selectedWeather.sunset}</Text>
        </View>
        <View style={styles.sunMoonRow}>
          <Text style={styles.sunMoonLabel}>Moonrise</Text>
          <Text style={styles.sunMoonValue}>{selectedWeather.moonrise}</Text>
        </View>
        <View style={styles.sunMoonRow}>
          <Text style={styles.sunMoonLabel}>Moonset</Text>
          <Text style={styles.sunMoonValue}>{selectedWeather.moonset}</Text>
        </View>
        <View style={styles.sunMoonRow}>
          <Text style={styles.sunMoonLabel}>Moon Phase</Text>
          <Text style={styles.sunMoonValue}>{selectedWeather.moonPhase}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  content: {
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#f8fafc',
    marginTop: 28,
    marginBottom: 16,
  },
  citySelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 18,
    gap: 10,
  },
  cityButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: 'rgba(148, 163, 184, 0.18)',
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.3)',
  },
  selectedCityButton: {
    backgroundColor: '#38bdf8',
    borderColor: '#38bdf8',
  },
  cityButtonText: {
    color: '#e2e8f0',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedCityButtonText: {
    color: '#082f49',
  },
  weatherHero: {
    height: 260,
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 18,
  },
  weatherHeroImage: {
    borderRadius: 28,
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(15, 23, 42, 0.28)',
  },
  cityName: {
    color: '#f8fafc',
    fontSize: 30,
    fontWeight: '800',
  },
  countryName: {
    color: '#e2e8f0',
    fontSize: 15,
    marginBottom: 6,
  },
  currentIcon: {
    fontSize: 42,
    marginBottom: 4,
  },
  currentTemperature: {
    color: '#f8fafc',
    fontSize: 56,
    fontWeight: '800',
    lineHeight: 56,
  },
  currentCondition: {
    color: '#f8fafc',
    fontSize: 18,
    marginTop: 6,
    textTransform: 'capitalize',
  },
  detailsPanel: {
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  section: {
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    borderRadius: 20,
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  sectionTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  infoCard: {
    width: '31%',
    backgroundColor: 'rgba(30, 41, 59, 0.9)',
    borderRadius: 14,
    padding: 12,
    minHeight: 78,
  },
  infoLabel: {
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 8,
  },
  infoValue: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '700',
  },
  hourlyScroll: {
    marginHorizontal: -4,
  },
  hourCard: {
    width: 74,
    backgroundColor: 'rgba(30, 41, 59, 0.9)',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  hourText: {
    color: '#cbd5e1',
    fontSize: 12,
    marginBottom: 8,
  },
  hourIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  hourTemp: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '700',
  },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(148, 163, 184, 0.15)',
  },
  dayName: {
    color: '#f8fafc',
    fontSize: 16,
    width: 42,
  },
  dayCondition: {
    color: '#e2e8f0',
    fontSize: 14,
    flex: 1,
    marginLeft: 8,
  },
  dayTemps: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dayHigh: {
    color: '#f8fafc',
    fontWeight: '700',
  },
  dayLow: {
    color: '#94a3b8',
  },
  sunMoonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(148, 163, 184, 0.15)',
  },
  sunMoonLabel: {
    color: '#cbd5e1',
    fontSize: 14,
  },
  sunMoonValue: {
    color: '#f8fafc',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
    flexShrink: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    padding: 24,
  },
  errorText: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '600',
  },
});