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
        data: {"result": {"minY": 612.0, "minX": 0.0, "maxY": 874.0, "series": [{"data": [[0.0, 612.0], [0.1, 612.0], [0.2, 612.0], [0.3, 612.0], [0.4, 612.0], [0.5, 612.0], [0.6, 612.0], [0.7, 614.0], [0.8, 614.0], [0.9, 614.0], [1.0, 614.0], [1.1, 614.0], [1.2, 614.0], [1.3, 614.0], [1.4, 617.0], [1.5, 617.0], [1.6, 617.0], [1.7, 617.0], [1.8, 617.0], [1.9, 617.0], [2.0, 618.0], [2.1, 618.0], [2.2, 618.0], [2.3, 618.0], [2.4, 618.0], [2.5, 618.0], [2.6, 618.0], [2.7, 618.0], [2.8, 618.0], [2.9, 618.0], [3.0, 618.0], [3.1, 618.0], [3.2, 618.0], [3.3, 620.0], [3.4, 620.0], [3.5, 620.0], [3.6, 620.0], [3.7, 620.0], [3.8, 620.0], [3.9, 620.0], [4.0, 624.0], [4.1, 624.0], [4.2, 624.0], [4.3, 624.0], [4.4, 624.0], [4.5, 624.0], [4.6, 624.0], [4.7, 625.0], [4.8, 625.0], [4.9, 625.0], [5.0, 625.0], [5.1, 625.0], [5.2, 625.0], [5.3, 626.0], [5.4, 626.0], [5.5, 626.0], [5.6, 626.0], [5.7, 626.0], [5.8, 626.0], [5.9, 626.0], [6.0, 626.0], [6.1, 626.0], [6.2, 626.0], [6.3, 626.0], [6.4, 626.0], [6.5, 626.0], [6.6, 627.0], [6.7, 627.0], [6.8, 627.0], [6.9, 627.0], [7.0, 627.0], [7.1, 627.0], [7.2, 627.0], [7.3, 632.0], [7.4, 632.0], [7.5, 632.0], [7.6, 632.0], [7.7, 632.0], [7.8, 632.0], [7.9, 635.0], [8.0, 635.0], [8.1, 635.0], [8.2, 635.0], [8.3, 635.0], [8.4, 635.0], [8.5, 635.0], [8.6, 635.0], [8.7, 635.0], [8.8, 635.0], [8.9, 635.0], [9.0, 635.0], [9.1, 635.0], [9.2, 635.0], [9.3, 637.0], [9.4, 637.0], [9.5, 637.0], [9.6, 637.0], [9.7, 637.0], [9.8, 637.0], [9.9, 638.0], [10.0, 638.0], [10.1, 638.0], [10.2, 638.0], [10.3, 638.0], [10.4, 638.0], [10.5, 638.0], [10.6, 639.0], [10.7, 639.0], [10.8, 639.0], [10.9, 639.0], [11.0, 639.0], [11.1, 639.0], [11.2, 639.0], [11.3, 639.0], [11.4, 639.0], [11.5, 639.0], [11.6, 639.0], [11.7, 639.0], [11.8, 639.0], [11.9, 640.0], [12.0, 640.0], [12.1, 640.0], [12.2, 640.0], [12.3, 640.0], [12.4, 640.0], [12.5, 642.0], [12.6, 642.0], [12.7, 642.0], [12.8, 642.0], [12.9, 642.0], [13.0, 642.0], [13.1, 642.0], [13.2, 642.0], [13.3, 642.0], [13.4, 642.0], [13.5, 642.0], [13.6, 642.0], [13.7, 642.0], [13.8, 642.0], [13.9, 643.0], [14.0, 643.0], [14.1, 643.0], [14.2, 643.0], [14.3, 643.0], [14.4, 643.0], [14.5, 644.0], [14.6, 644.0], [14.7, 644.0], [14.8, 644.0], [14.9, 644.0], [15.0, 644.0], [15.1, 644.0], [15.2, 644.0], [15.3, 644.0], [15.4, 644.0], [15.5, 644.0], [15.6, 644.0], [15.7, 644.0], [15.8, 645.0], [15.9, 645.0], [16.0, 645.0], [16.1, 645.0], [16.2, 645.0], [16.3, 645.0], [16.4, 645.0], [16.5, 646.0], [16.6, 646.0], [16.7, 646.0], [16.8, 646.0], [16.9, 646.0], [17.0, 646.0], [17.1, 646.0], [17.2, 649.0], [17.3, 649.0], [17.4, 649.0], [17.5, 649.0], [17.6, 649.0], [17.7, 649.0], [17.8, 649.0], [17.9, 649.0], [18.0, 649.0], [18.1, 649.0], [18.2, 649.0], [18.3, 649.0], [18.4, 649.0], [18.5, 649.0], [18.6, 649.0], [18.7, 649.0], [18.8, 649.0], [18.9, 649.0], [19.0, 649.0], [19.1, 651.0], [19.2, 651.0], [19.3, 651.0], [19.4, 651.0], [19.5, 651.0], [19.6, 651.0], [19.7, 651.0], [19.8, 652.0], [19.9, 652.0], [20.0, 652.0], [20.1, 652.0], [20.2, 652.0], [20.3, 652.0], [20.4, 653.0], [20.5, 653.0], [20.6, 653.0], [20.7, 653.0], [20.8, 653.0], [20.9, 653.0], [21.0, 653.0], [21.1, 654.0], [21.2, 654.0], [21.3, 654.0], [21.4, 654.0], [21.5, 654.0], [21.6, 654.0], [21.7, 654.0], [21.8, 655.0], [21.9, 655.0], [22.0, 655.0], [22.1, 655.0], [22.2, 655.0], [22.3, 655.0], [22.4, 655.0], [22.5, 655.0], [22.6, 655.0], [22.7, 655.0], [22.8, 655.0], [22.9, 655.0], [23.0, 655.0], [23.1, 655.0], [23.2, 655.0], [23.3, 655.0], [23.4, 655.0], [23.5, 655.0], [23.6, 655.0], [23.7, 656.0], [23.8, 656.0], [23.9, 656.0], [24.0, 656.0], [24.1, 656.0], [24.2, 656.0], [24.3, 656.0], [24.4, 657.0], [24.5, 657.0], [24.6, 657.0], [24.7, 657.0], [24.8, 657.0], [24.9, 657.0], [25.0, 657.0], [25.1, 658.0], [25.2, 658.0], [25.3, 658.0], [25.4, 658.0], [25.5, 658.0], [25.6, 658.0], [25.7, 665.0], [25.8, 665.0], [25.9, 665.0], [26.0, 665.0], [26.1, 665.0], [26.2, 665.0], [26.3, 665.0], [26.4, 666.0], [26.5, 666.0], [26.6, 666.0], [26.7, 666.0], [26.8, 666.0], [26.9, 666.0], [27.0, 666.0], [27.1, 666.0], [27.2, 666.0], [27.3, 666.0], [27.4, 666.0], [27.5, 666.0], [27.6, 666.0], [27.7, 668.0], [27.8, 668.0], [27.9, 668.0], [28.0, 668.0], [28.1, 668.0], [28.2, 668.0], [28.3, 669.0], [28.4, 669.0], [28.5, 669.0], [28.6, 669.0], [28.7, 669.0], [28.8, 669.0], [28.9, 669.0], [29.0, 669.0], [29.1, 669.0], [29.2, 669.0], [29.3, 669.0], [29.4, 669.0], [29.5, 669.0], [29.6, 669.0], [29.7, 671.0], [29.8, 671.0], [29.9, 671.0], [30.0, 671.0], [30.1, 671.0], [30.2, 671.0], [30.3, 671.0], [30.4, 671.0], [30.5, 671.0], [30.6, 671.0], [30.7, 671.0], [30.8, 671.0], [30.9, 671.0], [31.0, 671.0], [31.1, 671.0], [31.2, 671.0], [31.3, 671.0], [31.4, 671.0], [31.5, 671.0], [31.6, 672.0], [31.7, 672.0], [31.8, 672.0], [31.9, 672.0], [32.0, 672.0], [32.1, 672.0], [32.2, 672.0], [32.3, 672.0], [32.4, 672.0], [32.5, 672.0], [32.6, 672.0], [32.7, 672.0], [32.8, 672.0], [32.9, 673.0], [33.0, 673.0], [33.1, 673.0], [33.2, 673.0], [33.3, 673.0], [33.4, 673.0], [33.5, 673.0], [33.6, 673.0], [33.7, 673.0], [33.8, 673.0], [33.9, 673.0], [34.0, 673.0], [34.1, 673.0], [34.2, 673.0], [34.3, 674.0], [34.4, 674.0], [34.5, 674.0], [34.6, 674.0], [34.7, 674.0], [34.8, 674.0], [34.9, 675.0], [35.0, 675.0], [35.1, 675.0], [35.2, 675.0], [35.3, 675.0], [35.4, 675.0], [35.5, 675.0], [35.6, 676.0], [35.7, 676.0], [35.8, 676.0], [35.9, 676.0], [36.0, 676.0], [36.1, 676.0], [36.2, 676.0], [36.3, 676.0], [36.4, 676.0], [36.5, 676.0], [36.6, 676.0], [36.7, 676.0], [36.8, 676.0], [36.9, 676.0], [37.0, 676.0], [37.1, 676.0], [37.2, 676.0], [37.3, 676.0], [37.4, 676.0], [37.5, 677.0], [37.6, 677.0], [37.7, 677.0], [37.8, 677.0], [37.9, 677.0], [38.0, 677.0], [38.1, 677.0], [38.2, 677.0], [38.3, 677.0], [38.4, 677.0], [38.5, 677.0], [38.6, 677.0], [38.7, 677.0], [38.8, 677.0], [38.9, 680.0], [39.0, 680.0], [39.1, 680.0], [39.2, 680.0], [39.3, 680.0], [39.4, 680.0], [39.5, 681.0], [39.6, 681.0], [39.7, 681.0], [39.8, 681.0], [39.9, 681.0], [40.0, 681.0], [40.1, 681.0], [40.2, 681.0], [40.3, 681.0], [40.4, 681.0], [40.5, 681.0], [40.6, 681.0], [40.7, 681.0], [40.8, 683.0], [40.9, 683.0], [41.0, 683.0], [41.1, 683.0], [41.2, 683.0], [41.3, 683.0], [41.4, 683.0], [41.5, 684.0], [41.6, 684.0], [41.7, 684.0], [41.8, 684.0], [41.9, 684.0], [42.0, 684.0], [42.1, 684.0], [42.2, 685.0], [42.3, 685.0], [42.4, 685.0], [42.5, 685.0], [42.6, 685.0], [42.7, 685.0], [42.8, 685.0], [42.9, 685.0], [43.0, 685.0], [43.1, 685.0], [43.2, 685.0], [43.3, 685.0], [43.4, 685.0], [43.5, 687.0], [43.6, 687.0], [43.7, 687.0], [43.8, 687.0], [43.9, 687.0], [44.0, 687.0], [44.1, 688.0], [44.2, 688.0], [44.3, 688.0], [44.4, 688.0], [44.5, 688.0], [44.6, 688.0], [44.7, 688.0], [44.8, 689.0], [44.9, 689.0], [45.0, 689.0], [45.1, 689.0], [45.2, 689.0], [45.3, 689.0], [45.4, 690.0], [45.5, 690.0], [45.6, 690.0], [45.7, 690.0], [45.8, 690.0], [45.9, 690.0], [46.0, 690.0], [46.1, 690.0], [46.2, 690.0], [46.3, 690.0], [46.4, 690.0], [46.5, 690.0], [46.6, 690.0], [46.7, 690.0], [46.8, 695.0], [46.9, 695.0], [47.0, 695.0], [47.1, 695.0], [47.2, 695.0], [47.3, 695.0], [47.4, 697.0], [47.5, 697.0], [47.6, 697.0], [47.7, 697.0], [47.8, 697.0], [47.9, 697.0], [48.0, 697.0], [48.1, 697.0], [48.2, 697.0], [48.3, 697.0], [48.4, 697.0], [48.5, 697.0], [48.6, 697.0], [48.7, 697.0], [48.8, 697.0], [48.9, 697.0], [49.0, 697.0], [49.1, 697.0], [49.2, 697.0], [49.3, 697.0], [49.4, 697.0], [49.5, 697.0], [49.6, 697.0], [49.7, 697.0], [49.8, 697.0], [49.9, 697.0], [50.0, 698.0], [50.1, 698.0], [50.2, 698.0], [50.3, 698.0], [50.4, 698.0], [50.5, 698.0], [50.6, 698.0], [50.7, 698.0], [50.8, 698.0], [50.9, 698.0], [51.0, 698.0], [51.1, 698.0], [51.2, 698.0], [51.3, 698.0], [51.4, 699.0], [51.5, 699.0], [51.6, 699.0], [51.7, 699.0], [51.8, 699.0], [51.9, 699.0], [52.0, 699.0], [52.1, 699.0], [52.2, 699.0], [52.3, 699.0], [52.4, 699.0], [52.5, 699.0], [52.6, 699.0], [52.7, 700.0], [52.8, 700.0], [52.9, 700.0], [53.0, 700.0], [53.1, 700.0], [53.2, 700.0], [53.3, 700.0], [53.4, 700.0], [53.5, 700.0], [53.6, 700.0], [53.7, 700.0], [53.8, 700.0], [53.9, 700.0], [54.0, 701.0], [54.1, 701.0], [54.2, 701.0], [54.3, 701.0], [54.4, 701.0], [54.5, 701.0], [54.6, 701.0], [54.7, 702.0], [54.8, 702.0], [54.9, 702.0], [55.0, 702.0], [55.1, 702.0], [55.2, 702.0], [55.3, 702.0], [55.4, 702.0], [55.5, 702.0], [55.6, 702.0], [55.7, 702.0], [55.8, 702.0], [55.9, 702.0], [56.0, 702.0], [56.1, 702.0], [56.2, 702.0], [56.3, 702.0], [56.4, 702.0], [56.5, 702.0], [56.6, 703.0], [56.7, 703.0], [56.8, 703.0], [56.9, 703.0], [57.0, 703.0], [57.1, 703.0], [57.2, 703.0], [57.3, 703.0], [57.4, 703.0], [57.5, 703.0], [57.6, 703.0], [57.7, 703.0], [57.8, 703.0], [57.9, 704.0], [58.0, 704.0], [58.1, 704.0], [58.2, 704.0], [58.3, 704.0], [58.4, 704.0], [58.5, 704.0], [58.6, 704.0], [58.7, 704.0], [58.8, 704.0], [58.9, 704.0], [59.0, 704.0], [59.1, 704.0], [59.2, 704.0], [59.3, 704.0], [59.4, 704.0], [59.5, 704.0], [59.6, 704.0], [59.7, 704.0], [59.8, 704.0], [59.9, 704.0], [60.0, 704.0], [60.1, 704.0], [60.2, 704.0], [60.3, 704.0], [60.4, 704.0], [60.5, 704.0], [60.6, 704.0], [60.7, 704.0], [60.8, 704.0], [60.9, 704.0], [61.0, 704.0], [61.1, 704.0], [61.2, 705.0], [61.3, 705.0], [61.4, 705.0], [61.5, 705.0], [61.6, 705.0], [61.7, 705.0], [61.8, 705.0], [61.9, 705.0], [62.0, 705.0], [62.1, 705.0], [62.2, 705.0], [62.3, 705.0], [62.4, 705.0], [62.5, 705.0], [62.6, 705.0], [62.7, 705.0], [62.8, 705.0], [62.9, 705.0], [63.0, 705.0], [63.1, 705.0], [63.2, 706.0], [63.3, 706.0], [63.4, 706.0], [63.5, 706.0], [63.6, 706.0], [63.7, 706.0], [63.8, 706.0], [63.9, 706.0], [64.0, 706.0], [64.1, 706.0], [64.2, 706.0], [64.3, 706.0], [64.4, 706.0], [64.5, 706.0], [64.6, 706.0], [64.7, 706.0], [64.8, 706.0], [64.9, 706.0], [65.0, 706.0], [65.1, 706.0], [65.2, 706.0], [65.3, 706.0], [65.4, 706.0], [65.5, 706.0], [65.6, 706.0], [65.7, 706.0], [65.8, 706.0], [65.9, 706.0], [66.0, 706.0], [66.1, 706.0], [66.2, 706.0], [66.3, 706.0], [66.4, 706.0], [66.5, 706.0], [66.6, 706.0], [66.7, 706.0], [66.8, 706.0], [66.9, 706.0], [67.0, 706.0], [67.1, 706.0], [67.2, 706.0], [67.3, 706.0], [67.4, 706.0], [67.5, 706.0], [67.6, 706.0], [67.7, 706.0], [67.8, 706.0], [67.9, 706.0], [68.0, 706.0], [68.1, 706.0], [68.2, 706.0], [68.3, 706.0], [68.4, 706.0], [68.5, 707.0], [68.6, 707.0], [68.7, 707.0], [68.8, 707.0], [68.9, 707.0], [69.0, 707.0], [69.1, 707.0], [69.2, 707.0], [69.3, 707.0], [69.4, 707.0], [69.5, 707.0], [69.6, 707.0], [69.7, 707.0], [69.8, 707.0], [69.9, 707.0], [70.0, 707.0], [70.1, 707.0], [70.2, 707.0], [70.3, 707.0], [70.4, 708.0], [70.5, 708.0], [70.6, 708.0], [70.7, 708.0], [70.8, 708.0], [70.9, 708.0], [71.0, 708.0], [71.1, 708.0], [71.2, 708.0], [71.3, 708.0], [71.4, 708.0], [71.5, 708.0], [71.6, 708.0], [71.7, 708.0], [71.8, 708.0], [71.9, 708.0], [72.0, 708.0], [72.1, 708.0], [72.2, 708.0], [72.3, 708.0], [72.4, 709.0], [72.5, 709.0], [72.6, 709.0], [72.7, 709.0], [72.8, 709.0], [72.9, 709.0], [73.0, 709.0], [73.1, 709.0], [73.2, 709.0], [73.3, 709.0], [73.4, 709.0], [73.5, 709.0], [73.6, 709.0], [73.7, 709.0], [73.8, 709.0], [73.9, 709.0], [74.0, 709.0], [74.1, 709.0], [74.2, 709.0], [74.3, 709.0], [74.4, 710.0], [74.5, 710.0], [74.6, 710.0], [74.7, 710.0], [74.8, 710.0], [74.9, 710.0], [75.0, 710.0], [75.1, 710.0], [75.2, 710.0], [75.3, 710.0], [75.4, 710.0], [75.5, 710.0], [75.6, 710.0], [75.7, 710.0], [75.8, 710.0], [75.9, 710.0], [76.0, 710.0], [76.1, 710.0], [76.2, 710.0], [76.3, 710.0], [76.4, 710.0], [76.5, 710.0], [76.6, 710.0], [76.7, 710.0], [76.8, 710.0], [76.9, 710.0], [77.0, 711.0], [77.1, 711.0], [77.2, 711.0], [77.3, 711.0], [77.4, 711.0], [77.5, 711.0], [77.6, 711.0], [77.7, 712.0], [77.8, 712.0], [77.9, 712.0], [78.0, 712.0], [78.1, 712.0], [78.2, 712.0], [78.3, 712.0], [78.4, 712.0], [78.5, 712.0], [78.6, 712.0], [78.7, 712.0], [78.8, 712.0], [78.9, 712.0], [79.0, 712.0], [79.1, 712.0], [79.2, 712.0], [79.3, 712.0], [79.4, 712.0], [79.5, 712.0], [79.6, 712.0], [79.7, 712.0], [79.8, 712.0], [79.9, 712.0], [80.0, 712.0], [80.1, 712.0], [80.2, 712.0], [80.3, 712.0], [80.4, 712.0], [80.5, 712.0], [80.6, 712.0], [80.7, 712.0], [80.8, 712.0], [80.9, 712.0], [81.0, 714.0], [81.1, 714.0], [81.2, 714.0], [81.3, 714.0], [81.4, 714.0], [81.5, 714.0], [81.6, 714.0], [81.7, 714.0], [81.8, 714.0], [81.9, 714.0], [82.0, 714.0], [82.1, 714.0], [82.2, 714.0], [82.3, 715.0], [82.4, 715.0], [82.5, 715.0], [82.6, 715.0], [82.7, 715.0], [82.8, 715.0], [82.9, 715.0], [83.0, 715.0], [83.1, 715.0], [83.2, 715.0], [83.3, 715.0], [83.4, 715.0], [83.5, 715.0], [83.6, 716.0], [83.7, 716.0], [83.8, 716.0], [83.9, 716.0], [84.0, 716.0], [84.1, 716.0], [84.2, 716.0], [84.3, 717.0], [84.4, 717.0], [84.5, 717.0], [84.6, 717.0], [84.7, 717.0], [84.8, 717.0], [84.9, 718.0], [85.0, 718.0], [85.1, 718.0], [85.2, 718.0], [85.3, 718.0], [85.4, 718.0], [85.5, 718.0], [85.6, 719.0], [85.7, 719.0], [85.8, 719.0], [85.9, 719.0], [86.0, 719.0], [86.1, 719.0], [86.2, 721.0], [86.3, 721.0], [86.4, 721.0], [86.5, 721.0], [86.6, 721.0], [86.7, 721.0], [86.8, 721.0], [86.9, 725.0], [87.0, 725.0], [87.1, 725.0], [87.2, 725.0], [87.3, 725.0], [87.4, 725.0], [87.5, 725.0], [87.6, 725.0], [87.7, 725.0], [87.8, 725.0], [87.9, 725.0], [88.0, 725.0], [88.1, 725.0], [88.2, 726.0], [88.3, 726.0], [88.4, 726.0], [88.5, 726.0], [88.6, 726.0], [88.7, 726.0], [88.8, 726.0], [88.9, 726.0], [89.0, 726.0], [89.1, 726.0], [89.2, 726.0], [89.3, 726.0], [89.4, 726.0], [89.5, 727.0], [89.6, 727.0], [89.7, 727.0], [89.8, 727.0], [89.9, 727.0], [90.0, 727.0], [90.1, 727.0], [90.2, 737.0], [90.3, 737.0], [90.4, 737.0], [90.5, 737.0], [90.6, 737.0], [90.7, 737.0], [90.8, 740.0], [90.9, 740.0], [91.0, 740.0], [91.1, 740.0], [91.2, 740.0], [91.3, 740.0], [91.4, 740.0], [91.5, 741.0], [91.6, 741.0], [91.7, 741.0], [91.8, 741.0], [91.9, 741.0], [92.0, 741.0], [92.1, 741.0], [92.2, 742.0], [92.3, 742.0], [92.4, 742.0], [92.5, 742.0], [92.6, 742.0], [92.7, 742.0], [92.8, 742.0], [92.9, 742.0], [93.0, 742.0], [93.1, 742.0], [93.2, 742.0], [93.3, 742.0], [93.4, 742.0], [93.5, 749.0], [93.6, 749.0], [93.7, 749.0], [93.8, 749.0], [93.9, 749.0], [94.0, 749.0], [94.1, 753.0], [94.2, 753.0], [94.3, 753.0], [94.4, 753.0], [94.5, 753.0], [94.6, 753.0], [94.7, 753.0], [94.8, 753.0], [94.9, 753.0], [95.0, 753.0], [95.1, 753.0], [95.2, 753.0], [95.3, 753.0], [95.4, 798.0], [95.5, 798.0], [95.6, 798.0], [95.7, 798.0], [95.8, 798.0], [95.9, 798.0], [96.0, 798.0], [96.1, 814.0], [96.2, 814.0], [96.3, 814.0], [96.4, 814.0], [96.5, 814.0], [96.6, 814.0], [96.7, 814.0], [96.8, 816.0], [96.9, 816.0], [97.0, 816.0], [97.1, 816.0], [97.2, 816.0], [97.3, 816.0], [97.4, 816.0], [97.5, 816.0], [97.6, 816.0], [97.7, 816.0], [97.8, 816.0], [97.9, 816.0], [98.0, 816.0], [98.1, 823.0], [98.2, 823.0], [98.3, 823.0], [98.4, 823.0], [98.5, 823.0], [98.6, 823.0], [98.7, 823.0], [98.8, 823.0], [98.9, 823.0], [99.0, 823.0], [99.1, 823.0], [99.2, 823.0], [99.3, 823.0], [99.4, 874.0], [99.5, 874.0], [99.6, 874.0], [99.7, 874.0], [99.8, 874.0], [99.9, 874.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 600.0, "maxY": 80.0, "series": [{"data": [[600.0, 80.0], [700.0, 66.0], [800.0, 6.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 151.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 151.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.315789473684212, "minX": 1.62074916E12, "maxY": 11.315789473684212, "series": [{"data": [[1.62074916E12, 11.315789473684212]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62074916E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 622.25, "minX": 2.0, "maxY": 718.0999999999998, "series": [{"data": [[2.0, 645.0], [8.0, 666.2222222222223], [9.0, 646.1666666666667], [10.0, 663.2], [11.0, 659.3636363636363], [3.0, 663.3333333333334], [12.0, 674.1428571428571], [13.0, 678.5], [14.0, 718.0999999999998], [4.0, 622.25], [5.0, 684.8], [6.0, 676.5], [7.0, 637.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.315789473684212, 691.026315789474]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 14.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 392.6666666666667, "minX": 1.62074916E12, "maxY": 929.7333333333333, "series": [{"data": [[1.62074916E12, 929.7333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62074916E12, 392.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62074916E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 691.026315789474, "minX": 1.62074916E12, "maxY": 691.026315789474, "series": [{"data": [[1.62074916E12, 691.026315789474]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62074916E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 690.9473684210525, "minX": 1.62074916E12, "maxY": 690.9473684210525, "series": [{"data": [[1.62074916E12, 690.9473684210525]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62074916E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.30263157894736825, "minX": 1.62074916E12, "maxY": 0.30263157894736825, "series": [{"data": [[1.62074916E12, 0.30263157894736825]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62074916E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 612.0, "minX": 1.62074916E12, "maxY": 823.0, "series": [{"data": [[1.62074916E12, 823.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62074916E12, 726.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62074916E12, 823.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62074916E12, 753.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62074916E12, 612.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62074916E12, 697.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62074916E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 654.5, "minX": 3.0, "maxY": 874.0, "series": [{"data": [[4.0, 703.5], [9.0, 667.0], [10.0, 707.0], [3.0, 654.5], [6.0, 702.0], [12.0, 684.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 874.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 654.5, "minX": 3.0, "maxY": 874.0, "series": [{"data": [[4.0, 703.0], [9.0, 666.5], [10.0, 707.0], [3.0, 654.5], [6.0, 702.0], [12.0, 684.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[10.0, 874.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.533333333333333, "minX": 1.62074916E12, "maxY": 2.533333333333333, "series": [{"data": [[1.62074916E12, 2.533333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62074916E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.533333333333333, "minX": 1.62074916E12, "maxY": 2.533333333333333, "series": [{"data": [[1.62074916E12, 2.533333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62074916E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62074916E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.62074916E12, 2.5166666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.62074916E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62074916E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62074916E12, "maxY": 2.5166666666666666, "series": [{"data": [[1.62074916E12, 2.5166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62074916E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62074916E12, "title": "Total Transactions Per Second"}},
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

