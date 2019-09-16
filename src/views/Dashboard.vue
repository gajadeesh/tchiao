<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body>
          
          <b-card-body class="pb-0 text-center">
            <div class="d-flex justify-content-center mb-3" v-if="NODShow">
           <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" ></b-spinner>
          </div>
            <!-- <b-dropdown class="float-right" variant="transparent p-0" right> -->
            <!-- <template slot="button-content">
                <i class="icon-settings"></i>
            </template>-->
            <!-- <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>-->
            <!-- </b-dropdown> -->
            <div v-else>
              <p>Number of downloads</p>
            <h1 class="mb-0 text-muted">{{androidCount+iosCount}}</h1>
            <br />
            <br />
            </div>
            
          </b-card-body>
          <!-- <card-line1-chart-example chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/> -->
          <small class="text-center text-muted">App Downloads</small>
          <br />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body>
          <b-card-body class="pb-0 text-center">
            <div class="d-flex justify-content-center mb-3" v-if="ACTShow">
           <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" ></b-spinner>
          </div>
            <!-- <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
              <template slot="button-content">
                <i class="icon-location-pin"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>-->
             <div v-else>
            <p>Active users</p>
            <h1 class="mb-0 text-muted">{{COnline}}</h1>
            <br />
            <br />
             </div>
          </b-card-body>
          <small class="text-center text-muted">Current users</small>
          <br />
          <!-- <card-line2-chart-example chartId="card-chart-02" class="chart-wrapper px-3" style="height:70px;" :height="70"/> -->
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body>
          <b-card-body class="pb-0 text-center">
            <div class="d-flex justify-content-center mb-3" v-if="NUShow">
           <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" ></b-spinner>
          </div>
            <!-- <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>-->
            <div v-else>
            <p>New users</p>
            <h1 class="mb-0 text-muted">{{NUserCount}}</h1>
            <br />
            <br />
            </div>
          </b-card-body>
          <small class="text-center text-muted">Newly joined</small>
          <br />
          <!-- <card-line3-chart-example chartId="card-chart-03" class="chart-wrapper" style="height:70px;" height="70"/> -->
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body>
          <b-card-body class="pb-0 text-center">
            <div class="d-flex justify-content-center mb-3" v-if="ADTShow">
           <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" ></b-spinner>
          </div>
            <!-- <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>-->
            <div v-else>
            <p>App downtime</p>
            <h1 class="mb-0 text-muted">5 hours</h1>
            <br />
            <br />
            </div>
          </b-card-body>
          <small class="text-center text-muted">Downtime</small>
          <br />
          <!-- <card-bar-chart-example chartId="card-chart-04" class="chart-wrapper px-3" style="height:70px;" height="70"/> -->
        </b-card>
      </b-col>
    </b-row>
    <b-card>
      <b-row>
        <b-col sm="5">
          <h4 id="traffic" class="card-title mb-0">Traffic</h4>
          <div class="small text-muted">{{ yourDateString | formatDate}}</div>
        </b-col>
        <b-col sm="7" class="d-none d-md-block">
          <!-- <b-button type="button" variant="primary" class="float-right">
            <i class="icon-cloud-download"></i>
          </b-button>-->
          <b-button-toolbar class="float-right" aria-label="Toolbar with buttons group">
            <b-form-radio-group
              class="mr-3"
              id="radiosBtn"
              buttons
              button-variant="outline-secondary"
              v-model="trafficClicked"
              :newUserTraffic="newUserTraffic"
              name="radiosBtn"
            >
              <!-- <b-form-radio class="mx-0" value="Day" >Day</b-form-radio> -->
              <b-form-radio class="mx-0" value="Month">Month</b-form-radio>
              <b-form-radio class="mx-0" value="Year">Year</b-form-radio>
            </b-form-radio-group>
          </b-button-toolbar>
        </b-col>
      </b-row>

      <main-chart-example
        v-if="newUserTraffic"
        :newUserTraffic="newUserTraffic"
        chartId="main-chart-01"
        class="chart-wrapper"
        style="height:300px;margin-top:40px;"
        height="300"
      ></main-chart-example>
      <div slot="footer">
        <b-row class="text-center">
          <b-col class="mb-sm-2 mb-0">
            <b-row align-v="center">
              <div class="text-muted">
                <strong>Number of downloads</strong>
              </div>&nbsp;&nbsp;
              <div style="background-color:#9ee2d6;height:10px;width:10px;" class="text-center"></div>
              &nbsp;&nbsp;
              {{androidCount+iosCount}}
            </b-row>

            <!-- <strong>29.703 Users (40%)</strong> -->
            <!-- <b-progress height={} class="progress-xs mt-2" :precision="1" variant="success" :value="40"></b-progress> -->
          </b-col>
          <!-- <b-col class="mb-sm-2 mb-0 d-md-down-none">
            <b-row align-v="center">
              <div class="text-muted">
                <strong>Active users</strong>
              </div>&nbsp;&nbsp;
              <div style="background-color:#6cc0e2;height:10px;width:10px;" class="text-center"></div>
            </b-row>
          </b-col>-->
          <b-col class="mb-sm-2 mb-0">
            <b-row align-v="center">
              <div class="text-muted">
                <strong>New users</strong>
              </div>&nbsp;&nbsp;
              <div style="background-color:#9dfcba;height:10px;width:10px;" class="text-center"></div>
              &nbsp;&nbsp;
              {{NUserCount}}
            </b-row>
            <!-- <strong>78.706 Views (60%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="warning" :value="60"></b-progress>-->
          </b-col>
          <!-- <b-col class="mb-sm-2 mb-0">
            <b-row align-v="center">
              <div class="text-muted">
                <strong>App downtime</strong>
              </div>&nbsp;&nbsp;
              <div style="background-color:#74acff;height:10px;width:10px;" class="text-center"></div>
            </b-row>
          </b-col>-->
          <!-- <b-col class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Bounce Rate</div>
            <strong>Average Rate (40.15%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" :value="40"></b-progress>
          </b-col>-->
        </b-row>
      </div>
    </b-card>
    <!-- <b-row>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-facebook">
            <i class="fa fa-facebook"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-01" :data="[65, 59, 84, 84, 51, 55, 40]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">89k</div>
              <div class="text-uppercase text-muted small">friends</div>
            </div>
            <div>
              <div class="text-value">459</div>
              <div class="text-uppercase text-muted small">feeds</div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-twitter">
            <i class="fa fa-twitter"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-02" :data="[1, 13, 9, 17, 34, 41, 38]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">973k</div>
              <div class="text-uppercase text-muted small">followers</div>
            </div>
            <div>
              <div class="text-value">1.792</div>
              <div class="text-uppercase text-muted small">tweets</div>
            </div>
          </div>
          </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-linkedin">
            <i class="fa fa-linkedin"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-03" :data="[78, 81, 80, 45, 34, 12, 40]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">500+</div>
              <div class="text-uppercase text-muted small">contacts</div>
            </div>
            <div>
              <div class="text-value">292</div>
              <div class="text-uppercase text-muted small">feeds</div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="6" lg="3">
        <div class="brand-card">
          <div class="brand-card-header bg-google-plus">
            <i class="fa fa-google-plus"></i>
            <div class="chart-wrapper">
              <social-box-chart-example chartId="box-chart-04" :data="[35, 23, 56, 22, 97, 23, 64]" />
            </div>
          </div>
          <div class="brand-card-body">
            <div>
              <div class="text-value">894</div>
              <div class="text-uppercase text-muted small">followers</div>
            </div>
            <div>
              <div class="text-value">92</div>
              <div class="text-uppercase text-muted small">circles</div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>-->
    <b-row>
      <b-col md="12">
        <b-card header="Usage">
          <b-row>
            <!-- <b-col sm="12" lg="6">
              <b-row>
                <b-col sm="6">
                  <Callout variant="info">
                    <small class="text-muted">New Clients</small><br>
                    <strong class="h4">9,123</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <callout-chart-example chartId="callout-chart-01" :data="[35, 23, 56, 22, 97, 23, 64]" variant="info" width="80" height="30" />
                    </div>
                  </Callout>
                </b-col>
                <b-col sm="6">
                  <Callout variant="danger">
                    <small class="text-muted">Recurring Clients</small><br>
                    <strong class="h4">22,643</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <callout-chart-example chartId="callout-chart-02" :data="[65, 59, 84, 84, 51, 55, 40]" variant="danger" width="80" height="30" />
                    </div>
                  </Callout>
                </b-col>
              </b-row>
              <hr class="mt-0">
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Monday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress class="progress-xs" variant="info" :value="34" height={} />
                  <b-progress class="progress-xs" variant="danger" :value="78" height={} />
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Tuesday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="56" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="94" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Wednesday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="12" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="67" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Thursday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="43" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="91" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Friday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="22" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="73" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Saturday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="53" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="82" variant="danger"></b-progress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Sunday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <b-progress height={} class="progress-xs" :value="9" variant="info"></b-progress>
                  <b-progress height={} class="progress-xs" :value="69" variant="danger"></b-progress>
                </div>
              </div>
              <div class="legend text-center">
                <small>
                  <sup><b-badge pill variant="info">&nbsp;</b-badge></sup>
                  New clients
                  &nbsp;&nbsp;
                  <sup><b-badge pill variant="danger">&nbsp;</b-badge></sup>
                  Recurring clients
                </small>
              </div>
            </b-col>-->
            <b-col sm="12" lg="6">
              <!-- <b-card> -->
              <div class="chart-wrapper">
                <bar-example
                  chartId="chart-bar-01"
                  height="300"
                  v-if="androidCount || iosCount"
                  :androidCount="androidCount"
                  :iosCount="iosCount"
                />
              </div>

              <!-- </b-card> -->
            </b-col>
            <b-col sm="12" lg="6">
              <b-row>
                <b-col sm="6">
                  <Callout variant="primary">
                    <small class="text-muted">Male</small>
                    <br />
                    <strong class="h4">{{maleCount}}</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <callout-chart-example
                        chartId="callout-chart-03"
                        :data="[35, 23, 56, 22, 97, 23, 64]"
                        variant="primary"
                        width="80"
                        height="30"
                      />
                    </div>
                  </Callout>
                </b-col>
                <b-col sm="6">
                  <Callout variant="danger">
                    <small class="text-muted">Female</small>
                    <br />
                    <strong class="h4">{{femaleCount}}</strong>
                    <div class="chart-wrapper" :style="{ top: '-10px'}">
                      <callout-chart-example
                        chartId="callout-chart-04"
                        :data="[65, 59, 84, 84, 51, 55, 40]"
                        variant="danger"
                        width="80"
                        height="30"
                      />
                    </div>
                  </Callout>
                </b-col>
              </b-row>
              <hr class="mt-0" />
              <ul class="horizontal-bars type-2">
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-user progress-group-icon"></i>
                    <span class="title">Male</span>
                    <span class="ml-auto font-weight-bold">{{malePer}}%</span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height="{}" class="progress-xs" :value="malePer" variant="primary"></b-progress>
                  </div>
                </div>
                <div class="progress-group mb-5">
                  <div class="progress-group-header">
                    <i class="icon-user-female progress-group-icon"></i>
                    <span class="title">Female</span>
                    <span class="ml-auto font-weight-bold">{{femalePer}}%</span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height="{}" class="progress-xs" :value="femalePer" variant="danger"></b-progress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-envelope progress-group-icon"></i>
                    <span class="title">Email</span>
                    <span class="ml-auto font-weight-bold">
                      {{emailLoginCount}}
                      <span class="text-muted small">({{emailPer}}%)</span>
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height="{}" class="progress-xs" :value="emailPer" variant="success"></b-progress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-facebook progress-group-icon"></i>
                    <span class="title">Facebook</span>
                    <span class="ml-auto font-weight-bold">
                      {{fbLoginCount}}
                      <span class="text-muted small">({{fbPer}}%)</span>
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height="{}" class="progress-xs" :value="fbPer" variant="success"></b-progress>
                  </div>
                </div>
                <!-- <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-twitter progress-group-icon"></i>
                    <span class="title">Twitter</span>
                    <span class="ml-auto font-weight-bold">37,564 <span class="text-muted small">(11%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height={} class="progress-xs" :value="11" variant="success"></b-progress>
                  </div>
                </div>-->
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-linkedin progress-group-icon"></i>
                    <span class="title">LinkedIn</span>
                    <span class="ml-auto font-weight-bold">
                      {{linkedLoginCount}}
                      <span class="text-muted small">&nbsp;({{liPer}}%)</span>
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <b-progress height="{}" class="progress-xs" :value="liPer" variant="success"></b-progress>
                  </div>
                </div>
                <div class="divider text-center">
                  <b-button variant="link" size="sm" class="text-muted">
                    <i class="icon-options"></i>
                  </b-button>
                </div>
              </ul>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col lg="12" style="height:350px;overflow-y: scroll;">
              <b-table
                class="mb-0 table-outline"
                hover
                :items="tableItems"
                :fields="tableFields"
                head-variant="light"
              >
                <div slot="country" slot-scope="item">
                  <div>{{item.item.country.name}}</div>
                </div>
                <div slot="abbreviation" slot-scope="item">
                  <div>{{item.item.country.Abbreviation}}</div>
                </div>
                <i
                  slot="state"
                  class="h4 mb-0"
                  :class="flag(item.value.flag)"
                  slot-scope="item"
                  :title="item.value.flag"
                  :id="item.value.flag"
                ></i>
                <i class="flag-icon flag-icon-pw h1" title="pw" id="pw"></i>
                <div slot="usage" slot-scope="item">
                  <div class="clearfix">
                    <div class="float-left">
                      <strong>{{item.value.value}}%</strong>
                    </div>
                    <div class="float-right">
                      <small class="text-muted">{{item.value.period}}</small>
                    </div>
                  </div>
                  <b-progress
                    height="{}"
                    class="progress-xs"
                    v-model="item.value.value"
                    :variant="variant(item.value.value)"
                  ></b-progress>
                </div>
                <i slot="payment" slot-scope="item" :class="item.value.icon" style="font-size:24px"></i>
                <div slot="activity" slot-scope="item">
                  <div class="small text-muted">Last login</div>
                  <strong>{{item.value}}</strong>
                </div>
              </b-table>
            </b-col>
            <b-col lg="12" class="p-4">
              <b-card header="Age">
                <b-col lg="12">

                  <VueApexCharts
                  v-if="showAge"
                    type="bar"
                    height="350"
                    :options="AgeOptions"
                    :series="series"
                  ></VueApexCharts>
                  
                  <b-row class="text-center pl-5 ml-5" v-if="series">
                    <b-col>
                      <b-row v-if="series">
                        <strong>Total :-</strong>
                        {{series[0].data[0]+series[1].data[0]}}
                      </b-row>
                    </b-col>
                    <b-col>
                      <b-row>
                        <strong>Total :-</strong>
                        {{series[0].data[1]+series[1].data[1]}}
                      </b-row>
                    </b-col>
                    <b-col>
                      <b-row>
                        <strong>Total :-</strong>
                        {{series[0].data[2]+series[1].data[2]}}
                      </b-row>
                    </b-col>
                    <b-col>
                      <b-row>
                        <strong>Total :-</strong>
                        {{series[0].data[3]+series[1].data[3]}}
                      </b-row>
                    </b-col>
                  </b-row>
                </b-col>
              </b-card>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CardLine1ChartExample from "./dashboard/CardLine1ChartExample";
import CardLine2ChartExample from "./dashboard/CardLine2ChartExample";
import CardLine3ChartExample from "./dashboard/CardLine3ChartExample";
import CardBarChartExample from "./dashboard/CardBarChartExample";
import MainChartExample from "./dashboard/MainChartExample";
import SocialBoxChartExample from "./dashboard/SocialBoxChartExample";
import CalloutChartExample from "./dashboard/CalloutChartExample";
import BarExample from "./charts/BarExample";

import { Callout } from "@coreui/vue";

import VueApexCharts from "vue-apexcharts";

export default {
  name: "dashboard",
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample,
    BarExample,
    VueApexCharts
  },
  data: function() {
    return {
      trafficClicked: "",
      yourDateString: Date().toString(),
      NODShow:true,
      ACTShow:true,
      NUShow:true,
      ADTShow:true,
      showAge:false,
      COnline: 0,
      NUserCount: 0,
      androidCount: 0,
      iosCount: 0,
      maleCount: 0,
      femaleCount: 0,
      malePer: 0,
      femalePer: 0,
      emailPer: 0,
      fbPer: 0,
      liPer: 0,
      emailLoginCount: 0,
      fbLoginCount: 0,
      linkedLoginCount: 0,
      newUserCountYear: [],
      newUserCountMonth: [],
      newUserCountToday: 0,
      newUserTraffic: [],
      AgeOptions: {
        chart: {
          type: "bar",
          toolbar: {
            show: true
          },

          // zoom: {
          //   enabled: true
          // },
          toolbar: {
            show: false
          }
        },

        responsive: [
          {
            breakpoint: 990,
            options: {}
          }
        ],
        plotOptions: {
          bar: {
            columnWidth: "50%"
           // horizontal: false
          }
        },
        dataLabels: {
          enabled: true,

          formatter: function(val, opts) {
            return val;
          },
          textAnchor: "middle",
          offsetX: 0,
          offsetY: 0,
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            opacity: 0.45
          }
        },
        xaxis: {
          // type: 'datetime',
          categories: ["18-25", "25-35", "35-50", "50+" ],
          labels: {
            show: true,
            style: {
              color: "black",
              fontSize: "12px"
            }
          }
        },
        legend: {
          position: "right",
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
      },
      series: [
        {
          name: "Female",
          data: []
        },
        {
          name: "Male",
          data: []
        }
      ],
      selected: "Month",
      tableItems: [
        {
          // avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          // user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Auvergne-Rhône-Alpes", Abbreviation: "ARA" },
          usage: { value: 50, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          // activity: '10 sec ago'
        },
        {
          // avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          // user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: "Bourgogne-Franche-Comté", Abbreviation: "BFC" },
          usage: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          // activity: '5 minutes ago'
        },
        {
          // avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          // user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Brittany", Abbreviation: "BRE" },
          usage: { value: 74, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          // activity: '1 hour ago'
        },
        {
          // avatar: { url: 'img/avatars/4.jpg', status: '' },
          // user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Centre", Abbreviation: "CVL" },
          usage: { value: 98, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          // activity: 'Last month'
        },
        {
          // avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          // user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Corsica", Abbreviation: "COR" },
          usage: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          // activity: 'Last week'
        },
        {
          // avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          // user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Grand Est", Abbreviation: "GES" },
          usage: { value: 43, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          // activity: 'Last week'
        },
        {
          // avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          // user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Hauts-de-France", Abbreviation: "HDF" },
          usage: { value: 43, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          // activity: 'Last week'
        },
        {
          // avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          // user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Île-de-France", Abbreviation: "IDF" },
          usage: { value: 12, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          // activity: 'Last week'
        },
        {
          // avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          // user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Normandy", Abbreviation: "NOR" },
          usage: { value: 65, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          // activity: 'Last week'
        },
        {
          // avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          // user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Nouvelle-Aquitaine", Abbreviation: "NAQ" },
          usage: { value: 30, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          // activity: 'Last week'
        },
        {
          // avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          // user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Occitanie", Abbreviation: "OCC" },
          usage: { value: 78, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          // activity: 'Last week'
        },
        {
          // avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          // user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Pays de la Loire", Abbreviation: "PDL" },
          usage: { value: 89, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          // activity: 'Last week'
        },
        {
          // avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          // user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: "Provence-Alpes-Côte d'Azur", Abbreviation: "PAC" },
          usage: { value: 83, period: "Jun 11, 2015 - Jul 10, 2015" }
          // payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          // activity: 'Last week'
        }
      ],
      tableFields: {
        // avatar: {
        //   label: '<i class="icon-people"></i>',
        //   class: 'text-center'
        // },
        // user: {
        //   label: 'User'
        // },
        country: {
          label: "State",
          class: "text-center"
        },
        abbreviation: {
          label: "Abbreviation"
        },
        usage: {
          label: "Usage"
        }

        // payment: {
        //   label: 'Payment method',
        //   class: 'text-center'
        // },
        // activity: {
        //   label: 'Activity'
        // }
      }
    };
  },
  watch: {},
  created: async function() {
    // return{
    //  COnline: function(val){
    const api_key = process.env.VUE_APP_AXIOS_API_KEY;
    const api_secret = process.env.VUE_APP_AXIOS_API_SECRET;
    const api_online_count = process.env.VUE_APP_CURRENTLY_ONLINE;
    const api_usage_count = process.env.VUE_APP_USAGE_COUNT;
    const api_ageGroup_count = process.env.VUE_APP_AGE_GROUP_COUNT;
    const api_traffic = process.env.VUE_APP_TRAFFIC;
    // console.log(api_online_count)
    const header = {
      headers: {
        "api-key": api_key,
        "api-secret": api_secret
      }
    };
    let vm = this;
    await axios
      .get(api_online_count, header)
      .then(response => {
        vm.COnline = response.data.data.onlineCount;
        vm.NUserCount = response.data.data.userCount;
        vm.NODShow = false
        vm.ADTShow = false
        vm.ACTShow = false
        vm.NUShow = false
      })
      .catch(err => {
        console.log(err);
      });

    await axios
      .get(api_traffic, header)
      .then(response => {
        console.log(response.data.data)
        vm.newUserTraffic = response.data.data.newUserCountThisMonth;
        // vm.newUserCountToday = response.data.attribute.newUserCountToday
        vm.newUserCountMonth = response.data.data.newUserCountThisMonth;
        vm.newUserCountYear = response.data.data.newUserCountThisYear;
        
      })
      .catch(err => {
        console.log(err);
      });

    await axios
      .get(api_usage_count, header)
      .then(response => {
        // console.log(response.data.attribute)
        vm.androidCount = response.data.data.androidCount;
        vm.iosCount = response.data.data.iOSCount;
        vm.maleCount = response.data.data.maleCount;

        vm.femaleCount = response.data.data.femaleCount;
        vm.malePer = Math.round(
          (response.data.data.maleCount /
            (response.data.data.maleCount +
              response.data.data.femaleCount)) *
            100
        );
        vm.femalePer = Math.round(
          (response.data.data.femaleCount /
            (response.data.data.maleCount +
              response.data.data.femaleCount)) *
            100
        );
        vm.emailPer = Math.round(
          (response.data.data.emailLogincount /
            (response.data.data.emailLogincount +
              response.data.data.fbLoginCount +
              response.data.data.linkedLoginCount)) *
            100
        );
        vm.fbPer = Math.round(
          (response.data.data.fbLoginCount /
            (response.data.data.emailLogincount +
              response.data.data.fbLoginCount +
              response.data.data.linkedLoginCount)) *
            100
        );
        vm.liPer = Math.round(
          (response.data.data.linkedLoginCount /
            (response.data.data.emailLogincount +
              response.data.data.fbLoginCount +
              response.data.data.linkedLoginCount)) *
            100
        );

        vm.emailLoginCount = response.data.data.emailLogincount;
        vm.fbLoginCount = response.data.data.fbLoginCount;
        vm.linkedLoginCount = response.data.data.linkedLoginCount;
      })
      .catch(err => {
        console.log(err);
      });

    await axios
      .get(api_ageGroup_count, header)
      .then(response => {
        // const F50plus = ageGroup50+_M.toString()
        // console.log(response.data.attribute["ageGroup50+_F"])
        // console.log(response.data.attribute.ageGroup50+'+'+_M)
        vm.series[1].data[0] = response.data.data.ageGroup18_25_M;
        vm.series[1].data[1] = response.data.data.ageGroup25_35_M;
        vm.series[1].data[2] = response.data.data.ageGroup35_50_M;
        vm.series[1].data[3] = response.data.data["ageGroup50+_M"]

        vm.series[0].data[0] = response.data.data.ageGroup18_25_F;
        vm.series[0].data[1] = response.data.data.ageGroup25_35_F;
        vm.series[0].data[2] = response.data.data.ageGroup35_50_F;
        vm.series[0].data[3] = response.data.data["ageGroup50+_F"]
        // this.NUserCount = response.data.data.userCount
        vm.showAge = true
      })
      .catch(err => {
        console.log(err);
      });
    // }
    // }
  },
  watch: {
    trafficClicked: function(val) {
      switch (val) {
        case "Day":
          this.newUserTraffic = this.newUserCountMonth;
          break;
        case "Month":
          this.newUserTraffic = this.newUserCountMonth;
          break;
        case "Year":
          this.newUserTraffic = this.newUserCountYear;
          break;
        default:
          // code block
          this.newUserTraffic = this.newUserCountMonth;
      }
    }
  },

  methods: {
    variant(value) {
      let $variant;
      if (value <= 25) {
        $variant = "info";
      } else if (value > 25 && value <= 50) {
        $variant = "success";
      } else if (value > 50 && value <= 75) {
        $variant = "warning";
      } else if (value > 75 && value <= 100) {
        $variant = "danger";
      }
      return $variant;
    },
    flag(value) {
      return "flag-icon flag-icon-" + value;
    }
  }
};
</script>

<style>
/* IE fix */
#card-chart-01,
#card-chart-02 {
  width: 100% !important;
}
</style>
