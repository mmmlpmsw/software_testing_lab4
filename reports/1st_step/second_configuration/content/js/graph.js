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
        data: {"result": {"minY": 431.0, "minX": 0.0, "maxY": 1029.0, "series": [{"data": [[0.0, 431.0], [0.1, 431.0], [0.2, 432.0], [0.3, 433.0], [0.4, 433.0], [0.5, 433.0], [0.6, 433.0], [0.7, 434.0], [0.8, 435.0], [0.9, 436.0], [1.0, 436.0], [1.1, 436.0], [1.2, 438.0], [1.3, 438.0], [1.4, 439.0], [1.5, 439.0], [1.6, 442.0], [1.7, 442.0], [1.8, 455.0], [1.9, 457.0], [2.0, 457.0], [2.1, 458.0], [2.2, 460.0], [2.3, 460.0], [2.4, 460.0], [2.5, 460.0], [2.6, 461.0], [2.7, 461.0], [2.8, 462.0], [2.9, 464.0], [3.0, 464.0], [3.1, 465.0], [3.2, 465.0], [3.3, 465.0], [3.4, 466.0], [3.5, 466.0], [3.6, 467.0], [3.7, 467.0], [3.8, 469.0], [3.9, 469.0], [4.0, 469.0], [4.1, 473.0], [4.2, 474.0], [4.3, 474.0], [4.4, 474.0], [4.5, 474.0], [4.6, 474.0], [4.7, 476.0], [4.8, 476.0], [4.9, 476.0], [5.0, 476.0], [5.1, 477.0], [5.2, 477.0], [5.3, 478.0], [5.4, 479.0], [5.5, 479.0], [5.6, 480.0], [5.7, 481.0], [5.8, 483.0], [5.9, 484.0], [6.0, 484.0], [6.1, 484.0], [6.2, 485.0], [6.3, 487.0], [6.4, 487.0], [6.5, 487.0], [6.6, 487.0], [6.7, 488.0], [6.8, 488.0], [6.9, 488.0], [7.0, 488.0], [7.1, 488.0], [7.2, 488.0], [7.3, 488.0], [7.4, 488.0], [7.5, 488.0], [7.6, 488.0], [7.7, 488.0], [7.8, 488.0], [7.9, 488.0], [8.0, 488.0], [8.1, 488.0], [8.2, 488.0], [8.3, 488.0], [8.4, 489.0], [8.5, 489.0], [8.6, 489.0], [8.7, 489.0], [8.8, 489.0], [8.9, 489.0], [9.0, 489.0], [9.1, 489.0], [9.2, 489.0], [9.3, 489.0], [9.4, 489.0], [9.5, 489.0], [9.6, 489.0], [9.7, 489.0], [9.8, 489.0], [9.9, 489.0], [10.0, 489.0], [10.1, 490.0], [10.2, 490.0], [10.3, 490.0], [10.4, 490.0], [10.5, 490.0], [10.6, 490.0], [10.7, 490.0], [10.8, 490.0], [10.9, 490.0], [11.0, 490.0], [11.1, 490.0], [11.2, 490.0], [11.3, 490.0], [11.4, 490.0], [11.5, 490.0], [11.6, 490.0], [11.7, 490.0], [11.8, 490.0], [11.9, 490.0], [12.0, 490.0], [12.1, 491.0], [12.2, 491.0], [12.3, 491.0], [12.4, 491.0], [12.5, 491.0], [12.6, 491.0], [12.7, 491.0], [12.8, 491.0], [12.9, 491.0], [13.0, 491.0], [13.1, 491.0], [13.2, 491.0], [13.3, 492.0], [13.4, 492.0], [13.5, 492.0], [13.6, 492.0], [13.7, 492.0], [13.8, 492.0], [13.9, 492.0], [14.0, 492.0], [14.1, 492.0], [14.2, 492.0], [14.3, 492.0], [14.4, 492.0], [14.5, 492.0], [14.6, 492.0], [14.7, 492.0], [14.8, 492.0], [14.9, 492.0], [15.0, 492.0], [15.1, 492.0], [15.2, 492.0], [15.3, 492.0], [15.4, 492.0], [15.5, 492.0], [15.6, 493.0], [15.7, 493.0], [15.8, 493.0], [15.9, 493.0], [16.0, 493.0], [16.1, 493.0], [16.2, 493.0], [16.3, 493.0], [16.4, 493.0], [16.5, 493.0], [16.6, 493.0], [16.7, 493.0], [16.8, 493.0], [16.9, 493.0], [17.0, 493.0], [17.1, 493.0], [17.2, 493.0], [17.3, 493.0], [17.4, 493.0], [17.5, 493.0], [17.6, 493.0], [17.7, 493.0], [17.8, 493.0], [17.9, 493.0], [18.0, 494.0], [18.1, 494.0], [18.2, 494.0], [18.3, 494.0], [18.4, 494.0], [18.5, 494.0], [18.6, 494.0], [18.7, 494.0], [18.8, 494.0], [18.9, 494.0], [19.0, 494.0], [19.1, 494.0], [19.2, 494.0], [19.3, 494.0], [19.4, 494.0], [19.5, 494.0], [19.6, 494.0], [19.7, 494.0], [19.8, 494.0], [19.9, 494.0], [20.0, 494.0], [20.1, 494.0], [20.2, 494.0], [20.3, 494.0], [20.4, 495.0], [20.5, 495.0], [20.6, 495.0], [20.7, 495.0], [20.8, 495.0], [20.9, 495.0], [21.0, 495.0], [21.1, 495.0], [21.2, 495.0], [21.3, 495.0], [21.4, 495.0], [21.5, 495.0], [21.6, 495.0], [21.7, 495.0], [21.8, 495.0], [21.9, 495.0], [22.0, 495.0], [22.1, 495.0], [22.2, 495.0], [22.3, 495.0], [22.4, 496.0], [22.5, 496.0], [22.6, 496.0], [22.7, 496.0], [22.8, 496.0], [22.9, 496.0], [23.0, 496.0], [23.1, 496.0], [23.2, 496.0], [23.3, 496.0], [23.4, 496.0], [23.5, 496.0], [23.6, 496.0], [23.7, 496.0], [23.8, 496.0], [23.9, 496.0], [24.0, 497.0], [24.1, 497.0], [24.2, 497.0], [24.3, 497.0], [24.4, 497.0], [24.5, 497.0], [24.6, 497.0], [24.7, 497.0], [24.8, 497.0], [24.9, 497.0], [25.0, 497.0], [25.1, 497.0], [25.2, 497.0], [25.3, 497.0], [25.4, 497.0], [25.5, 497.0], [25.6, 497.0], [25.7, 497.0], [25.8, 497.0], [25.9, 497.0], [26.0, 498.0], [26.1, 498.0], [26.2, 498.0], [26.3, 498.0], [26.4, 498.0], [26.5, 498.0], [26.6, 498.0], [26.7, 498.0], [26.8, 498.0], [26.9, 498.0], [27.0, 498.0], [27.1, 498.0], [27.2, 498.0], [27.3, 498.0], [27.4, 498.0], [27.5, 498.0], [27.6, 498.0], [27.7, 498.0], [27.8, 498.0], [27.9, 498.0], [28.0, 498.0], [28.1, 498.0], [28.2, 498.0], [28.3, 498.0], [28.4, 498.0], [28.5, 498.0], [28.6, 499.0], [28.7, 499.0], [28.8, 499.0], [28.9, 499.0], [29.0, 499.0], [29.1, 499.0], [29.2, 499.0], [29.3, 499.0], [29.4, 499.0], [29.5, 499.0], [29.6, 499.0], [29.7, 499.0], [29.8, 499.0], [29.9, 499.0], [30.0, 499.0], [30.1, 499.0], [30.2, 499.0], [30.3, 499.0], [30.4, 499.0], [30.5, 499.0], [30.6, 499.0], [30.7, 499.0], [30.8, 499.0], [30.9, 499.0], [31.0, 499.0], [31.1, 499.0], [31.2, 499.0], [31.3, 499.0], [31.4, 499.0], [31.5, 499.0], [31.6, 500.0], [31.7, 500.0], [31.8, 500.0], [31.9, 500.0], [32.0, 500.0], [32.1, 500.0], [32.2, 500.0], [32.3, 500.0], [32.4, 500.0], [32.5, 500.0], [32.6, 500.0], [32.7, 500.0], [32.8, 500.0], [32.9, 500.0], [33.0, 500.0], [33.1, 500.0], [33.2, 500.0], [33.3, 500.0], [33.4, 500.0], [33.5, 500.0], [33.6, 500.0], [33.7, 500.0], [33.8, 500.0], [33.9, 500.0], [34.0, 501.0], [34.1, 501.0], [34.2, 501.0], [34.3, 501.0], [34.4, 501.0], [34.5, 501.0], [34.6, 501.0], [34.7, 501.0], [34.8, 501.0], [34.9, 501.0], [35.0, 501.0], [35.1, 501.0], [35.2, 501.0], [35.3, 501.0], [35.4, 501.0], [35.5, 501.0], [35.6, 501.0], [35.7, 501.0], [35.8, 501.0], [35.9, 501.0], [36.0, 501.0], [36.1, 501.0], [36.2, 501.0], [36.3, 501.0], [36.4, 501.0], [36.5, 501.0], [36.6, 501.0], [36.7, 501.0], [36.8, 501.0], [36.9, 502.0], [37.0, 502.0], [37.1, 502.0], [37.2, 502.0], [37.3, 502.0], [37.4, 502.0], [37.5, 502.0], [37.6, 502.0], [37.7, 502.0], [37.8, 502.0], [37.9, 502.0], [38.0, 502.0], [38.1, 502.0], [38.2, 502.0], [38.3, 502.0], [38.4, 502.0], [38.5, 502.0], [38.6, 502.0], [38.7, 502.0], [38.8, 502.0], [38.9, 502.0], [39.0, 502.0], [39.1, 502.0], [39.2, 502.0], [39.3, 503.0], [39.4, 503.0], [39.5, 503.0], [39.6, 503.0], [39.7, 503.0], [39.8, 503.0], [39.9, 503.0], [40.0, 503.0], [40.1, 503.0], [40.2, 503.0], [40.3, 503.0], [40.4, 503.0], [40.5, 503.0], [40.6, 503.0], [40.7, 503.0], [40.8, 503.0], [40.9, 503.0], [41.0, 503.0], [41.1, 503.0], [41.2, 503.0], [41.3, 503.0], [41.4, 503.0], [41.5, 503.0], [41.6, 503.0], [41.7, 503.0], [41.8, 503.0], [41.9, 503.0], [42.0, 503.0], [42.1, 503.0], [42.2, 503.0], [42.3, 503.0], [42.4, 503.0], [42.5, 503.0], [42.6, 503.0], [42.7, 503.0], [42.8, 503.0], [42.9, 504.0], [43.0, 504.0], [43.1, 504.0], [43.2, 504.0], [43.3, 504.0], [43.4, 504.0], [43.5, 504.0], [43.6, 504.0], [43.7, 504.0], [43.8, 504.0], [43.9, 504.0], [44.0, 504.0], [44.1, 504.0], [44.2, 504.0], [44.3, 504.0], [44.4, 504.0], [44.5, 504.0], [44.6, 504.0], [44.7, 504.0], [44.8, 505.0], [44.9, 505.0], [45.0, 505.0], [45.1, 505.0], [45.2, 505.0], [45.3, 505.0], [45.4, 505.0], [45.5, 505.0], [45.6, 505.0], [45.7, 505.0], [45.8, 505.0], [45.9, 505.0], [46.0, 505.0], [46.1, 505.0], [46.2, 505.0], [46.3, 505.0], [46.4, 505.0], [46.5, 505.0], [46.6, 505.0], [46.7, 506.0], [46.8, 506.0], [46.9, 506.0], [47.0, 506.0], [47.1, 506.0], [47.2, 506.0], [47.3, 506.0], [47.4, 506.0], [47.5, 507.0], [47.6, 507.0], [47.7, 507.0], [47.8, 507.0], [47.9, 507.0], [48.0, 507.0], [48.1, 507.0], [48.2, 507.0], [48.3, 507.0], [48.4, 508.0], [48.5, 508.0], [48.6, 508.0], [48.7, 508.0], [48.8, 508.0], [48.9, 508.0], [49.0, 508.0], [49.1, 508.0], [49.2, 509.0], [49.3, 509.0], [49.4, 509.0], [49.5, 509.0], [49.6, 509.0], [49.7, 509.0], [49.8, 509.0], [49.9, 510.0], [50.0, 510.0], [50.1, 510.0], [50.2, 510.0], [50.3, 511.0], [50.4, 511.0], [50.5, 511.0], [50.6, 511.0], [50.7, 512.0], [50.8, 513.0], [50.9, 513.0], [51.0, 513.0], [51.1, 513.0], [51.2, 513.0], [51.3, 514.0], [51.4, 514.0], [51.5, 514.0], [51.6, 514.0], [51.7, 514.0], [51.8, 515.0], [51.9, 515.0], [52.0, 515.0], [52.1, 515.0], [52.2, 515.0], [52.3, 515.0], [52.4, 515.0], [52.5, 515.0], [52.6, 515.0], [52.7, 515.0], [52.8, 516.0], [52.9, 516.0], [53.0, 516.0], [53.1, 516.0], [53.2, 516.0], [53.3, 516.0], [53.4, 516.0], [53.5, 516.0], [53.6, 516.0], [53.7, 517.0], [53.8, 519.0], [53.9, 519.0], [54.0, 519.0], [54.1, 519.0], [54.2, 519.0], [54.3, 520.0], [54.4, 520.0], [54.5, 520.0], [54.6, 520.0], [54.7, 520.0], [54.8, 520.0], [54.9, 521.0], [55.0, 521.0], [55.1, 521.0], [55.2, 521.0], [55.3, 522.0], [55.4, 522.0], [55.5, 522.0], [55.6, 522.0], [55.7, 522.0], [55.8, 522.0], [55.9, 522.0], [56.0, 522.0], [56.1, 523.0], [56.2, 523.0], [56.3, 523.0], [56.4, 523.0], [56.5, 523.0], [56.6, 523.0], [56.7, 524.0], [56.8, 524.0], [56.9, 524.0], [57.0, 524.0], [57.1, 525.0], [57.2, 525.0], [57.3, 526.0], [57.4, 526.0], [57.5, 526.0], [57.6, 526.0], [57.7, 527.0], [57.8, 528.0], [57.9, 528.0], [58.0, 528.0], [58.1, 528.0], [58.2, 528.0], [58.3, 529.0], [58.4, 529.0], [58.5, 529.0], [58.6, 530.0], [58.7, 530.0], [58.8, 531.0], [58.9, 531.0], [59.0, 531.0], [59.1, 531.0], [59.2, 532.0], [59.3, 532.0], [59.4, 532.0], [59.5, 532.0], [59.6, 532.0], [59.7, 532.0], [59.8, 532.0], [59.9, 532.0], [60.0, 532.0], [60.1, 532.0], [60.2, 533.0], [60.3, 533.0], [60.4, 533.0], [60.5, 533.0], [60.6, 534.0], [60.7, 534.0], [60.8, 534.0], [60.9, 534.0], [61.0, 535.0], [61.1, 535.0], [61.2, 535.0], [61.3, 536.0], [61.4, 536.0], [61.5, 536.0], [61.6, 536.0], [61.7, 536.0], [61.8, 537.0], [61.9, 537.0], [62.0, 537.0], [62.1, 537.0], [62.2, 537.0], [62.3, 537.0], [62.4, 537.0], [62.5, 537.0], [62.6, 537.0], [62.7, 538.0], [62.8, 538.0], [62.9, 538.0], [63.0, 538.0], [63.1, 538.0], [63.2, 538.0], [63.3, 538.0], [63.4, 538.0], [63.5, 539.0], [63.6, 539.0], [63.7, 539.0], [63.8, 540.0], [63.9, 540.0], [64.0, 540.0], [64.1, 540.0], [64.2, 540.0], [64.3, 541.0], [64.4, 541.0], [64.5, 541.0], [64.6, 541.0], [64.7, 541.0], [64.8, 541.0], [64.9, 541.0], [65.0, 541.0], [65.1, 541.0], [65.2, 541.0], [65.3, 542.0], [65.4, 542.0], [65.5, 542.0], [65.6, 542.0], [65.7, 542.0], [65.8, 542.0], [65.9, 542.0], [66.0, 542.0], [66.1, 542.0], [66.2, 542.0], [66.3, 542.0], [66.4, 542.0], [66.5, 542.0], [66.6, 543.0], [66.7, 543.0], [66.8, 543.0], [66.9, 543.0], [67.0, 543.0], [67.1, 544.0], [67.2, 544.0], [67.3, 544.0], [67.4, 544.0], [67.5, 544.0], [67.6, 544.0], [67.7, 544.0], [67.8, 544.0], [67.9, 544.0], [68.0, 544.0], [68.1, 544.0], [68.2, 545.0], [68.3, 545.0], [68.4, 545.0], [68.5, 545.0], [68.6, 545.0], [68.7, 545.0], [68.8, 545.0], [68.9, 545.0], [69.0, 546.0], [69.1, 546.0], [69.2, 546.0], [69.3, 546.0], [69.4, 546.0], [69.5, 546.0], [69.6, 546.0], [69.7, 546.0], [69.8, 546.0], [69.9, 546.0], [70.0, 547.0], [70.1, 547.0], [70.2, 547.0], [70.3, 547.0], [70.4, 547.0], [70.5, 547.0], [70.6, 548.0], [70.7, 548.0], [70.8, 548.0], [70.9, 548.0], [71.0, 548.0], [71.1, 548.0], [71.2, 549.0], [71.3, 549.0], [71.4, 549.0], [71.5, 549.0], [71.6, 549.0], [71.7, 549.0], [71.8, 549.0], [71.9, 550.0], [72.0, 550.0], [72.1, 550.0], [72.2, 550.0], [72.3, 550.0], [72.4, 550.0], [72.5, 550.0], [72.6, 550.0], [72.7, 551.0], [72.8, 551.0], [72.9, 551.0], [73.0, 551.0], [73.1, 551.0], [73.2, 552.0], [73.3, 552.0], [73.4, 552.0], [73.5, 552.0], [73.6, 552.0], [73.7, 552.0], [73.8, 552.0], [73.9, 553.0], [74.0, 553.0], [74.1, 553.0], [74.2, 553.0], [74.3, 553.0], [74.4, 553.0], [74.5, 554.0], [74.6, 555.0], [74.7, 556.0], [74.8, 556.0], [74.9, 556.0], [75.0, 556.0], [75.1, 556.0], [75.2, 556.0], [75.3, 556.0], [75.4, 557.0], [75.5, 558.0], [75.6, 558.0], [75.7, 558.0], [75.8, 558.0], [75.9, 558.0], [76.0, 558.0], [76.1, 559.0], [76.2, 560.0], [76.3, 560.0], [76.4, 560.0], [76.5, 561.0], [76.6, 561.0], [76.7, 561.0], [76.8, 561.0], [76.9, 562.0], [77.0, 562.0], [77.1, 562.0], [77.2, 562.0], [77.3, 562.0], [77.4, 563.0], [77.5, 563.0], [77.6, 564.0], [77.7, 565.0], [77.8, 565.0], [77.9, 565.0], [78.0, 565.0], [78.1, 566.0], [78.2, 566.0], [78.3, 566.0], [78.4, 566.0], [78.5, 566.0], [78.6, 566.0], [78.7, 566.0], [78.8, 566.0], [78.9, 567.0], [79.0, 567.0], [79.1, 567.0], [79.2, 567.0], [79.3, 567.0], [79.4, 568.0], [79.5, 568.0], [79.6, 568.0], [79.7, 569.0], [79.8, 569.0], [79.9, 569.0], [80.0, 569.0], [80.1, 569.0], [80.2, 569.0], [80.3, 570.0], [80.4, 570.0], [80.5, 570.0], [80.6, 570.0], [80.7, 570.0], [80.8, 570.0], [80.9, 571.0], [81.0, 571.0], [81.1, 571.0], [81.2, 571.0], [81.3, 572.0], [81.4, 572.0], [81.5, 572.0], [81.6, 572.0], [81.7, 572.0], [81.8, 573.0], [81.9, 573.0], [82.0, 573.0], [82.1, 573.0], [82.2, 573.0], [82.3, 574.0], [82.4, 575.0], [82.5, 575.0], [82.6, 575.0], [82.7, 575.0], [82.8, 575.0], [82.9, 575.0], [83.0, 576.0], [83.1, 576.0], [83.2, 576.0], [83.3, 576.0], [83.4, 576.0], [83.5, 576.0], [83.6, 577.0], [83.7, 577.0], [83.8, 577.0], [83.9, 578.0], [84.0, 578.0], [84.1, 578.0], [84.2, 578.0], [84.3, 578.0], [84.4, 578.0], [84.5, 578.0], [84.6, 578.0], [84.7, 578.0], [84.8, 579.0], [84.9, 579.0], [85.0, 579.0], [85.1, 579.0], [85.2, 579.0], [85.3, 580.0], [85.4, 580.0], [85.5, 580.0], [85.6, 580.0], [85.7, 580.0], [85.8, 581.0], [85.9, 581.0], [86.0, 581.0], [86.1, 581.0], [86.2, 581.0], [86.3, 581.0], [86.4, 581.0], [86.5, 581.0], [86.6, 582.0], [86.7, 582.0], [86.8, 582.0], [86.9, 582.0], [87.0, 582.0], [87.1, 583.0], [87.2, 583.0], [87.3, 583.0], [87.4, 583.0], [87.5, 583.0], [87.6, 583.0], [87.7, 583.0], [87.8, 583.0], [87.9, 584.0], [88.0, 584.0], [88.1, 584.0], [88.2, 584.0], [88.3, 585.0], [88.4, 585.0], [88.5, 586.0], [88.6, 586.0], [88.7, 586.0], [88.8, 587.0], [88.9, 587.0], [89.0, 587.0], [89.1, 587.0], [89.2, 587.0], [89.3, 587.0], [89.4, 587.0], [89.5, 588.0], [89.6, 588.0], [89.7, 588.0], [89.8, 588.0], [89.9, 588.0], [90.0, 588.0], [90.1, 588.0], [90.2, 589.0], [90.3, 589.0], [90.4, 589.0], [90.5, 589.0], [90.6, 589.0], [90.7, 589.0], [90.8, 589.0], [90.9, 590.0], [91.0, 590.0], [91.1, 590.0], [91.2, 590.0], [91.3, 590.0], [91.4, 591.0], [91.5, 592.0], [91.6, 592.0], [91.7, 592.0], [91.8, 592.0], [91.9, 593.0], [92.0, 593.0], [92.1, 593.0], [92.2, 594.0], [92.3, 595.0], [92.4, 595.0], [92.5, 595.0], [92.6, 595.0], [92.7, 595.0], [92.8, 595.0], [92.9, 595.0], [93.0, 596.0], [93.1, 596.0], [93.2, 596.0], [93.3, 596.0], [93.4, 597.0], [93.5, 597.0], [93.6, 597.0], [93.7, 598.0], [93.8, 598.0], [93.9, 598.0], [94.0, 599.0], [94.1, 599.0], [94.2, 599.0], [94.3, 599.0], [94.4, 599.0], [94.5, 600.0], [94.6, 600.0], [94.7, 600.0], [94.8, 601.0], [94.9, 601.0], [95.0, 602.0], [95.1, 602.0], [95.2, 602.0], [95.3, 602.0], [95.4, 604.0], [95.5, 605.0], [95.6, 605.0], [95.7, 605.0], [95.8, 605.0], [95.9, 605.0], [96.0, 605.0], [96.1, 605.0], [96.2, 606.0], [96.3, 607.0], [96.4, 608.0], [96.5, 608.0], [96.6, 608.0], [96.7, 609.0], [96.8, 609.0], [96.9, 609.0], [97.0, 610.0], [97.1, 610.0], [97.2, 611.0], [97.3, 611.0], [97.4, 611.0], [97.5, 612.0], [97.6, 612.0], [97.7, 613.0], [97.8, 621.0], [97.9, 628.0], [98.0, 646.0], [98.1, 646.0], [98.2, 689.0], [98.3, 691.0], [98.4, 692.0], [98.5, 693.0], [98.6, 693.0], [98.7, 694.0], [98.8, 694.0], [98.9, 700.0], [99.0, 702.0], [99.1, 702.0], [99.2, 702.0], [99.3, 714.0], [99.4, 732.0], [99.5, 732.0], [99.6, 732.0], [99.7, 743.0], [99.8, 1024.0], [99.9, 1029.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 400.0, "maxY": 502.0, "series": [{"data": [[600.0, 35.0], [700.0, 7.0], [400.0, 252.0], [500.0, 502.0], [1000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 525.0, "series": [{"data": [[0.0, 271.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 525.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.62074778E12, "maxY": 14.0, "series": [{"data": [[1.62074784E12, 14.0], [1.62074778E12, 14.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62074784E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 529.1604010025052, "minX": 14.0, "maxY": 529.1604010025052, "series": [{"data": [[14.0, 529.1604010025052]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[14.0, 529.1604010025052]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 14.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 868.0, "minX": 1.62074778E12, "maxY": 2825.9, "series": [{"data": [[1.62074784E12, 2825.9], [1.62074778E12, 2055.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62074784E12, 1193.5], [1.62074778E12, 868.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62074784E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 512.4017857142856, "minX": 1.62074778E12, "maxY": 541.3484848484849, "series": [{"data": [[1.62074784E12, 541.3484848484849], [1.62074778E12, 512.4017857142856]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62074784E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 512.2708333333335, "minX": 1.62074778E12, "maxY": 541.2532467532463, "series": [{"data": [[1.62074784E12, 541.2532467532463], [1.62074778E12, 512.2708333333335]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62074784E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07359307359307371, "minX": 1.62074778E12, "maxY": 0.31845238095238076, "series": [{"data": [[1.62074784E12, 0.07359307359307371], [1.62074778E12, 0.31845238095238076]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62074784E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 431.0, "minX": 1.62074778E12, "maxY": 743.0, "series": [{"data": [[1.62074784E12, 743.0], [1.62074778E12, 621.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62074784E12, 591.9000000000001], [1.62074778E12, 576.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62074784E12, 706.6799999999998], [1.62074778E12, 608.63]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62074784E12, 607.9], [1.62074778E12, 596.15]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62074784E12, 487.0], [1.62074778E12, 431.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62074784E12, 532.0], [1.62074778E12, 499.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62074784E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 507.0, "minX": 1.0, "maxY": 1026.5, "series": [{"data": [[8.0, 547.0], [1.0, 565.0], [6.0, 605.0], [13.0, 609.0], [14.0, 507.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[14.0, 1026.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 507.0, "minX": 1.0, "maxY": 1026.5, "series": [{"data": [[8.0, 547.0], [1.0, 565.0], [6.0, 605.0], [13.0, 609.0], [14.0, 507.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[14.0, 1026.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.6, "minX": 1.62074778E12, "maxY": 7.7, "series": [{"data": [[1.62074784E12, 7.7], [1.62074778E12, 5.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62074784E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.6, "minX": 1.62074778E12, "maxY": 7.7, "series": [{"data": [[1.62074784E12, 7.7], [1.62074778E12, 5.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62074784E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62074778E12, "maxY": 7.666666666666667, "series": [{"data": [[1.62074784E12, 7.666666666666667], [1.62074778E12, 5.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.62074784E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62074784E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62074778E12, "maxY": 7.666666666666667, "series": [{"data": [[1.62074784E12, 7.666666666666667], [1.62074778E12, 5.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62074784E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62074784E12, "title": "Total Transactions Per Second"}},
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

