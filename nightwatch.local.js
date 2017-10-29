module.exports = {
  "src_folders":["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "globals_path" : "",
  "page_objects_path": "pageObjects/",

  "selenium" : {
    "start_process" : true,
    "server_path" : "lib/selenium-server-standalone-3.6.0.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "drivers/chromedriver",
      "webdriver.gecko.driver" : "",
      "webdriver.edge.driver" : ""
    }
  },

  "test_settings" : {

    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      
      "desiredCapabilities": {
        "browserName": "chrome",
        "marionette": true,
        "javascriptEnabled": true,
        "acceptSslCerts": true
      },

      globals: require('./data/staging.js')

    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
};