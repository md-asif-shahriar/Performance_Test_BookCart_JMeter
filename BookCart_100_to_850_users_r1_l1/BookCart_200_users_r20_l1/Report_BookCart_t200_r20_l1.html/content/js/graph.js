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
        data: {"result": {"minY": 97.0, "minX": 0.0, "maxY": 1563.0, "series": [{"data": [[0.0, 97.0], [0.1, 97.0], [0.2, 97.0], [0.3, 98.0], [0.4, 98.0], [0.5, 98.0], [0.6, 98.0], [0.7, 98.0], [0.8, 98.0], [0.9, 98.0], [1.0, 98.0], [1.1, 98.0], [1.2, 98.0], [1.3, 98.0], [1.4, 98.0], [1.5, 98.0], [1.6, 98.0], [1.7, 98.0], [1.8, 98.0], [1.9, 98.0], [2.0, 98.0], [2.1, 98.0], [2.2, 98.0], [2.3, 98.0], [2.4, 98.0], [2.5, 98.0], [2.6, 98.0], [2.7, 98.0], [2.8, 98.0], [2.9, 98.0], [3.0, 98.0], [3.1, 98.0], [3.2, 98.0], [3.3, 98.0], [3.4, 99.0], [3.5, 99.0], [3.6, 99.0], [3.7, 99.0], [3.8, 99.0], [3.9, 99.0], [4.0, 99.0], [4.1, 99.0], [4.2, 99.0], [4.3, 99.0], [4.4, 99.0], [4.5, 99.0], [4.6, 99.0], [4.7, 99.0], [4.8, 99.0], [4.9, 99.0], [5.0, 99.0], [5.1, 99.0], [5.2, 99.0], [5.3, 99.0], [5.4, 99.0], [5.5, 99.0], [5.6, 99.0], [5.7, 99.0], [5.8, 99.0], [5.9, 99.0], [6.0, 99.0], [6.1, 99.0], [6.2, 99.0], [6.3, 99.0], [6.4, 99.0], [6.5, 99.0], [6.6, 99.0], [6.7, 99.0], [6.8, 99.0], [6.9, 99.0], [7.0, 99.0], [7.1, 99.0], [7.2, 99.0], [7.3, 99.0], [7.4, 99.0], [7.5, 99.0], [7.6, 99.0], [7.7, 99.0], [7.8, 99.0], [7.9, 99.0], [8.0, 99.0], [8.1, 99.0], [8.2, 99.0], [8.3, 99.0], [8.4, 99.0], [8.5, 99.0], [8.6, 99.0], [8.7, 99.0], [8.8, 99.0], [8.9, 99.0], [9.0, 99.0], [9.1, 99.0], [9.2, 99.0], [9.3, 99.0], [9.4, 99.0], [9.5, 99.0], [9.6, 99.0], [9.7, 99.0], [9.8, 99.0], [9.9, 99.0], [10.0, 100.0], [10.1, 100.0], [10.2, 100.0], [10.3, 100.0], [10.4, 100.0], [10.5, 100.0], [10.6, 100.0], [10.7, 100.0], [10.8, 100.0], [10.9, 100.0], [11.0, 100.0], [11.1, 100.0], [11.2, 100.0], [11.3, 100.0], [11.4, 100.0], [11.5, 100.0], [11.6, 100.0], [11.7, 100.0], [11.8, 100.0], [11.9, 100.0], [12.0, 100.0], [12.1, 100.0], [12.2, 100.0], [12.3, 100.0], [12.4, 100.0], [12.5, 100.0], [12.6, 100.0], [12.7, 100.0], [12.8, 100.0], [12.9, 100.0], [13.0, 100.0], [13.1, 100.0], [13.2, 100.0], [13.3, 100.0], [13.4, 100.0], [13.5, 100.0], [13.6, 100.0], [13.7, 100.0], [13.8, 100.0], [13.9, 100.0], [14.0, 100.0], [14.1, 100.0], [14.2, 100.0], [14.3, 100.0], [14.4, 100.0], [14.5, 100.0], [14.6, 100.0], [14.7, 100.0], [14.8, 100.0], [14.9, 100.0], [15.0, 100.0], [15.1, 100.0], [15.2, 100.0], [15.3, 100.0], [15.4, 100.0], [15.5, 100.0], [15.6, 100.0], [15.7, 100.0], [15.8, 100.0], [15.9, 101.0], [16.0, 101.0], [16.1, 101.0], [16.2, 101.0], [16.3, 101.0], [16.4, 101.0], [16.5, 101.0], [16.6, 101.0], [16.7, 101.0], [16.8, 101.0], [16.9, 101.0], [17.0, 101.0], [17.1, 101.0], [17.2, 101.0], [17.3, 101.0], [17.4, 101.0], [17.5, 101.0], [17.6, 101.0], [17.7, 101.0], [17.8, 101.0], [17.9, 101.0], [18.0, 101.0], [18.1, 101.0], [18.2, 101.0], [18.3, 101.0], [18.4, 101.0], [18.5, 101.0], [18.6, 101.0], [18.7, 101.0], [18.8, 101.0], [18.9, 101.0], [19.0, 101.0], [19.1, 101.0], [19.2, 101.0], [19.3, 101.0], [19.4, 101.0], [19.5, 101.0], [19.6, 102.0], [19.7, 102.0], [19.8, 102.0], [19.9, 102.0], [20.0, 102.0], [20.1, 102.0], [20.2, 102.0], [20.3, 102.0], [20.4, 102.0], [20.5, 102.0], [20.6, 102.0], [20.7, 102.0], [20.8, 102.0], [20.9, 102.0], [21.0, 102.0], [21.1, 102.0], [21.2, 102.0], [21.3, 102.0], [21.4, 102.0], [21.5, 102.0], [21.6, 102.0], [21.7, 102.0], [21.8, 102.0], [21.9, 102.0], [22.0, 102.0], [22.1, 102.0], [22.2, 102.0], [22.3, 102.0], [22.4, 102.0], [22.5, 102.0], [22.6, 102.0], [22.7, 102.0], [22.8, 102.0], [22.9, 102.0], [23.0, 102.0], [23.1, 102.0], [23.2, 102.0], [23.3, 102.0], [23.4, 102.0], [23.5, 102.0], [23.6, 102.0], [23.7, 102.0], [23.8, 102.0], [23.9, 102.0], [24.0, 102.0], [24.1, 102.0], [24.2, 103.0], [24.3, 103.0], [24.4, 103.0], [24.5, 103.0], [24.6, 103.0], [24.7, 103.0], [24.8, 103.0], [24.9, 103.0], [25.0, 103.0], [25.1, 103.0], [25.2, 103.0], [25.3, 103.0], [25.4, 103.0], [25.5, 103.0], [25.6, 103.0], [25.7, 103.0], [25.8, 103.0], [25.9, 103.0], [26.0, 103.0], [26.1, 103.0], [26.2, 103.0], [26.3, 103.0], [26.4, 103.0], [26.5, 103.0], [26.6, 103.0], [26.7, 103.0], [26.8, 103.0], [26.9, 103.0], [27.0, 103.0], [27.1, 103.0], [27.2, 103.0], [27.3, 103.0], [27.4, 103.0], [27.5, 103.0], [27.6, 103.0], [27.7, 103.0], [27.8, 103.0], [27.9, 103.0], [28.0, 103.0], [28.1, 103.0], [28.2, 103.0], [28.3, 103.0], [28.4, 103.0], [28.5, 103.0], [28.6, 103.0], [28.7, 103.0], [28.8, 103.0], [28.9, 103.0], [29.0, 103.0], [29.1, 103.0], [29.2, 103.0], [29.3, 103.0], [29.4, 103.0], [29.5, 103.0], [29.6, 103.0], [29.7, 103.0], [29.8, 103.0], [29.9, 103.0], [30.0, 103.0], [30.1, 103.0], [30.2, 103.0], [30.3, 103.0], [30.4, 103.0], [30.5, 103.0], [30.6, 103.0], [30.7, 103.0], [30.8, 103.0], [30.9, 103.0], [31.0, 103.0], [31.1, 103.0], [31.2, 103.0], [31.3, 103.0], [31.4, 103.0], [31.5, 103.0], [31.6, 103.0], [31.7, 103.0], [31.8, 103.0], [31.9, 103.0], [32.0, 103.0], [32.1, 103.0], [32.2, 103.0], [32.3, 103.0], [32.4, 103.0], [32.5, 103.0], [32.6, 103.0], [32.7, 103.0], [32.8, 103.0], [32.9, 103.0], [33.0, 103.0], [33.1, 103.0], [33.2, 103.0], [33.3, 103.0], [33.4, 103.0], [33.5, 103.0], [33.6, 103.0], [33.7, 103.0], [33.8, 103.0], [33.9, 103.0], [34.0, 103.0], [34.1, 103.0], [34.2, 103.0], [34.3, 103.0], [34.4, 103.0], [34.5, 103.0], [34.6, 103.0], [34.7, 104.0], [34.8, 104.0], [34.9, 104.0], [35.0, 104.0], [35.1, 104.0], [35.2, 104.0], [35.3, 104.0], [35.4, 104.0], [35.5, 104.0], [35.6, 104.0], [35.7, 104.0], [35.8, 104.0], [35.9, 104.0], [36.0, 104.0], [36.1, 104.0], [36.2, 104.0], [36.3, 104.0], [36.4, 104.0], [36.5, 104.0], [36.6, 104.0], [36.7, 104.0], [36.8, 104.0], [36.9, 104.0], [37.0, 104.0], [37.1, 104.0], [37.2, 104.0], [37.3, 104.0], [37.4, 104.0], [37.5, 104.0], [37.6, 104.0], [37.7, 104.0], [37.8, 104.0], [37.9, 104.0], [38.0, 104.0], [38.1, 104.0], [38.2, 104.0], [38.3, 104.0], [38.4, 104.0], [38.5, 104.0], [38.6, 104.0], [38.7, 104.0], [38.8, 104.0], [38.9, 104.0], [39.0, 104.0], [39.1, 104.0], [39.2, 104.0], [39.3, 104.0], [39.4, 104.0], [39.5, 104.0], [39.6, 104.0], [39.7, 104.0], [39.8, 104.0], [39.9, 104.0], [40.0, 104.0], [40.1, 104.0], [40.2, 104.0], [40.3, 104.0], [40.4, 104.0], [40.5, 104.0], [40.6, 104.0], [40.7, 104.0], [40.8, 104.0], [40.9, 104.0], [41.0, 104.0], [41.1, 104.0], [41.2, 104.0], [41.3, 104.0], [41.4, 104.0], [41.5, 104.0], [41.6, 104.0], [41.7, 104.0], [41.8, 104.0], [41.9, 104.0], [42.0, 104.0], [42.1, 104.0], [42.2, 104.0], [42.3, 104.0], [42.4, 104.0], [42.5, 104.0], [42.6, 104.0], [42.7, 104.0], [42.8, 104.0], [42.9, 104.0], [43.0, 104.0], [43.1, 104.0], [43.2, 104.0], [43.3, 104.0], [43.4, 104.0], [43.5, 104.0], [43.6, 104.0], [43.7, 104.0], [43.8, 104.0], [43.9, 104.0], [44.0, 105.0], [44.1, 105.0], [44.2, 105.0], [44.3, 105.0], [44.4, 105.0], [44.5, 105.0], [44.6, 105.0], [44.7, 105.0], [44.8, 105.0], [44.9, 105.0], [45.0, 105.0], [45.1, 105.0], [45.2, 105.0], [45.3, 105.0], [45.4, 105.0], [45.5, 105.0], [45.6, 105.0], [45.7, 105.0], [45.8, 105.0], [45.9, 105.0], [46.0, 105.0], [46.1, 105.0], [46.2, 105.0], [46.3, 105.0], [46.4, 105.0], [46.5, 105.0], [46.6, 105.0], [46.7, 105.0], [46.8, 105.0], [46.9, 105.0], [47.0, 105.0], [47.1, 105.0], [47.2, 105.0], [47.3, 105.0], [47.4, 105.0], [47.5, 105.0], [47.6, 105.0], [47.7, 105.0], [47.8, 105.0], [47.9, 105.0], [48.0, 105.0], [48.1, 105.0], [48.2, 105.0], [48.3, 105.0], [48.4, 105.0], [48.5, 105.0], [48.6, 105.0], [48.7, 105.0], [48.8, 105.0], [48.9, 105.0], [49.0, 105.0], [49.1, 105.0], [49.2, 105.0], [49.3, 105.0], [49.4, 106.0], [49.5, 106.0], [49.6, 106.0], [49.7, 106.0], [49.8, 106.0], [49.9, 106.0], [50.0, 106.0], [50.1, 106.0], [50.2, 106.0], [50.3, 106.0], [50.4, 106.0], [50.5, 106.0], [50.6, 106.0], [50.7, 106.0], [50.8, 106.0], [50.9, 106.0], [51.0, 106.0], [51.1, 106.0], [51.2, 106.0], [51.3, 106.0], [51.4, 106.0], [51.5, 106.0], [51.6, 106.0], [51.7, 106.0], [51.8, 106.0], [51.9, 106.0], [52.0, 106.0], [52.1, 106.0], [52.2, 106.0], [52.3, 106.0], [52.4, 106.0], [52.5, 106.0], [52.6, 106.0], [52.7, 106.0], [52.8, 106.0], [52.9, 106.0], [53.0, 106.0], [53.1, 106.0], [53.2, 106.0], [53.3, 106.0], [53.4, 106.0], [53.5, 106.0], [53.6, 106.0], [53.7, 106.0], [53.8, 106.0], [53.9, 106.0], [54.0, 106.0], [54.1, 106.0], [54.2, 106.0], [54.3, 106.0], [54.4, 106.0], [54.5, 106.0], [54.6, 106.0], [54.7, 106.0], [54.8, 106.0], [54.9, 106.0], [55.0, 106.0], [55.1, 106.0], [55.2, 107.0], [55.3, 107.0], [55.4, 107.0], [55.5, 107.0], [55.6, 107.0], [55.7, 107.0], [55.8, 107.0], [55.9, 107.0], [56.0, 107.0], [56.1, 107.0], [56.2, 107.0], [56.3, 107.0], [56.4, 107.0], [56.5, 107.0], [56.6, 107.0], [56.7, 107.0], [56.8, 107.0], [56.9, 107.0], [57.0, 107.0], [57.1, 107.0], [57.2, 107.0], [57.3, 107.0], [57.4, 107.0], [57.5, 107.0], [57.6, 107.0], [57.7, 107.0], [57.8, 107.0], [57.9, 107.0], [58.0, 107.0], [58.1, 107.0], [58.2, 107.0], [58.3, 107.0], [58.4, 107.0], [58.5, 107.0], [58.6, 107.0], [58.7, 107.0], [58.8, 107.0], [58.9, 107.0], [59.0, 107.0], [59.1, 107.0], [59.2, 107.0], [59.3, 107.0], [59.4, 107.0], [59.5, 107.0], [59.6, 107.0], [59.7, 107.0], [59.8, 107.0], [59.9, 107.0], [60.0, 107.0], [60.1, 107.0], [60.2, 107.0], [60.3, 108.0], [60.4, 108.0], [60.5, 108.0], [60.6, 108.0], [60.7, 108.0], [60.8, 108.0], [60.9, 108.0], [61.0, 108.0], [61.1, 108.0], [61.2, 108.0], [61.3, 108.0], [61.4, 108.0], [61.5, 108.0], [61.6, 108.0], [61.7, 108.0], [61.8, 108.0], [61.9, 108.0], [62.0, 108.0], [62.1, 108.0], [62.2, 108.0], [62.3, 108.0], [62.4, 108.0], [62.5, 108.0], [62.6, 108.0], [62.7, 108.0], [62.8, 108.0], [62.9, 108.0], [63.0, 108.0], [63.1, 108.0], [63.2, 108.0], [63.3, 108.0], [63.4, 108.0], [63.5, 108.0], [63.6, 108.0], [63.7, 108.0], [63.8, 108.0], [63.9, 108.0], [64.0, 108.0], [64.1, 108.0], [64.2, 108.0], [64.3, 108.0], [64.4, 108.0], [64.5, 108.0], [64.6, 108.0], [64.7, 108.0], [64.8, 108.0], [64.9, 109.0], [65.0, 109.0], [65.1, 109.0], [65.2, 109.0], [65.3, 109.0], [65.4, 109.0], [65.5, 109.0], [65.6, 109.0], [65.7, 109.0], [65.8, 109.0], [65.9, 109.0], [66.0, 109.0], [66.1, 109.0], [66.2, 109.0], [66.3, 109.0], [66.4, 109.0], [66.5, 109.0], [66.6, 109.0], [66.7, 109.0], [66.8, 109.0], [66.9, 109.0], [67.0, 109.0], [67.1, 109.0], [67.2, 109.0], [67.3, 109.0], [67.4, 109.0], [67.5, 109.0], [67.6, 109.0], [67.7, 109.0], [67.8, 109.0], [67.9, 109.0], [68.0, 110.0], [68.1, 110.0], [68.2, 110.0], [68.3, 110.0], [68.4, 110.0], [68.5, 110.0], [68.6, 110.0], [68.7, 110.0], [68.8, 110.0], [68.9, 110.0], [69.0, 110.0], [69.1, 110.0], [69.2, 110.0], [69.3, 110.0], [69.4, 110.0], [69.5, 111.0], [69.6, 111.0], [69.7, 111.0], [69.8, 111.0], [69.9, 111.0], [70.0, 111.0], [70.1, 111.0], [70.2, 111.0], [70.3, 111.0], [70.4, 111.0], [70.5, 111.0], [70.6, 111.0], [70.7, 111.0], [70.8, 111.0], [70.9, 111.0], [71.0, 112.0], [71.1, 112.0], [71.2, 112.0], [71.3, 112.0], [71.4, 112.0], [71.5, 112.0], [71.6, 112.0], [71.7, 112.0], [71.8, 112.0], [71.9, 112.0], [72.0, 112.0], [72.1, 112.0], [72.2, 112.0], [72.3, 112.0], [72.4, 112.0], [72.5, 112.0], [72.6, 112.0], [72.7, 112.0], [72.8, 112.0], [72.9, 112.0], [73.0, 112.0], [73.1, 112.0], [73.2, 112.0], [73.3, 112.0], [73.4, 112.0], [73.5, 112.0], [73.6, 113.0], [73.7, 113.0], [73.8, 113.0], [73.9, 113.0], [74.0, 113.0], [74.1, 113.0], [74.2, 113.0], [74.3, 113.0], [74.4, 113.0], [74.5, 113.0], [74.6, 113.0], [74.7, 113.0], [74.8, 113.0], [74.9, 113.0], [75.0, 114.0], [75.1, 114.0], [75.2, 114.0], [75.3, 114.0], [75.4, 114.0], [75.5, 114.0], [75.6, 114.0], [75.7, 114.0], [75.8, 114.0], [75.9, 115.0], [76.0, 115.0], [76.1, 115.0], [76.2, 115.0], [76.3, 115.0], [76.4, 115.0], [76.5, 115.0], [76.6, 115.0], [76.7, 115.0], [76.8, 115.0], [76.9, 115.0], [77.0, 115.0], [77.1, 115.0], [77.2, 115.0], [77.3, 116.0], [77.4, 116.0], [77.5, 116.0], [77.6, 116.0], [77.7, 116.0], [77.8, 116.0], [77.9, 116.0], [78.0, 116.0], [78.1, 116.0], [78.2, 116.0], [78.3, 116.0], [78.4, 116.0], [78.5, 116.0], [78.6, 116.0], [78.7, 117.0], [78.8, 117.0], [78.9, 117.0], [79.0, 117.0], [79.1, 117.0], [79.2, 117.0], [79.3, 117.0], [79.4, 117.0], [79.5, 117.0], [79.6, 117.0], [79.7, 117.0], [79.8, 117.0], [79.9, 118.0], [80.0, 118.0], [80.1, 118.0], [80.2, 118.0], [80.3, 118.0], [80.4, 118.0], [80.5, 118.0], [80.6, 118.0], [80.7, 119.0], [80.8, 119.0], [80.9, 119.0], [81.0, 120.0], [81.1, 120.0], [81.2, 120.0], [81.3, 120.0], [81.4, 120.0], [81.5, 120.0], [81.6, 120.0], [81.7, 120.0], [81.8, 120.0], [81.9, 121.0], [82.0, 121.0], [82.1, 121.0], [82.2, 121.0], [82.3, 121.0], [82.4, 121.0], [82.5, 121.0], [82.6, 121.0], [82.7, 121.0], [82.8, 121.0], [82.9, 121.0], [83.0, 121.0], [83.1, 121.0], [83.2, 121.0], [83.3, 121.0], [83.4, 121.0], [83.5, 121.0], [83.6, 121.0], [83.7, 122.0], [83.8, 122.0], [83.9, 122.0], [84.0, 122.0], [84.1, 123.0], [84.2, 123.0], [84.3, 123.0], [84.4, 123.0], [84.5, 123.0], [84.6, 123.0], [84.7, 123.0], [84.8, 124.0], [84.9, 125.0], [85.0, 125.0], [85.1, 127.0], [85.2, 127.0], [85.3, 128.0], [85.4, 131.0], [85.5, 133.0], [85.6, 134.0], [85.7, 136.0], [85.8, 137.0], [85.9, 140.0], [86.0, 140.0], [86.1, 142.0], [86.2, 145.0], [86.3, 145.0], [86.4, 146.0], [86.5, 147.0], [86.6, 149.0], [86.7, 150.0], [86.8, 150.0], [86.9, 151.0], [87.0, 153.0], [87.1, 153.0], [87.2, 157.0], [87.3, 159.0], [87.4, 190.0], [87.5, 400.0], [87.6, 401.0], [87.7, 401.0], [87.8, 402.0], [87.9, 402.0], [88.0, 403.0], [88.1, 403.0], [88.2, 404.0], [88.3, 405.0], [88.4, 405.0], [88.5, 406.0], [88.6, 406.0], [88.7, 406.0], [88.8, 407.0], [88.9, 407.0], [89.0, 407.0], [89.1, 408.0], [89.2, 408.0], [89.3, 408.0], [89.4, 408.0], [89.5, 408.0], [89.6, 408.0], [89.7, 409.0], [89.8, 410.0], [89.9, 410.0], [90.0, 411.0], [90.1, 412.0], [90.2, 412.0], [90.3, 412.0], [90.4, 416.0], [90.5, 416.0], [90.6, 416.0], [90.7, 417.0], [90.8, 417.0], [90.9, 417.0], [91.0, 417.0], [91.1, 418.0], [91.2, 418.0], [91.3, 419.0], [91.4, 419.0], [91.5, 419.0], [91.6, 420.0], [91.7, 420.0], [91.8, 420.0], [91.9, 420.0], [92.0, 420.0], [92.1, 420.0], [92.2, 421.0], [92.3, 421.0], [92.4, 421.0], [92.5, 422.0], [92.6, 422.0], [92.7, 422.0], [92.8, 422.0], [92.9, 423.0], [93.0, 423.0], [93.1, 423.0], [93.2, 423.0], [93.3, 423.0], [93.4, 424.0], [93.5, 425.0], [93.6, 425.0], [93.7, 425.0], [93.8, 426.0], [93.9, 426.0], [94.0, 427.0], [94.1, 427.0], [94.2, 428.0], [94.3, 428.0], [94.4, 429.0], [94.5, 431.0], [94.6, 431.0], [94.7, 432.0], [94.8, 432.0], [94.9, 433.0], [95.0, 434.0], [95.1, 434.0], [95.2, 435.0], [95.3, 435.0], [95.4, 435.0], [95.5, 436.0], [95.6, 436.0], [95.7, 437.0], [95.8, 437.0], [95.9, 437.0], [96.0, 438.0], [96.1, 439.0], [96.2, 439.0], [96.3, 439.0], [96.4, 439.0], [96.5, 440.0], [96.6, 440.0], [96.7, 442.0], [96.8, 443.0], [96.9, 445.0], [97.0, 447.0], [97.1, 448.0], [97.2, 449.0], [97.3, 452.0], [97.4, 453.0], [97.5, 455.0], [97.6, 456.0], [97.7, 457.0], [97.8, 459.0], [97.9, 460.0], [98.0, 463.0], [98.1, 465.0], [98.2, 469.0], [98.3, 470.0], [98.4, 475.0], [98.5, 483.0], [98.6, 487.0], [98.7, 491.0], [98.8, 495.0], [98.9, 498.0], [99.0, 500.0], [99.1, 518.0], [99.2, 582.0], [99.3, 687.0], [99.4, 868.0], [99.5, 1085.0], [99.6, 1184.0], [99.7, 1364.0], [99.8, 1485.0], [99.9, 1554.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1239.0, "series": [{"data": [[0.0, 160.0], [600.0, 1.0], [700.0, 1.0], [800.0, 1.0], [200.0, 1.0], [900.0, 1.0], [1000.0, 1.0], [1100.0, 1.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 3.0], [400.0, 183.0], [100.0, 1239.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1585.0, "series": [{"data": [[0.0, 1585.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 12.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 12.713750000000005, "minX": 1.69501542E12, "maxY": 12.713750000000005, "series": [{"data": [[1.69501542E12, 12.713750000000005]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69501542E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 102.0, "minX": 1.0, "maxY": 1071.6153846153848, "series": [{"data": [[2.0, 108.0], [3.0, 107.5], [4.0, 117.0], [5.0, 105.5], [6.0, 105.77777777777777], [7.0, 112.0], [8.0, 140.9], [9.0, 164.72727272727272], [10.0, 103.66666666666666], [11.0, 149.23701298701292], [12.0, 145.8263473053892], [13.0, 147.70338983050848], [14.0, 164.04166666666669], [15.0, 104.0], [16.0, 102.0], [1.0, 112.5], [17.0, 104.0], [18.0, 1071.6153846153848], [19.0, 958.0], [20.0, 133.1875], [21.0, 129.23529411764707], [22.0, 126.6111111111111], [23.0, 122.52631578947368], [24.0, 122.6111111111111], [25.0, 125.04761904761904], [26.0, 128.85714285714286]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[12.713750000000005, 153.27437499999968]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 26.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4170.0, "minX": 1.69501542E12, "maxY": 88462.85, "series": [{"data": [[1.69501542E12, 88462.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69501542E12, 4170.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69501542E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 153.27437499999968, "minX": 1.69501542E12, "maxY": 153.27437499999968, "series": [{"data": [[1.69501542E12, 153.27437499999968]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69501542E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 153.14249999999998, "minX": 1.69501542E12, "maxY": 153.14249999999998, "series": [{"data": [[1.69501542E12, 153.14249999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69501542E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 45.909375000000054, "minX": 1.69501542E12, "maxY": 45.909375000000054, "series": [{"data": [[1.69501542E12, 45.909375000000054]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69501542E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 97.0, "minX": 1.69501542E12, "maxY": 1563.0, "series": [{"data": [[1.69501542E12, 1563.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69501542E12, 97.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69501542E12, 410.9000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69501542E12, 500.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69501542E12, 106.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.69501542E12, 433.9499999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69501542E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
    data: {"result": {"minY": 104.0, "minX": 22.0, "maxY": 109.0, "series": [{"data": [[77.0, 106.0], [79.0, 105.0], [82.0, 106.0], [80.0, 105.0], [81.0, 104.0], [84.0, 106.0], [22.0, 106.0], [99.0, 107.0], [125.0, 109.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 104.0, "minX": 22.0, "maxY": 109.0, "series": [{"data": [[77.0, 106.0], [79.0, 104.5], [82.0, 106.0], [80.0, 104.5], [81.0, 104.0], [84.0, 105.5], [22.0, 106.0], [99.0, 107.0], [125.0, 109.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 125.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 26.666666666666668, "minX": 1.69501542E12, "maxY": 26.666666666666668, "series": [{"data": [[1.69501542E12, 26.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69501542E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 26.666666666666668, "minX": 1.69501542E12, "maxY": 26.666666666666668, "series": [{"data": [[1.69501542E12, 26.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69501542E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 26.666666666666668, "minX": 1.69501542E12, "maxY": 26.666666666666668, "series": [{"data": [[1.69501542E12, 26.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69501542E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 26.666666666666668, "minX": 1.69501542E12, "maxY": 26.666666666666668, "series": [{"data": [[1.69501542E12, 26.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69501542E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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

