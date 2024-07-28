document.addEventListener("DOMContentLoaded", function () {
  const timezoneSelect = document.getElementById("timezone");
  const gmtCheckbox = document.getElementById("gmtCheckbox");
  const modeToggle = document.getElementById("modeToggle");
  const datetimeInput = document.getElementById("datetime");
  const timestampInput = document.getElementById("timestamp");
  const convertedDatetimeInput = document.getElementById("convertedDatetime");

  // Populate the timezone dropdown using Intl.supportedValuesOf
  const timeZones = Intl.supportedValuesOf("timeZone");

  timeZones.forEach((zone) => {
    const option = document.createElement("option");
    option.value = zone;
    option.text = zone;
    timezoneSelect.appendChild(option);
  });

  // Set the local time zone as default
  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  timezoneSelect.value = localTimezone;

  // Initialize with the current date and time
  const now = new Date();
  datetimeInput.value = now.toISOString().slice(0, 19);

  function updateTimestamp() {
    const datetime = datetimeInput.value;
    const timezone = gmtCheckbox.checked ? "GMT" : timezoneSelect.value;
    if (datetime) {
      const date = new Date(datetime);
      const offset = date.getTimezoneOffset() * 60000; // Offset in milliseconds
      const timezoneDate = new Date(
        date.getTime() - offset + getTimezoneOffsetMilliseconds(timezone),
      );
      const unixTimestamp = Math.floor(timezoneDate.getTime() / 1000);
      timestampInput.value = unixTimestamp;
      updateConvertedDatetime(unixTimestamp);
    }
  }

  function updateConvertedDatetime(unixTimestamp) {
    const timezone = gmtCheckbox.checked ? "GMT" : timezoneSelect.value;
    if (unixTimestamp) {
      const date = new Date(unixTimestamp * 1000);
      const isoString = date.toISOString().slice(0, 19); // "YYYY-MM-DDTHH:MM:SS"
      datetimeInput.value = isoString;

      // Display the converted date/time in a readable format
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        dateStyle: "full",
        timeStyle: "long",
      }).format(date);
      convertedDatetimeInput.value = formattedDate;
    }
  }

  function getTimezoneOffsetMilliseconds(timezone) {
    const now = new Date();
    const tzString = now.toLocaleString("en-US", { timeZone: timezone });
    const localString = now.toLocaleString("en-US");
    const localDate = new Date(localString);
    const tzDate = new Date(tzString);
    return tzDate.getTime() - localDate.getTime();
  }

  // Event listeners for automatic updates
  datetimeInput.addEventListener("input", updateTimestamp);
  timezoneSelect.addEventListener("change", updateTimestamp);
  gmtCheckbox.addEventListener("change", function () {
    timezoneSelect.disabled = gmtCheckbox.checked;
    updateTimestamp();
  });

  // Dark/Light mode toggle
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const currentMode =
    localStorage.getItem("mode") || (prefersDarkScheme ? "dark" : "light");

  if (currentMode === "dark") {
    document.body.classList.add("dark-mode");
    modeToggle.checked = true;
  } else {
    modeToggle.checked = false;
  }

  modeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
    const newMode = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";
    localStorage.setItem("mode", newMode);
  });

  // Initial update
  updateTimestamp();
});
