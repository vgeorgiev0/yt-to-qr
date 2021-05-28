const electron = require('electron');
const path = require('path');
const { ipcMain} = require('electron')

const url = require('url');

const { format } = require('path');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
  // Create new window
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    width: 1200,
    minWidth: 1000,
    height: 800,
    minHeight: 600,
  });
  // Load html into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  mainWindow.on('closed', function() {
    mainWindow = null;
  })

 // Attach event listener to event that requests to update something in the second window
    // from the first window
    ipcMain.on('go-button-clicked', (event, arg) => {
      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'config.html'),
        protocol: 'file',
        slashes: true,
      }));
    });
  // Build menu from template
const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
// Insert menu
Menu.setApplicationMenu(mainMenu);
});

// Create menu template// Module to control application
const mainMenuTemplate = [
  {
    label: 'File',
    submenu:[
      {
        label: 'MainMenu',
        accelerator: 'Backspace',
        click(){
          mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
          }));
        }
        
      },
    {
      label: 'Quit',
      accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
      click(){
        app.quit();
      }
    },
  ]
  }
];

// If mac add an empty object to menu
if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}

// Add developer tools item if not in prod
if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu:[
      {
        label:'DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}
