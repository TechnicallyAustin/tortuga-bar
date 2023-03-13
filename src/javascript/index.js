// includes the logic from each aspect of the page

import "bootstrap";
import 'jquery';
import 'popper.js'
import '../css/styles.css'
import { newPage } from './newPage.js'
import { foodEvent} from './food.js'
import { selectDrinkType } from "./drink.js";
//import './food.js'

// creates Page Elements
function buildPage(){
newPage()
};

// creates logic for each tab of the bar
function food(){
  foodEvent()
    // adds an event listenr to the  tab to dynmically create a menu
}

function drinks(){
  selectDrinkType()
  // adds an event listenr to the  tab to dynmically create a menu
}

function about(){
  // adds an event listenr to the  tab to dynmically create a menu
}

// builds page.
buildPage();
food()
drinks()
