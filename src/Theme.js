import * as am4core from "@amcharts/amcharts4/core";
//import * as am4charts from "@amcharts/amcharts4/charts";

export default function am4themes_myTheme(target) {
  if (target instanceof am4core.ColorSet) {
    target.list = [
      am4core.color("#003f5c"),
      am4core.color("#374c80"),
      am4core.color("#7a5195"),
      am4core.color("#bc5090"),
      am4core.color("#ef5675"),
      am4core.color("#ff764a"),
      am4core.color("#ffa600"),
    ];
  }
  if (target instanceof am4core.InterfaceColorSet) {
    target.setFor("grid", am4core.color("#aaa"));
    target.setFor("text", am4core.color("#aaa"));
    
  }
}