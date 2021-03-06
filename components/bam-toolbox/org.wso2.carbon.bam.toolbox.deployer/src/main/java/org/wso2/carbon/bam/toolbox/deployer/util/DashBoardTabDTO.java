/**
 * Copyright (c) 2009, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.wso2.carbon.bam.toolbox.deployer.util;

import java.util.ArrayList;

public class DashBoardTabDTO {
    private int tabId;
    private ArrayList<String> gadgets;
    private String tabName;

    public DashBoardTabDTO(){
        gadgets = new ArrayList<String>();
        tabName = "";
        tabId = 0;
    }
    public int getTabId() {
        return tabId;
    }

    public void setTabId(int tabId) {
        this.tabId = tabId;
    }

    public ArrayList<String> getGadgets() {
        return gadgets;
    }

    public void setGadgets(ArrayList<String> gadgets) {
        this.gadgets = gadgets;
    }

    public String getTabName() {
        return tabName;
    }

    public void setTabName(String tabName) {
        this.tabName = tabName;
    }

    public void addGadget(String gadgetName){
        this.gadgets.add(gadgetName);
    }


}
