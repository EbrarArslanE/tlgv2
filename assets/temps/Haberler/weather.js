async function fetchWeatherData() {
  const apiKey = "bec18e75cab843b588f133653251812";
  const city = "Istanbul";

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=en`
    );
    const data = await res.json();

    const cityEl = document.querySelector(".city");
    const tempEl = document.querySelector(".temperature");
    const weatherTextEl = document.querySelector(".weather div:last-child");
    const hourEl = document.querySelector(".hour");
    const dateEl = document.querySelector(".date");

    if (!data.location || !data.current) return;

    cityEl.textContent = data.location.name;
    tempEl.textContent = `${Math.round(data.current.temp_c)}°`;
    weatherTextEl.textContent = data.current.condition.text;

    const localTime = new Date(data.location.localtime.replace(" ", "T"));

    hourEl.textContent = localTime.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit"
    });

    dateEl.textContent = localTime
      .toLocaleDateString("en-US", {
        weekday: "short",
        month: "2-digit",
        day: "2-digit"
      })
      .toUpperCase();

    // hava durumu texti de çevrilsin
    setTimeout(forceTranslateTR, 1000);

  } catch (err) {
    console.error("Hava durumu patladı:", err);
  }
}
window.addEventListener("load", () => {
  fetchWeatherData();
});