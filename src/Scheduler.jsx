import React, { Component } from "react";
import "dhtmlx-scheduler";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";

const scheduler = window.scheduler;

export default class Scheduler extends Component {
  initSchedulerEvents() {
    if (scheduler._$initialized) {
      return;
    }

    const onDataUpdated = this.props.onDataUpdated;

    scheduler.attachEvent("onEventAdded", (id, ev) => {
      if (onDataUpdated) {
        onDataUpdated("create", ev, id);
      }
    });

    scheduler.attachEvent("onEventChanged", (id, ev) => {
      if (onDataUpdated) {
        onDataUpdated("update", ev, id);
      }
    });

    scheduler.attachEvent("onEventDeleted", (id, ev) => {
      if (onDataUpdated) {
        onDataUpdated("delete", ev, id);
      }
    });
    scheduler._$initialized = true;
  }
  
  componentDidMount() {
    scheduler.skin = "material";
    scheduler.config.header = [
      "date",
      "prev",
      "today",
      "next",
    ];
    scheduler.config.hour_date = "%G:%i";
    scheduler.xy.scale_width = 60;
    scheduler.currentView = "day";

    this.initSchedulerEvents();

    const { events } = this.props;
    scheduler.init(this.schedulerContainer, new Date(), "day");
    scheduler.clearAll();
    scheduler.parse(events);
  }

  render() {
    return (
      <div
        ref={(input) => {
          this.schedulerContainer = input;
        }}
        style={{ width: "100%", height: "100%" }}
      ></div>
    );
  }
}
