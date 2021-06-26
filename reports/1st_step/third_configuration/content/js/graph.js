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
        data: {"result": {"minY": 331.0, "minX": 0.0, "maxY": 679.0, "series": [{"data": [[0.0, 331.0], [0.1, 332.0], [0.2, 334.0], [0.3, 334.0], [0.4, 334.0], [0.5, 334.0], [0.6, 335.0], [0.7, 336.0], [0.8, 336.0], [0.9, 336.0], [1.0, 342.0], [1.1, 342.0], [1.2, 343.0], [1.3, 387.0], [1.4, 387.0], [1.5, 387.0], [1.6, 387.0], [1.7, 387.0], [1.8, 387.0], [1.9, 387.0], [2.0, 387.0], [2.1, 388.0], [2.2, 388.0], [2.3, 388.0], [2.4, 388.0], [2.5, 388.0], [2.6, 388.0], [2.7, 388.0], [2.8, 389.0], [2.9, 389.0], [3.0, 389.0], [3.1, 389.0], [3.2, 389.0], [3.3, 389.0], [3.4, 389.0], [3.5, 389.0], [3.6, 389.0], [3.7, 389.0], [3.8, 390.0], [3.9, 390.0], [4.0, 390.0], [4.1, 390.0], [4.2, 390.0], [4.3, 390.0], [4.4, 390.0], [4.5, 390.0], [4.6, 390.0], [4.7, 390.0], [4.8, 391.0], [4.9, 391.0], [5.0, 391.0], [5.1, 391.0], [5.2, 391.0], [5.3, 391.0], [5.4, 392.0], [5.5, 392.0], [5.6, 392.0], [5.7, 392.0], [5.8, 392.0], [5.9, 392.0], [6.0, 392.0], [6.1, 392.0], [6.2, 392.0], [6.3, 392.0], [6.4, 392.0], [6.5, 392.0], [6.6, 392.0], [6.7, 392.0], [6.8, 392.0], [6.9, 392.0], [7.0, 392.0], [7.1, 392.0], [7.2, 392.0], [7.3, 392.0], [7.4, 393.0], [7.5, 393.0], [7.6, 393.0], [7.7, 393.0], [7.8, 393.0], [7.9, 393.0], [8.0, 393.0], [8.1, 393.0], [8.2, 393.0], [8.3, 393.0], [8.4, 393.0], [8.5, 393.0], [8.6, 393.0], [8.7, 393.0], [8.8, 393.0], [8.9, 393.0], [9.0, 393.0], [9.1, 393.0], [9.2, 393.0], [9.3, 394.0], [9.4, 394.0], [9.5, 394.0], [9.6, 394.0], [9.7, 394.0], [9.8, 394.0], [9.9, 394.0], [10.0, 394.0], [10.1, 394.0], [10.2, 394.0], [10.3, 394.0], [10.4, 394.0], [10.5, 394.0], [10.6, 394.0], [10.7, 394.0], [10.8, 394.0], [10.9, 394.0], [11.0, 394.0], [11.1, 394.0], [11.2, 394.0], [11.3, 394.0], [11.4, 394.0], [11.5, 394.0], [11.6, 395.0], [11.7, 395.0], [11.8, 395.0], [11.9, 395.0], [12.0, 395.0], [12.1, 395.0], [12.2, 395.0], [12.3, 395.0], [12.4, 395.0], [12.5, 395.0], [12.6, 395.0], [12.7, 395.0], [12.8, 396.0], [12.9, 396.0], [13.0, 396.0], [13.1, 396.0], [13.2, 396.0], [13.3, 396.0], [13.4, 396.0], [13.5, 396.0], [13.6, 396.0], [13.7, 396.0], [13.8, 396.0], [13.9, 396.0], [14.0, 396.0], [14.1, 396.0], [14.2, 397.0], [14.3, 397.0], [14.4, 397.0], [14.5, 397.0], [14.6, 397.0], [14.7, 397.0], [14.8, 397.0], [14.9, 397.0], [15.0, 397.0], [15.1, 397.0], [15.2, 397.0], [15.3, 397.0], [15.4, 397.0], [15.5, 397.0], [15.6, 397.0], [15.7, 397.0], [15.8, 397.0], [15.9, 397.0], [16.0, 397.0], [16.1, 397.0], [16.2, 397.0], [16.3, 397.0], [16.4, 397.0], [16.5, 397.0], [16.6, 397.0], [16.7, 397.0], [16.8, 397.0], [16.9, 398.0], [17.0, 398.0], [17.1, 398.0], [17.2, 398.0], [17.3, 398.0], [17.4, 398.0], [17.5, 398.0], [17.6, 398.0], [17.7, 398.0], [17.8, 398.0], [17.9, 398.0], [18.0, 398.0], [18.1, 398.0], [18.2, 398.0], [18.3, 398.0], [18.4, 398.0], [18.5, 398.0], [18.6, 398.0], [18.7, 398.0], [18.8, 398.0], [18.9, 398.0], [19.0, 398.0], [19.1, 399.0], [19.2, 399.0], [19.3, 399.0], [19.4, 399.0], [19.5, 399.0], [19.6, 399.0], [19.7, 399.0], [19.8, 399.0], [19.9, 399.0], [20.0, 399.0], [20.1, 399.0], [20.2, 399.0], [20.3, 399.0], [20.4, 400.0], [20.5, 400.0], [20.6, 400.0], [20.7, 400.0], [20.8, 400.0], [20.9, 400.0], [21.0, 400.0], [21.1, 400.0], [21.2, 400.0], [21.3, 400.0], [21.4, 400.0], [21.5, 400.0], [21.6, 400.0], [21.7, 400.0], [21.8, 400.0], [21.9, 400.0], [22.0, 400.0], [22.1, 400.0], [22.2, 400.0], [22.3, 400.0], [22.4, 400.0], [22.5, 400.0], [22.6, 400.0], [22.7, 400.0], [22.8, 400.0], [22.9, 400.0], [23.0, 400.0], [23.1, 400.0], [23.2, 400.0], [23.3, 400.0], [23.4, 400.0], [23.5, 401.0], [23.6, 401.0], [23.7, 401.0], [23.8, 401.0], [23.9, 401.0], [24.0, 401.0], [24.1, 401.0], [24.2, 401.0], [24.3, 401.0], [24.4, 401.0], [24.5, 401.0], [24.6, 401.0], [24.7, 401.0], [24.8, 401.0], [24.9, 401.0], [25.0, 401.0], [25.1, 401.0], [25.2, 401.0], [25.3, 402.0], [25.4, 402.0], [25.5, 402.0], [25.6, 402.0], [25.7, 402.0], [25.8, 402.0], [25.9, 402.0], [26.0, 402.0], [26.1, 402.0], [26.2, 402.0], [26.3, 402.0], [26.4, 402.0], [26.5, 402.0], [26.6, 402.0], [26.7, 402.0], [26.8, 402.0], [26.9, 402.0], [27.0, 402.0], [27.1, 402.0], [27.2, 402.0], [27.3, 403.0], [27.4, 403.0], [27.5, 403.0], [27.6, 403.0], [27.7, 403.0], [27.8, 403.0], [27.9, 403.0], [28.0, 403.0], [28.1, 403.0], [28.2, 403.0], [28.3, 403.0], [28.4, 404.0], [28.5, 404.0], [28.6, 404.0], [28.7, 404.0], [28.8, 404.0], [28.9, 404.0], [29.0, 404.0], [29.1, 404.0], [29.2, 404.0], [29.3, 404.0], [29.4, 404.0], [29.5, 404.0], [29.6, 404.0], [29.7, 404.0], [29.8, 405.0], [29.9, 405.0], [30.0, 405.0], [30.1, 405.0], [30.2, 405.0], [30.3, 405.0], [30.4, 405.0], [30.5, 405.0], [30.6, 405.0], [30.7, 405.0], [30.8, 405.0], [30.9, 405.0], [31.0, 405.0], [31.1, 405.0], [31.2, 405.0], [31.3, 406.0], [31.4, 406.0], [31.5, 406.0], [31.6, 406.0], [31.7, 406.0], [31.8, 406.0], [31.9, 406.0], [32.0, 406.0], [32.1, 407.0], [32.2, 407.0], [32.3, 407.0], [32.4, 407.0], [32.5, 407.0], [32.6, 407.0], [32.7, 407.0], [32.8, 407.0], [32.9, 407.0], [33.0, 407.0], [33.1, 407.0], [33.2, 407.0], [33.3, 408.0], [33.4, 408.0], [33.5, 408.0], [33.6, 408.0], [33.7, 409.0], [33.8, 409.0], [33.9, 409.0], [34.0, 409.0], [34.1, 409.0], [34.2, 409.0], [34.3, 410.0], [34.4, 410.0], [34.5, 410.0], [34.6, 410.0], [34.7, 411.0], [34.8, 411.0], [34.9, 411.0], [35.0, 411.0], [35.1, 412.0], [35.2, 412.0], [35.3, 413.0], [35.4, 413.0], [35.5, 413.0], [35.6, 413.0], [35.7, 413.0], [35.8, 413.0], [35.9, 414.0], [36.0, 414.0], [36.1, 414.0], [36.2, 414.0], [36.3, 414.0], [36.4, 414.0], [36.5, 414.0], [36.6, 414.0], [36.7, 414.0], [36.8, 414.0], [36.9, 415.0], [37.0, 415.0], [37.1, 415.0], [37.2, 415.0], [37.3, 415.0], [37.4, 415.0], [37.5, 415.0], [37.6, 415.0], [37.7, 415.0], [37.8, 415.0], [37.9, 415.0], [38.0, 415.0], [38.1, 415.0], [38.2, 415.0], [38.3, 415.0], [38.4, 415.0], [38.5, 415.0], [38.6, 416.0], [38.7, 416.0], [38.8, 416.0], [38.9, 416.0], [39.0, 416.0], [39.1, 416.0], [39.2, 416.0], [39.3, 416.0], [39.4, 416.0], [39.5, 416.0], [39.6, 416.0], [39.7, 416.0], [39.8, 417.0], [39.9, 417.0], [40.0, 417.0], [40.1, 417.0], [40.2, 417.0], [40.3, 418.0], [40.4, 418.0], [40.5, 418.0], [40.6, 418.0], [40.7, 419.0], [40.8, 419.0], [40.9, 419.0], [41.0, 419.0], [41.1, 419.0], [41.2, 419.0], [41.3, 419.0], [41.4, 420.0], [41.5, 420.0], [41.6, 421.0], [41.7, 421.0], [41.8, 421.0], [41.9, 421.0], [42.0, 421.0], [42.1, 421.0], [42.2, 421.0], [42.3, 422.0], [42.4, 422.0], [42.5, 422.0], [42.6, 422.0], [42.7, 422.0], [42.8, 422.0], [42.9, 422.0], [43.0, 422.0], [43.1, 422.0], [43.2, 422.0], [43.3, 422.0], [43.4, 423.0], [43.5, 423.0], [43.6, 423.0], [43.7, 424.0], [43.8, 424.0], [43.9, 424.0], [44.0, 424.0], [44.1, 424.0], [44.2, 424.0], [44.3, 424.0], [44.4, 425.0], [44.5, 425.0], [44.6, 425.0], [44.7, 425.0], [44.8, 425.0], [44.9, 425.0], [45.0, 425.0], [45.1, 425.0], [45.2, 425.0], [45.3, 425.0], [45.4, 426.0], [45.5, 426.0], [45.6, 426.0], [45.7, 426.0], [45.8, 426.0], [45.9, 426.0], [46.0, 426.0], [46.1, 427.0], [46.2, 427.0], [46.3, 427.0], [46.4, 427.0], [46.5, 427.0], [46.6, 427.0], [46.7, 427.0], [46.8, 427.0], [46.9, 427.0], [47.0, 427.0], [47.1, 427.0], [47.2, 428.0], [47.3, 428.0], [47.4, 428.0], [47.5, 428.0], [47.6, 428.0], [47.7, 428.0], [47.8, 429.0], [47.9, 429.0], [48.0, 430.0], [48.1, 431.0], [48.2, 432.0], [48.3, 432.0], [48.4, 433.0], [48.5, 433.0], [48.6, 433.0], [48.7, 433.0], [48.8, 433.0], [48.9, 433.0], [49.0, 434.0], [49.1, 434.0], [49.2, 434.0], [49.3, 434.0], [49.4, 434.0], [49.5, 434.0], [49.6, 434.0], [49.7, 434.0], [49.8, 434.0], [49.9, 434.0], [50.0, 434.0], [50.1, 435.0], [50.2, 435.0], [50.3, 435.0], [50.4, 435.0], [50.5, 435.0], [50.6, 435.0], [50.7, 436.0], [50.8, 436.0], [50.9, 436.0], [51.0, 436.0], [51.1, 436.0], [51.2, 436.0], [51.3, 436.0], [51.4, 436.0], [51.5, 437.0], [51.6, 437.0], [51.7, 437.0], [51.8, 437.0], [51.9, 437.0], [52.0, 437.0], [52.1, 437.0], [52.2, 437.0], [52.3, 437.0], [52.4, 437.0], [52.5, 437.0], [52.6, 437.0], [52.7, 437.0], [52.8, 437.0], [52.9, 437.0], [53.0, 437.0], [53.1, 437.0], [53.2, 437.0], [53.3, 438.0], [53.4, 438.0], [53.5, 438.0], [53.6, 438.0], [53.7, 438.0], [53.8, 438.0], [53.9, 438.0], [54.0, 439.0], [54.1, 439.0], [54.2, 439.0], [54.3, 439.0], [54.4, 439.0], [54.5, 439.0], [54.6, 440.0], [54.7, 440.0], [54.8, 440.0], [54.9, 440.0], [55.0, 440.0], [55.1, 440.0], [55.2, 440.0], [55.3, 440.0], [55.4, 441.0], [55.5, 441.0], [55.6, 441.0], [55.7, 441.0], [55.8, 441.0], [55.9, 441.0], [56.0, 441.0], [56.1, 442.0], [56.2, 442.0], [56.3, 442.0], [56.4, 442.0], [56.5, 442.0], [56.6, 442.0], [56.7, 443.0], [56.8, 443.0], [56.9, 443.0], [57.0, 444.0], [57.1, 444.0], [57.2, 444.0], [57.3, 444.0], [57.4, 445.0], [57.5, 445.0], [57.6, 445.0], [57.7, 445.0], [57.8, 445.0], [57.9, 445.0], [58.0, 445.0], [58.1, 445.0], [58.2, 446.0], [58.3, 446.0], [58.4, 446.0], [58.5, 446.0], [58.6, 446.0], [58.7, 446.0], [58.8, 447.0], [58.9, 447.0], [59.0, 447.0], [59.1, 448.0], [59.2, 448.0], [59.3, 448.0], [59.4, 449.0], [59.5, 449.0], [59.6, 449.0], [59.7, 449.0], [59.8, 449.0], [59.9, 449.0], [60.0, 449.0], [60.1, 449.0], [60.2, 449.0], [60.3, 449.0], [60.4, 450.0], [60.5, 450.0], [60.6, 450.0], [60.7, 450.0], [60.8, 450.0], [60.9, 450.0], [61.0, 450.0], [61.1, 450.0], [61.2, 450.0], [61.3, 450.0], [61.4, 450.0], [61.5, 450.0], [61.6, 450.0], [61.7, 450.0], [61.8, 450.0], [61.9, 450.0], [62.0, 450.0], [62.1, 451.0], [62.2, 451.0], [62.3, 451.0], [62.4, 451.0], [62.5, 451.0], [62.6, 451.0], [62.7, 451.0], [62.8, 451.0], [62.9, 451.0], [63.0, 451.0], [63.1, 451.0], [63.2, 451.0], [63.3, 452.0], [63.4, 452.0], [63.5, 452.0], [63.6, 452.0], [63.7, 452.0], [63.8, 452.0], [63.9, 452.0], [64.0, 452.0], [64.1, 452.0], [64.2, 453.0], [64.3, 453.0], [64.4, 453.0], [64.5, 453.0], [64.6, 453.0], [64.7, 453.0], [64.8, 453.0], [64.9, 454.0], [65.0, 454.0], [65.1, 454.0], [65.2, 454.0], [65.3, 454.0], [65.4, 454.0], [65.5, 454.0], [65.6, 454.0], [65.7, 454.0], [65.8, 454.0], [65.9, 454.0], [66.0, 454.0], [66.1, 455.0], [66.2, 455.0], [66.3, 455.0], [66.4, 455.0], [66.5, 455.0], [66.6, 455.0], [66.7, 455.0], [66.8, 455.0], [66.9, 456.0], [67.0, 456.0], [67.1, 456.0], [67.2, 456.0], [67.3, 457.0], [67.4, 457.0], [67.5, 457.0], [67.6, 457.0], [67.7, 458.0], [67.8, 458.0], [67.9, 458.0], [68.0, 458.0], [68.1, 458.0], [68.2, 458.0], [68.3, 458.0], [68.4, 458.0], [68.5, 459.0], [68.6, 459.0], [68.7, 459.0], [68.8, 459.0], [68.9, 459.0], [69.0, 459.0], [69.1, 459.0], [69.2, 460.0], [69.3, 460.0], [69.4, 460.0], [69.5, 460.0], [69.6, 460.0], [69.7, 460.0], [69.8, 461.0], [69.9, 461.0], [70.0, 461.0], [70.1, 461.0], [70.2, 462.0], [70.3, 462.0], [70.4, 462.0], [70.5, 463.0], [70.6, 463.0], [70.7, 463.0], [70.8, 464.0], [70.9, 464.0], [71.0, 464.0], [71.1, 464.0], [71.2, 464.0], [71.3, 464.0], [71.4, 464.0], [71.5, 464.0], [71.6, 465.0], [71.7, 465.0], [71.8, 465.0], [71.9, 465.0], [72.0, 465.0], [72.1, 466.0], [72.2, 466.0], [72.3, 467.0], [72.4, 467.0], [72.5, 468.0], [72.6, 468.0], [72.7, 468.0], [72.8, 468.0], [72.9, 468.0], [73.0, 468.0], [73.1, 468.0], [73.2, 468.0], [73.3, 469.0], [73.4, 469.0], [73.5, 469.0], [73.6, 469.0], [73.7, 469.0], [73.8, 469.0], [73.9, 469.0], [74.0, 469.0], [74.1, 469.0], [74.2, 469.0], [74.3, 469.0], [74.4, 469.0], [74.5, 470.0], [74.6, 470.0], [74.7, 470.0], [74.8, 470.0], [74.9, 470.0], [75.0, 470.0], [75.1, 470.0], [75.2, 471.0], [75.3, 471.0], [75.4, 471.0], [75.5, 472.0], [75.6, 472.0], [75.7, 472.0], [75.8, 473.0], [75.9, 473.0], [76.0, 473.0], [76.1, 473.0], [76.2, 473.0], [76.3, 473.0], [76.4, 473.0], [76.5, 473.0], [76.6, 473.0], [76.7, 473.0], [76.8, 475.0], [76.9, 475.0], [77.0, 475.0], [77.1, 476.0], [77.2, 476.0], [77.3, 477.0], [77.4, 477.0], [77.5, 477.0], [77.6, 477.0], [77.7, 478.0], [77.8, 478.0], [77.9, 478.0], [78.0, 478.0], [78.1, 479.0], [78.2, 479.0], [78.3, 480.0], [78.4, 480.0], [78.5, 481.0], [78.6, 481.0], [78.7, 481.0], [78.8, 481.0], [78.9, 481.0], [79.0, 481.0], [79.1, 482.0], [79.2, 482.0], [79.3, 482.0], [79.4, 483.0], [79.5, 483.0], [79.6, 484.0], [79.7, 484.0], [79.8, 484.0], [79.9, 484.0], [80.0, 484.0], [80.1, 484.0], [80.2, 484.0], [80.3, 485.0], [80.4, 485.0], [80.5, 485.0], [80.6, 485.0], [80.7, 485.0], [80.8, 485.0], [80.9, 485.0], [81.0, 485.0], [81.1, 486.0], [81.2, 486.0], [81.3, 486.0], [81.4, 486.0], [81.5, 486.0], [81.6, 486.0], [81.7, 486.0], [81.8, 486.0], [81.9, 487.0], [82.0, 487.0], [82.1, 487.0], [82.2, 488.0], [82.3, 488.0], [82.4, 488.0], [82.5, 489.0], [82.6, 491.0], [82.7, 492.0], [82.8, 492.0], [82.9, 492.0], [83.0, 492.0], [83.1, 492.0], [83.2, 492.0], [83.3, 493.0], [83.4, 493.0], [83.5, 493.0], [83.6, 495.0], [83.7, 495.0], [83.8, 495.0], [83.9, 496.0], [84.0, 497.0], [84.1, 497.0], [84.2, 497.0], [84.3, 498.0], [84.4, 500.0], [84.5, 501.0], [84.6, 501.0], [84.7, 502.0], [84.8, 502.0], [84.9, 502.0], [85.0, 503.0], [85.1, 503.0], [85.2, 504.0], [85.3, 505.0], [85.4, 505.0], [85.5, 505.0], [85.6, 505.0], [85.7, 506.0], [85.8, 506.0], [85.9, 506.0], [86.0, 506.0], [86.1, 507.0], [86.2, 508.0], [86.3, 508.0], [86.4, 510.0], [86.5, 511.0], [86.6, 511.0], [86.7, 511.0], [86.8, 513.0], [86.9, 514.0], [87.0, 515.0], [87.1, 515.0], [87.2, 515.0], [87.3, 515.0], [87.4, 515.0], [87.5, 515.0], [87.6, 516.0], [87.7, 516.0], [87.8, 516.0], [87.9, 516.0], [88.0, 516.0], [88.1, 516.0], [88.2, 516.0], [88.3, 516.0], [88.4, 517.0], [88.5, 518.0], [88.6, 518.0], [88.7, 519.0], [88.8, 520.0], [88.9, 524.0], [89.0, 524.0], [89.1, 524.0], [89.2, 524.0], [89.3, 524.0], [89.4, 525.0], [89.5, 526.0], [89.6, 527.0], [89.7, 527.0], [89.8, 528.0], [89.9, 528.0], [90.0, 529.0], [90.1, 529.0], [90.2, 529.0], [90.3, 531.0], [90.4, 531.0], [90.5, 531.0], [90.6, 532.0], [90.7, 533.0], [90.8, 533.0], [90.9, 535.0], [91.0, 535.0], [91.1, 536.0], [91.2, 537.0], [91.3, 537.0], [91.4, 540.0], [91.5, 543.0], [91.6, 543.0], [91.7, 543.0], [91.8, 543.0], [91.9, 543.0], [92.0, 544.0], [92.1, 544.0], [92.2, 544.0], [92.3, 544.0], [92.4, 544.0], [92.5, 545.0], [92.6, 545.0], [92.7, 547.0], [92.8, 547.0], [92.9, 547.0], [93.0, 549.0], [93.1, 550.0], [93.2, 553.0], [93.3, 556.0], [93.4, 560.0], [93.5, 560.0], [93.6, 561.0], [93.7, 561.0], [93.8, 562.0], [93.9, 562.0], [94.0, 562.0], [94.1, 562.0], [94.2, 563.0], [94.3, 563.0], [94.4, 569.0], [94.5, 569.0], [94.6, 570.0], [94.7, 571.0], [94.8, 571.0], [94.9, 571.0], [95.0, 571.0], [95.1, 572.0], [95.2, 579.0], [95.3, 580.0], [95.4, 580.0], [95.5, 581.0], [95.6, 581.0], [95.7, 581.0], [95.8, 581.0], [95.9, 582.0], [96.0, 583.0], [96.1, 583.0], [96.2, 584.0], [96.3, 586.0], [96.4, 586.0], [96.5, 587.0], [96.6, 587.0], [96.7, 590.0], [96.8, 592.0], [96.9, 592.0], [97.0, 592.0], [97.1, 593.0], [97.2, 599.0], [97.3, 603.0], [97.4, 603.0], [97.5, 613.0], [97.6, 614.0], [97.7, 614.0], [97.8, 615.0], [97.9, 615.0], [98.0, 615.0], [98.1, 615.0], [98.2, 632.0], [98.3, 632.0], [98.4, 633.0], [98.5, 633.0], [98.6, 633.0], [98.7, 642.0], [98.8, 650.0], [98.9, 650.0], [99.0, 652.0], [99.1, 653.0], [99.2, 653.0], [99.3, 654.0], [99.4, 654.0], [99.5, 668.0], [99.6, 672.0], [99.7, 672.0], [99.8, 672.0], [99.9, 674.0], [100.0, 679.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 30.0, "minX": 300.0, "maxY": 708.0, "series": [{"data": [[300.0, 225.0], [600.0, 30.0], [400.0, 708.0], [500.0, 143.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 926.0, "series": [{"data": [[0.0, 926.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 172.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 8.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.62055422E12, "maxY": 14.0, "series": [{"data": [[1.62055422E12, 14.0], [1.62055434E12, 14.0], [1.62055428E12, 14.0]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62055434E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 446.9918625678111, "minX": 14.0, "maxY": 446.9918625678111, "series": [{"data": [[14.0, 446.9918625678111]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[14.0, 446.9918625678111]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 14.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 196.33333333333334, "minX": 1.62055422E12, "maxY": 3425.3333333333335, "series": [{"data": [[1.62055422E12, 2825.9], [1.62055434E12, 820.4666666666667], [1.62055428E12, 3425.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62055422E12, 1193.5], [1.62055434E12, 196.33333333333334], [1.62055428E12, 1446.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62055434E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 442.5238095238096, "minX": 1.62055422E12, "maxY": 450.0021645021643, "series": [{"data": [[1.62055422E12, 450.0021645021643], [1.62055434E12, 442.5238095238096], [1.62055428E12, 445.17857142857144]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62055434E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 401.452380952381, "minX": 1.62055422E12, "maxY": 449.92424242424244, "series": [{"data": [[1.62055422E12, 449.92424242424244], [1.62055434E12, 401.452380952381], [1.62055428E12, 444.767857142857]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62055434E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.62055422E12, "maxY": 0.6536796536796546, "series": [{"data": [[1.62055422E12, 0.6536796536796546], [1.62055434E12, 0.0], [1.62055428E12, 0.47500000000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62055434E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 331.0, "minX": 1.62055422E12, "maxY": 679.0, "series": [{"data": [[1.62055422E12, 642.0], [1.62055434E12, 590.0], [1.62055428E12, 679.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62055422E12, 543.0], [1.62055434E12, 563.0], [1.62055428E12, 506.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62055422E12, 632.37], [1.62055434E12, 590.0], [1.62055428E12, 669.56]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62055422E12, 571.0], [1.62055434E12, 580.15], [1.62055428E12, 578.499999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62055422E12, 331.0], [1.62055434E12, 388.0], [1.62055428E12, 387.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62055422E12, 439.0], [1.62055434E12, 420.5], [1.62055428E12, 434.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62055434E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 426.0, "minX": 14.0, "maxY": 435.0, "series": [{"data": [[14.0, 435.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[14.0, 426.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 14.0, "maxY": 435.0, "series": [{"data": [[14.0, 435.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[14.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1666666666666667, "minX": 1.62055422E12, "maxY": 9.333333333333334, "series": [{"data": [[1.62055422E12, 7.933333333333334], [1.62055434E12, 1.1666666666666667], [1.62055428E12, 9.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62055434E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.62055422E12, "maxY": 9.333333333333334, "series": [{"data": [[1.62055422E12, 7.7], [1.62055434E12, 1.2666666666666666], [1.62055428E12, 9.333333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62055434E12, 0.13333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62055434E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.62055422E12, "maxY": 9.333333333333334, "series": [{"data": [[1.62055422E12, 7.7], [1.62055434E12, 1.2666666666666666], [1.62055428E12, 9.333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.62055434E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62055434E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.62055422E12, "maxY": 9.333333333333334, "series": [{"data": [[1.62055422E12, 7.7], [1.62055434E12, 1.2666666666666666], [1.62055428E12, 9.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62055434E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62055434E12, "title": "Total Transactions Per Second"}},
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

