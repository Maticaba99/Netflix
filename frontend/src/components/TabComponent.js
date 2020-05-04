import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TabDoor from "./tabsNav/TabDoor";
import TabDevices from "./tabsNav/TabDevices";
import TabPrice from "./tabsNav/TabPrice";

import "../assets/less/TabNav.less";
import TabComponentOne from "./tabsComponent/tabComponentOne";
import TabComponentTwo from "./tabsComponent/tabComponentTwo";
import TabComponentThree from "./tabsComponent/tabComponentThree";

function TabComponent() {
  let [tabActive, setTabActive] = useState(0);
  return (
    <div className="Tabs">
      <Tabs className="Tabs__container">
        <TabList className="Tabs__container--list">
          <Tab
            onClick={() => setTabActive((tabActive = 0))}
            className={`${tabActive === 0 ? "active" : ""}`}
          >
            <TabDoor />
            <p>
              <strong>
                No commitments <br />
                Cancel online at anytime
              </strong>
            </p>
          </Tab>
          <Tab
            onClick={() => setTabActive((tabActive = 1))}
            className={`TabDevices ${tabActive === 1 ? "active" : ""}`}
          >
            <TabDevices />
            <p>
              <strong>Watch anywhere</strong>
            </p>
          </Tab>
          <Tab
            onClick={() => setTabActive((tabActive = 2))}
            className={`${tabActive === 2 ? "active" : ""}`}
          >
            <TabPrice />
            <p>
              <strong>Pick your price</strong>
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <TabComponentOne />
        </TabPanel>
        <TabPanel>
          <TabComponentTwo />
        </TabPanel>
        <TabPanel>
          <TabComponentThree />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabComponent;
