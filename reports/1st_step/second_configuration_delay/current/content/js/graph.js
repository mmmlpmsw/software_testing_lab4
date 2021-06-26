/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 414.0, "minX": 0.0, "maxY": 950.0, "series": [{"data": [[0.0, 414.0], [0.1, 414.0], [0.2, 414.0], [0.3, 415.0], [0.4, 417.0], [0.5, 419.0], [0.6, 419.0], [0.7, 419.0], [0.8, 420.0], [0.9, 421.0], [1.0, 423.0], [1.1, 425.0], [1.2, 425.0], [1.3, 425.0], [1.4, 426.0], [1.5, 427.0], [1.6, 427.0], [1.7, 428.0], [1.8, 430.0], [1.9, 431.0], [2.0, 431.0], [2.1, 432.0], [2.2, 432.0], [2.3, 434.0], [2.4, 436.0], [2.5, 436.0], [2.6, 436.0], [2.7, 436.0], [2.8, 436.0], [2.9, 437.0], [3.0, 438.0], [3.1, 438.0], [3.2, 440.0], [3.3, 441.0], [3.4, 442.0], [3.5, 444.0], [3.6, 444.0], [3.7, 446.0], [3.8, 448.0], [3.9, 448.0], [4.0, 450.0], [4.1, 452.0], [4.2, 454.0], [4.3, 454.0], [4.4, 455.0], [4.5, 456.0], [4.6, 456.0], [4.7, 456.0], [4.8, 457.0], [4.9, 457.0], [5.0, 458.0], [5.1, 459.0], [5.2, 459.0], [5.3, 460.0], [5.4, 460.0], [5.5, 461.0], [5.6, 462.0], [5.7, 465.0], [5.8, 465.0], [5.9, 466.0], [6.0, 466.0], [6.1, 470.0], [6.2, 471.0], [6.3, 473.0], [6.4, 473.0], [6.5, 473.0], [6.6, 475.0], [6.7, 477.0], [6.8, 478.0], [6.9, 478.0], [7.0, 479.0], [7.1, 479.0], [7.2, 480.0], [7.3, 481.0], [7.4, 482.0], [7.5, 482.0], [7.6, 485.0], [7.7, 485.0], [7.8, 487.0], [7.9, 487.0], [8.0, 488.0], [8.1, 488.0], [8.2, 489.0], [8.3, 489.0], [8.4, 489.0], [8.5, 489.0], [8.6, 489.0], [8.7, 489.0], [8.8, 489.0], [8.9, 489.0], [9.0, 489.0], [9.1, 490.0], [9.2, 490.0], [9.3, 490.0], [9.4, 490.0], [9.5, 490.0], [9.6, 491.0], [9.7, 491.0], [9.8, 491.0], [9.9, 491.0], [10.0, 491.0], [10.1, 491.0], [10.2, 491.0], [10.3, 491.0], [10.4, 491.0], [10.5, 491.0], [10.6, 491.0], [10.7, 491.0], [10.8, 491.0], [10.9, 491.0], [11.0, 491.0], [11.1, 491.0], [11.2, 491.0], [11.3, 491.0], [11.4, 491.0], [11.5, 491.0], [11.6, 491.0], [11.7, 491.0], [11.8, 492.0], [11.9, 492.0], [12.0, 492.0], [12.1, 492.0], [12.2, 492.0], [12.3, 492.0], [12.4, 492.0], [12.5, 492.0], [12.6, 492.0], [12.7, 492.0], [12.8, 492.0], [12.9, 492.0], [13.0, 492.0], [13.1, 492.0], [13.2, 492.0], [13.3, 492.0], [13.4, 492.0], [13.5, 492.0], [13.6, 492.0], [13.7, 492.0], [13.8, 492.0], [13.9, 493.0], [14.0, 493.0], [14.1, 493.0], [14.2, 493.0], [14.3, 493.0], [14.4, 493.0], [14.5, 493.0], [14.6, 493.0], [14.7, 493.0], [14.8, 493.0], [14.9, 493.0], [15.0, 493.0], [15.1, 493.0], [15.2, 493.0], [15.3, 493.0], [15.4, 493.0], [15.5, 493.0], [15.6, 493.0], [15.7, 493.0], [15.8, 493.0], [15.9, 494.0], [16.0, 494.0], [16.1, 494.0], [16.2, 494.0], [16.3, 494.0], [16.4, 494.0], [16.5, 494.0], [16.6, 494.0], [16.7, 494.0], [16.8, 494.0], [16.9, 494.0], [17.0, 494.0], [17.1, 494.0], [17.2, 494.0], [17.3, 494.0], [17.4, 494.0], [17.5, 494.0], [17.6, 494.0], [17.7, 494.0], [17.8, 494.0], [17.9, 494.0], [18.0, 494.0], [18.1, 494.0], [18.2, 494.0], [18.3, 494.0], [18.4, 494.0], [18.5, 494.0], [18.6, 494.0], [18.7, 495.0], [18.8, 495.0], [18.9, 495.0], [19.0, 495.0], [19.1, 495.0], [19.2, 495.0], [19.3, 495.0], [19.4, 495.0], [19.5, 495.0], [19.6, 495.0], [19.7, 495.0], [19.8, 495.0], [19.9, 495.0], [20.0, 495.0], [20.1, 495.0], [20.2, 495.0], [20.3, 495.0], [20.4, 495.0], [20.5, 495.0], [20.6, 495.0], [20.7, 495.0], [20.8, 495.0], [20.9, 495.0], [21.0, 495.0], [21.1, 495.0], [21.2, 495.0], [21.3, 495.0], [21.4, 495.0], [21.5, 495.0], [21.6, 495.0], [21.7, 495.0], [21.8, 495.0], [21.9, 495.0], [22.0, 495.0], [22.1, 495.0], [22.2, 495.0], [22.3, 495.0], [22.4, 496.0], [22.5, 496.0], [22.6, 496.0], [22.7, 496.0], [22.8, 496.0], [22.9, 496.0], [23.0, 496.0], [23.1, 496.0], [23.2, 496.0], [23.3, 496.0], [23.4, 496.0], [23.5, 496.0], [23.6, 496.0], [23.7, 496.0], [23.8, 496.0], [23.9, 496.0], [24.0, 496.0], [24.1, 496.0], [24.2, 496.0], [24.3, 496.0], [24.4, 496.0], [24.5, 496.0], [24.6, 496.0], [24.7, 496.0], [24.8, 496.0], [24.9, 496.0], [25.0, 496.0], [25.1, 496.0], [25.2, 496.0], [25.3, 496.0], [25.4, 497.0], [25.5, 497.0], [25.6, 497.0], [25.7, 497.0], [25.8, 497.0], [25.9, 497.0], [26.0, 497.0], [26.1, 497.0], [26.2, 497.0], [26.3, 497.0], [26.4, 497.0], [26.5, 497.0], [26.6, 497.0], [26.7, 497.0], [26.8, 497.0], [26.9, 497.0], [27.0, 497.0], [27.1, 497.0], [27.2, 497.0], [27.3, 497.0], [27.4, 497.0], [27.5, 497.0], [27.6, 497.0], [27.7, 497.0], [27.8, 497.0], [27.9, 497.0], [28.0, 497.0], [28.1, 497.0], [28.2, 497.0], [28.3, 497.0], [28.4, 497.0], [28.5, 497.0], [28.6, 497.0], [28.7, 497.0], [28.8, 497.0], [28.9, 497.0], [29.0, 497.0], [29.1, 497.0], [29.2, 497.0], [29.3, 497.0], [29.4, 497.0], [29.5, 497.0], [29.6, 497.0], [29.7, 497.0], [29.8, 498.0], [29.9, 498.0], [30.0, 498.0], [30.1, 498.0], [30.2, 498.0], [30.3, 498.0], [30.4, 498.0], [30.5, 498.0], [30.6, 498.0], [30.7, 498.0], [30.8, 498.0], [30.9, 498.0], [31.0, 498.0], [31.1, 498.0], [31.2, 498.0], [31.3, 498.0], [31.4, 498.0], [31.5, 498.0], [31.6, 498.0], [31.7, 498.0], [31.8, 498.0], [31.9, 498.0], [32.0, 498.0], [32.1, 498.0], [32.2, 498.0], [32.3, 498.0], [32.4, 498.0], [32.5, 498.0], [32.6, 498.0], [32.7, 498.0], [32.8, 498.0], [32.9, 498.0], [33.0, 498.0], [33.1, 498.0], [33.2, 498.0], [33.3, 498.0], [33.4, 498.0], [33.5, 498.0], [33.6, 498.0], [33.7, 498.0], [33.8, 498.0], [33.9, 498.0], [34.0, 498.0], [34.1, 499.0], [34.2, 499.0], [34.3, 499.0], [34.4, 499.0], [34.5, 499.0], [34.6, 499.0], [34.7, 499.0], [34.8, 499.0], [34.9, 499.0], [35.0, 499.0], [35.1, 499.0], [35.2, 499.0], [35.3, 499.0], [35.4, 499.0], [35.5, 499.0], [35.6, 499.0], [35.7, 499.0], [35.8, 499.0], [35.9, 499.0], [36.0, 499.0], [36.1, 499.0], [36.2, 499.0], [36.3, 499.0], [36.4, 499.0], [36.5, 499.0], [36.6, 499.0], [36.7, 499.0], [36.8, 499.0], [36.9, 499.0], [37.0, 499.0], [37.1, 499.0], [37.2, 499.0], [37.3, 499.0], [37.4, 499.0], [37.5, 499.0], [37.6, 499.0], [37.7, 499.0], [37.8, 499.0], [37.9, 499.0], [38.0, 499.0], [38.1, 499.0], [38.2, 499.0], [38.3, 499.0], [38.4, 499.0], [38.5, 499.0], [38.6, 499.0], [38.7, 499.0], [38.8, 500.0], [38.9, 500.0], [39.0, 500.0], [39.1, 500.0], [39.2, 500.0], [39.3, 500.0], [39.4, 500.0], [39.5, 500.0], [39.6, 500.0], [39.7, 500.0], [39.8, 500.0], [39.9, 500.0], [40.0, 500.0], [40.1, 500.0], [40.2, 500.0], [40.3, 500.0], [40.4, 500.0], [40.5, 500.0], [40.6, 500.0], [40.7, 500.0], [40.8, 500.0], [40.9, 500.0], [41.0, 500.0], [41.1, 500.0], [41.2, 500.0], [41.3, 500.0], [41.4, 500.0], [41.5, 500.0], [41.6, 500.0], [41.7, 500.0], [41.8, 500.0], [41.9, 500.0], [42.0, 500.0], [42.1, 500.0], [42.2, 500.0], [42.3, 500.0], [42.4, 500.0], [42.5, 500.0], [42.6, 500.0], [42.7, 500.0], [42.8, 500.0], [42.9, 500.0], [43.0, 501.0], [43.1, 501.0], [43.2, 501.0], [43.3, 501.0], [43.4, 501.0], [43.5, 501.0], [43.6, 501.0], [43.7, 501.0], [43.8, 501.0], [43.9, 501.0], [44.0, 501.0], [44.1, 501.0], [44.2, 501.0], [44.3, 501.0], [44.4, 501.0], [44.5, 501.0], [44.6, 501.0], [44.7, 501.0], [44.8, 501.0], [44.9, 501.0], [45.0, 501.0], [45.1, 501.0], [45.2, 501.0], [45.3, 501.0], [45.4, 501.0], [45.5, 501.0], [45.6, 501.0], [45.7, 501.0], [45.8, 501.0], [45.9, 501.0], [46.0, 501.0], [46.1, 501.0], [46.2, 501.0], [46.3, 501.0], [46.4, 501.0], [46.5, 501.0], [46.6, 501.0], [46.7, 501.0], [46.8, 502.0], [46.9, 502.0], [47.0, 502.0], [47.1, 502.0], [47.2, 502.0], [47.3, 502.0], [47.4, 502.0], [47.5, 502.0], [47.6, 502.0], [47.7, 502.0], [47.8, 502.0], [47.9, 502.0], [48.0, 502.0], [48.1, 502.0], [48.2, 502.0], [48.3, 502.0], [48.4, 502.0], [48.5, 502.0], [48.6, 502.0], [48.7, 502.0], [48.8, 502.0], [48.9, 502.0], [49.0, 502.0], [49.1, 502.0], [49.2, 502.0], [49.3, 502.0], [49.4, 502.0], [49.5, 502.0], [49.6, 502.0], [49.7, 502.0], [49.8, 502.0], [49.9, 502.0], [50.0, 502.0], [50.1, 502.0], [50.2, 502.0], [50.3, 502.0], [50.4, 502.0], [50.5, 502.0], [50.6, 502.0], [50.7, 502.0], [50.8, 502.0], [50.9, 502.0], [51.0, 502.0], [51.1, 502.0], [51.2, 502.0], [51.3, 502.0], [51.4, 502.0], [51.5, 503.0], [51.6, 503.0], [51.7, 503.0], [51.8, 503.0], [51.9, 503.0], [52.0, 503.0], [52.1, 503.0], [52.2, 503.0], [52.3, 503.0], [52.4, 503.0], [52.5, 503.0], [52.6, 503.0], [52.7, 503.0], [52.8, 503.0], [52.9, 503.0], [53.0, 503.0], [53.1, 503.0], [53.2, 503.0], [53.3, 503.0], [53.4, 503.0], [53.5, 503.0], [53.6, 503.0], [53.7, 503.0], [53.8, 503.0], [53.9, 503.0], [54.0, 503.0], [54.1, 503.0], [54.2, 503.0], [54.3, 503.0], [54.4, 503.0], [54.5, 503.0], [54.6, 503.0], [54.7, 503.0], [54.8, 503.0], [54.9, 503.0], [55.0, 503.0], [55.1, 503.0], [55.2, 503.0], [55.3, 503.0], [55.4, 503.0], [55.5, 503.0], [55.6, 503.0], [55.7, 503.0], [55.8, 503.0], [55.9, 504.0], [56.0, 504.0], [56.1, 504.0], [56.2, 504.0], [56.3, 504.0], [56.4, 504.0], [56.5, 504.0], [56.6, 504.0], [56.7, 504.0], [56.8, 504.0], [56.9, 504.0], [57.0, 504.0], [57.1, 504.0], [57.2, 504.0], [57.3, 504.0], [57.4, 504.0], [57.5, 504.0], [57.6, 504.0], [57.7, 504.0], [57.8, 504.0], [57.9, 504.0], [58.0, 504.0], [58.1, 504.0], [58.2, 504.0], [58.3, 504.0], [58.4, 504.0], [58.5, 504.0], [58.6, 504.0], [58.7, 504.0], [58.8, 504.0], [58.9, 504.0], [59.0, 504.0], [59.1, 504.0], [59.2, 505.0], [59.3, 505.0], [59.4, 505.0], [59.5, 505.0], [59.6, 505.0], [59.7, 505.0], [59.8, 505.0], [59.9, 505.0], [60.0, 505.0], [60.1, 505.0], [60.2, 505.0], [60.3, 505.0], [60.4, 505.0], [60.5, 505.0], [60.6, 505.0], [60.7, 505.0], [60.8, 505.0], [60.9, 505.0], [61.0, 505.0], [61.1, 505.0], [61.2, 505.0], [61.3, 505.0], [61.4, 505.0], [61.5, 505.0], [61.6, 505.0], [61.7, 505.0], [61.8, 505.0], [61.9, 505.0], [62.0, 505.0], [62.1, 505.0], [62.2, 505.0], [62.3, 505.0], [62.4, 506.0], [62.5, 506.0], [62.6, 506.0], [62.7, 506.0], [62.8, 506.0], [62.9, 506.0], [63.0, 506.0], [63.1, 506.0], [63.2, 506.0], [63.3, 506.0], [63.4, 506.0], [63.5, 506.0], [63.6, 506.0], [63.7, 506.0], [63.8, 506.0], [63.9, 506.0], [64.0, 506.0], [64.1, 506.0], [64.2, 506.0], [64.3, 506.0], [64.4, 506.0], [64.5, 506.0], [64.6, 506.0], [64.7, 506.0], [64.8, 506.0], [64.9, 507.0], [65.0, 507.0], [65.1, 507.0], [65.2, 507.0], [65.3, 507.0], [65.4, 507.0], [65.5, 507.0], [65.6, 507.0], [65.7, 507.0], [65.8, 507.0], [65.9, 507.0], [66.0, 507.0], [66.1, 507.0], [66.2, 507.0], [66.3, 507.0], [66.4, 507.0], [66.5, 507.0], [66.6, 507.0], [66.7, 507.0], [66.8, 507.0], [66.9, 507.0], [67.0, 507.0], [67.1, 507.0], [67.2, 507.0], [67.3, 508.0], [67.4, 508.0], [67.5, 508.0], [67.6, 508.0], [67.7, 508.0], [67.8, 508.0], [67.9, 508.0], [68.0, 508.0], [68.1, 508.0], [68.2, 508.0], [68.3, 508.0], [68.4, 508.0], [68.5, 508.0], [68.6, 508.0], [68.7, 508.0], [68.8, 508.0], [68.9, 508.0], [69.0, 508.0], [69.1, 508.0], [69.2, 508.0], [69.3, 508.0], [69.4, 508.0], [69.5, 508.0], [69.6, 508.0], [69.7, 508.0], [69.8, 508.0], [69.9, 508.0], [70.0, 508.0], [70.1, 508.0], [70.2, 508.0], [70.3, 508.0], [70.4, 508.0], [70.5, 509.0], [70.6, 509.0], [70.7, 509.0], [70.8, 509.0], [70.9, 509.0], [71.0, 509.0], [71.1, 509.0], [71.2, 509.0], [71.3, 509.0], [71.4, 509.0], [71.5, 509.0], [71.6, 509.0], [71.7, 509.0], [71.8, 509.0], [71.9, 509.0], [72.0, 509.0], [72.1, 509.0], [72.2, 509.0], [72.3, 509.0], [72.4, 509.0], [72.5, 509.0], [72.6, 509.0], [72.7, 509.0], [72.8, 509.0], [72.9, 509.0], [73.0, 510.0], [73.1, 510.0], [73.2, 510.0], [73.3, 510.0], [73.4, 510.0], [73.5, 510.0], [73.6, 510.0], [73.7, 510.0], [73.8, 510.0], [73.9, 510.0], [74.0, 510.0], [74.1, 510.0], [74.2, 510.0], [74.3, 510.0], [74.4, 510.0], [74.5, 510.0], [74.6, 510.0], [74.7, 510.0], [74.8, 510.0], [74.9, 510.0], [75.0, 510.0], [75.1, 511.0], [75.2, 511.0], [75.3, 511.0], [75.4, 511.0], [75.5, 511.0], [75.6, 511.0], [75.7, 511.0], [75.8, 511.0], [75.9, 511.0], [76.0, 511.0], [76.1, 511.0], [76.2, 511.0], [76.3, 511.0], [76.4, 512.0], [76.5, 512.0], [76.6, 512.0], [76.7, 512.0], [76.8, 512.0], [76.9, 512.0], [77.0, 512.0], [77.1, 512.0], [77.2, 512.0], [77.3, 512.0], [77.4, 512.0], [77.5, 512.0], [77.6, 512.0], [77.7, 513.0], [77.8, 513.0], [77.9, 513.0], [78.0, 513.0], [78.1, 513.0], [78.2, 513.0], [78.3, 513.0], [78.4, 513.0], [78.5, 513.0], [78.6, 513.0], [78.7, 513.0], [78.8, 513.0], [78.9, 513.0], [79.0, 513.0], [79.1, 513.0], [79.2, 513.0], [79.3, 513.0], [79.4, 514.0], [79.5, 514.0], [79.6, 514.0], [79.7, 514.0], [79.8, 514.0], [79.9, 514.0], [80.0, 514.0], [80.1, 514.0], [80.2, 514.0], [80.3, 514.0], [80.4, 514.0], [80.5, 514.0], [80.6, 514.0], [80.7, 514.0], [80.8, 514.0], [80.9, 514.0], [81.0, 514.0], [81.1, 515.0], [81.2, 515.0], [81.3, 515.0], [81.4, 515.0], [81.5, 515.0], [81.6, 515.0], [81.7, 515.0], [81.8, 515.0], [81.9, 515.0], [82.0, 516.0], [82.1, 516.0], [82.2, 516.0], [82.3, 516.0], [82.4, 516.0], [82.5, 516.0], [82.6, 516.0], [82.7, 516.0], [82.8, 516.0], [82.9, 516.0], [83.0, 516.0], [83.1, 516.0], [83.2, 517.0], [83.3, 517.0], [83.4, 517.0], [83.5, 517.0], [83.6, 517.0], [83.7, 517.0], [83.8, 517.0], [83.9, 518.0], [84.0, 518.0], [84.1, 518.0], [84.2, 518.0], [84.3, 518.0], [84.4, 518.0], [84.5, 518.0], [84.6, 518.0], [84.7, 518.0], [84.8, 519.0], [84.9, 519.0], [85.0, 519.0], [85.1, 519.0], [85.2, 519.0], [85.3, 520.0], [85.4, 520.0], [85.5, 520.0], [85.6, 520.0], [85.7, 520.0], [85.8, 520.0], [85.9, 520.0], [86.0, 520.0], [86.1, 520.0], [86.2, 520.0], [86.3, 520.0], [86.4, 521.0], [86.5, 521.0], [86.6, 521.0], [86.7, 521.0], [86.8, 521.0], [86.9, 521.0], [87.0, 521.0], [87.1, 521.0], [87.2, 521.0], [87.3, 522.0], [87.4, 522.0], [87.5, 522.0], [87.6, 522.0], [87.7, 522.0], [87.8, 522.0], [87.9, 522.0], [88.0, 522.0], [88.1, 523.0], [88.2, 523.0], [88.3, 524.0], [88.4, 524.0], [88.5, 524.0], [88.6, 524.0], [88.7, 524.0], [88.8, 524.0], [88.9, 524.0], [89.0, 524.0], [89.1, 524.0], [89.2, 524.0], [89.3, 525.0], [89.4, 525.0], [89.5, 526.0], [89.6, 526.0], [89.7, 526.0], [89.8, 526.0], [89.9, 526.0], [90.0, 526.0], [90.1, 526.0], [90.2, 527.0], [90.3, 527.0], [90.4, 527.0], [90.5, 527.0], [90.6, 527.0], [90.7, 528.0], [90.8, 528.0], [90.9, 528.0], [91.0, 528.0], [91.1, 528.0], [91.2, 528.0], [91.3, 529.0], [91.4, 529.0], [91.5, 530.0], [91.6, 530.0], [91.7, 530.0], [91.8, 530.0], [91.9, 530.0], [92.0, 531.0], [92.1, 531.0], [92.2, 531.0], [92.3, 531.0], [92.4, 531.0], [92.5, 533.0], [92.6, 533.0], [92.7, 533.0], [92.8, 533.0], [92.9, 533.0], [93.0, 534.0], [93.1, 534.0], [93.2, 534.0], [93.3, 534.0], [93.4, 535.0], [93.5, 535.0], [93.6, 535.0], [93.7, 535.0], [93.8, 536.0], [93.9, 536.0], [94.0, 537.0], [94.1, 538.0], [94.2, 538.0], [94.3, 538.0], [94.4, 539.0], [94.5, 539.0], [94.6, 540.0], [94.7, 540.0], [94.8, 541.0], [94.9, 541.0], [95.0, 542.0], [95.1, 543.0], [95.2, 544.0], [95.3, 545.0], [95.4, 545.0], [95.5, 545.0], [95.6, 545.0], [95.7, 549.0], [95.8, 550.0], [95.9, 551.0], [96.0, 551.0], [96.1, 552.0], [96.2, 552.0], [96.3, 553.0], [96.4, 553.0], [96.5, 553.0], [96.6, 555.0], [96.7, 555.0], [96.8, 556.0], [96.9, 556.0], [97.0, 556.0], [97.1, 557.0], [97.2, 561.0], [97.3, 563.0], [97.4, 568.0], [97.5, 568.0], [97.6, 570.0], [97.7, 571.0], [97.8, 577.0], [97.9, 579.0], [98.0, 582.0], [98.1, 585.0], [98.2, 587.0], [98.3, 590.0], [98.4, 591.0], [98.5, 591.0], [98.6, 594.0], [98.7, 596.0], [98.8, 596.0], [98.9, 597.0], [99.0, 605.0], [99.1, 632.0], [99.2, 636.0], [99.3, 645.0], [99.4, 645.0], [99.5, 690.0], [99.6, 725.0], [99.7, 740.0], [99.8, 918.0], [99.9, 950.0], [100.0, 950.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 400.0, "maxY": 555.0, "series": [{"data": [[600.0, 6.0], [700.0, 2.0], [400.0, 357.0], [900.0, 2.0], [500.0, 555.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 524.0, "series": [{"data": [[0.0, 396.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 524.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 11.96017699115045, "minX": 1.62074988E12, "maxY": 14.0, "series": [{"data": [[1.62074994E12, 14.0], [1.62074988E12, 11.96017699115045], [1.62075E12, 13.551470588235293]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62075E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 417.0, "minX": 1.0, "maxY": 562.4, "series": [{"data": [[2.0, 417.0], [8.0, 442.125], [9.0, 474.1666666666667], [10.0, 456.66666666666663], [11.0, 461.8], [3.0, 421.75], [12.0, 476.27272727272725], [13.0, 485.5], [14.0, 508.79285714285686], [1.0, 471.0], [4.0, 562.4], [5.0, 445.16666666666663], [6.0, 434.83333333333337], [7.0, 447.875]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[13.433839479392631, 505.17136659435994]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 14.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 351.3333333333333, "minX": 1.62074988E12, "maxY": 3425.3333333333335, "series": [{"data": [[1.62074994E12, 3425.3333333333335], [1.62074988E12, 1382.3666666666666], [1.62075E12, 831.8666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62074994E12, 1446.6666666666667], [1.62074988E12, 583.8333333333334], [1.62075E12, 351.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62075E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 493.50442477876067, "minX": 1.62074988E12, "maxY": 516.5367647058824, "series": [{"data": [[1.62074994E12, 507.1196428571423], [1.62074988E12, 493.50442477876067], [1.62075E12, 516.5367647058824]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62075E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 493.42477876106176, "minX": 1.62074988E12, "maxY": 516.4411764705883, "series": [{"data": [[1.62074994E12, 507.0517857142856], [1.62074988E12, 493.42477876106176], [1.62075E12, 516.4411764705883]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62075E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.62074988E12, "maxY": 0.21238938053097361, "series": [{"data": [[1.62074994E12, 0.11071428571428578], [1.62074988E12, 0.21238938053097361], [1.62075E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62075E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 414.0, "minX": 1.62074988E12, "maxY": 740.0, "series": [{"data": [[1.62074994E12, 645.0], [1.62074988E12, 636.0], [1.62075E12, 740.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62074994E12, 526.0], [1.62074988E12, 533.3], [1.62075E12, 522.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62074994E12, 577.2399999999998], [1.62074988E12, 602.8399999999999], [1.62075E12, 734.7500000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62074994E12, 536.9499999999999], [1.62074988E12, 565.0999999999997], [1.62075E12, 553.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62074994E12, 488.0], [1.62074988E12, 414.0], [1.62075E12, 490.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62074994E12, 503.0], [1.62074988E12, 500.0], [1.62075E12, 502.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62075E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 415.0, "minX": 3.0, "maxY": 950.0, "series": [{"data": [[8.0, 512.0], [9.0, 504.0], [5.0, 415.0], [10.0, 501.0], [11.0, 436.0], [3.0, 419.0], [12.0, 502.0], [6.0, 505.0], [7.0, 494.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 918.0], [6.0, 950.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 415.0, "minX": 3.0, "maxY": 950.0, "series": [{"data": [[8.0, 512.0], [9.0, 504.0], [5.0, 415.0], [10.0, 501.0], [11.0, 436.0], [3.0, 419.0], [12.0, 501.0], [6.0, 505.0], [7.0, 494.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 918.0], [6.0, 950.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.2333333333333334, "minX": 1.62074988E12, "maxY": 9.333333333333334, "series": [{"data": [[1.62074994E12, 9.333333333333334], [1.62074988E12, 3.8], [1.62075E12, 2.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62075E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.2666666666666666, "minX": 1.62074988E12, "maxY": 9.333333333333334, "series": [{"data": [[1.62074994E12, 9.333333333333334], [1.62074988E12, 3.7666666666666666], [1.62075E12, 2.2666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62075E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62074988E12, "maxY": 9.333333333333334, "series": [{"data": [[1.62074994E12, 9.333333333333334], [1.62074988E12, 3.7666666666666666], [1.62075E12, 2.2333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.62075E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62075E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62074988E12, "maxY": 9.333333333333334, "series": [{"data": [[1.62074994E12, 9.333333333333334], [1.62074988E12, 3.7666666666666666], [1.62075E12, 2.2333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62075E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62075E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

