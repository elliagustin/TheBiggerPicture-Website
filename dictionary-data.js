const dictionaryData = [
  {
    concept: "Backtest",
    definition: "A test of a trading strategy using historical data to understand how it would have behaved in the past.",
    videoTitle: "Episode 1 - Building the First Trading Model",
    videoUrl: "https://youtube.com/",
    comment: "Useful for explaining why past performance is only a starting point, not proof of future profitability."
  },
  {
    concept: "Missing Candle",
    definition: "A candle that should exist in a time series but is missing, incomplete, or filled with null values.",
    videoTitle: "Episode 2 - Cleaning Forex Data",
    videoUrl: "https://youtube.com/",
    comment: "Important because missing candles can create bias if they are handled incorrectly."
  },
  {
    concept: "Interpolation",
    definition: "A method used to estimate missing values between known data points.",
    videoTitle: "Episode 2 - Cleaning Forex Data",
    videoUrl: "https://youtube.com/",
    comment: "Can be useful for small gaps, but dangerous if applied blindly to large missing periods."
  },
  {
    concept: "Validation Dataset",
    definition: "A portion of the data used to evaluate model performance during development, before touching the final test dataset.",
    videoTitle: "Episode 3 - Training the First Model",
    videoUrl: "https://youtube.com/",
    comment: "Helps compare models and thresholds without contaminating the final test results."
  },
  {
    concept: "Threshold",
    definition: "The minimum predicted probability required before accepting a model signal as a possible trade.",
    videoTitle: "Episode 3 - Training the First Model",
    videoUrl: "https://youtube.com/",
    comment: "Higher thresholds usually reduce the number of trades but may improve precision."
  },
  {
    concept: "Precision",
    definition: "The percentage of selected signals that were actually correct.",
    videoTitle: "Episode 4 - Reading Model Results",
    videoUrl: "https://youtube.com/",
    comment: "Very important when the goal is to reduce bad trades instead of predicting every possible opportunity."
  }
];