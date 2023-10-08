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
        data: {"result": {"minY": 100.0, "minX": 0.0, "maxY": 5477.0, "series": [{"data": [[0.0, 100.0], [0.1, 110.0], [0.2, 125.0], [0.3, 130.0], [0.4, 136.0], [0.5, 147.0], [0.6, 162.0], [0.7, 321.0], [0.8, 343.0], [0.9, 374.0], [1.0, 432.0], [1.1, 435.0], [1.2, 451.0], [1.3, 483.0], [1.4, 492.0], [1.5, 504.0], [1.6, 521.0], [1.7, 541.0], [1.8, 550.0], [1.9, 555.0], [2.0, 598.0], [2.1, 617.0], [2.2, 620.0], [2.3, 626.0], [2.4, 627.0], [2.5, 628.0], [2.6, 638.0], [2.7, 641.0], [2.8, 646.0], [2.9, 647.0], [3.0, 652.0], [3.1, 657.0], [3.2, 669.0], [3.3, 673.0], [3.4, 677.0], [3.5, 679.0], [3.6, 679.0], [3.7, 684.0], [3.8, 691.0], [3.9, 692.0], [4.0, 696.0], [4.1, 700.0], [4.2, 702.0], [4.3, 706.0], [4.4, 708.0], [4.5, 715.0], [4.6, 716.0], [4.7, 717.0], [4.8, 724.0], [4.9, 728.0], [5.0, 729.0], [5.1, 731.0], [5.2, 737.0], [5.3, 741.0], [5.4, 743.0], [5.5, 747.0], [5.6, 750.0], [5.7, 751.0], [5.8, 753.0], [5.9, 756.0], [6.0, 758.0], [6.1, 762.0], [6.2, 765.0], [6.3, 769.0], [6.4, 772.0], [6.5, 773.0], [6.6, 783.0], [6.7, 792.0], [6.8, 793.0], [6.9, 795.0], [7.0, 803.0], [7.1, 804.0], [7.2, 806.0], [7.3, 811.0], [7.4, 812.0], [7.5, 815.0], [7.6, 818.0], [7.7, 819.0], [7.8, 829.0], [7.9, 830.0], [8.0, 832.0], [8.1, 835.0], [8.2, 835.0], [8.3, 836.0], [8.4, 837.0], [8.5, 837.0], [8.6, 840.0], [8.7, 840.0], [8.8, 842.0], [8.9, 843.0], [9.0, 844.0], [9.1, 845.0], [9.2, 845.0], [9.3, 847.0], [9.4, 848.0], [9.5, 849.0], [9.6, 849.0], [9.7, 850.0], [9.8, 851.0], [9.9, 851.0], [10.0, 851.0], [10.1, 852.0], [10.2, 855.0], [10.3, 856.0], [10.4, 856.0], [10.5, 857.0], [10.6, 859.0], [10.7, 860.0], [10.8, 862.0], [10.9, 863.0], [11.0, 865.0], [11.1, 866.0], [11.2, 867.0], [11.3, 869.0], [11.4, 871.0], [11.5, 872.0], [11.6, 874.0], [11.7, 875.0], [11.8, 877.0], [11.9, 878.0], [12.0, 879.0], [12.1, 880.0], [12.2, 881.0], [12.3, 882.0], [12.4, 885.0], [12.5, 886.0], [12.6, 887.0], [12.7, 888.0], [12.8, 889.0], [12.9, 891.0], [13.0, 892.0], [13.1, 893.0], [13.2, 893.0], [13.3, 893.0], [13.4, 894.0], [13.5, 894.0], [13.6, 894.0], [13.7, 895.0], [13.8, 896.0], [13.9, 896.0], [14.0, 897.0], [14.1, 897.0], [14.2, 898.0], [14.3, 898.0], [14.4, 898.0], [14.5, 899.0], [14.6, 899.0], [14.7, 900.0], [14.8, 900.0], [14.9, 901.0], [15.0, 901.0], [15.1, 902.0], [15.2, 903.0], [15.3, 903.0], [15.4, 904.0], [15.5, 904.0], [15.6, 905.0], [15.7, 906.0], [15.8, 908.0], [15.9, 908.0], [16.0, 910.0], [16.1, 911.0], [16.2, 911.0], [16.3, 913.0], [16.4, 914.0], [16.5, 914.0], [16.6, 915.0], [16.7, 916.0], [16.8, 918.0], [16.9, 919.0], [17.0, 920.0], [17.1, 922.0], [17.2, 924.0], [17.3, 925.0], [17.4, 925.0], [17.5, 929.0], [17.6, 929.0], [17.7, 933.0], [17.8, 935.0], [17.9, 937.0], [18.0, 938.0], [18.1, 940.0], [18.2, 941.0], [18.3, 942.0], [18.4, 943.0], [18.5, 943.0], [18.6, 945.0], [18.7, 945.0], [18.8, 946.0], [18.9, 946.0], [19.0, 947.0], [19.1, 949.0], [19.2, 949.0], [19.3, 950.0], [19.4, 951.0], [19.5, 951.0], [19.6, 952.0], [19.7, 952.0], [19.8, 953.0], [19.9, 953.0], [20.0, 953.0], [20.1, 954.0], [20.2, 954.0], [20.3, 955.0], [20.4, 955.0], [20.5, 955.0], [20.6, 956.0], [20.7, 957.0], [20.8, 957.0], [20.9, 958.0], [21.0, 958.0], [21.1, 959.0], [21.2, 959.0], [21.3, 959.0], [21.4, 960.0], [21.5, 960.0], [21.6, 961.0], [21.7, 961.0], [21.8, 962.0], [21.9, 963.0], [22.0, 963.0], [22.1, 964.0], [22.2, 964.0], [22.3, 965.0], [22.4, 965.0], [22.5, 966.0], [22.6, 967.0], [22.7, 967.0], [22.8, 969.0], [22.9, 969.0], [23.0, 970.0], [23.1, 970.0], [23.2, 972.0], [23.3, 972.0], [23.4, 973.0], [23.5, 974.0], [23.6, 976.0], [23.7, 976.0], [23.8, 977.0], [23.9, 978.0], [24.0, 979.0], [24.1, 979.0], [24.2, 980.0], [24.3, 981.0], [24.4, 982.0], [24.5, 982.0], [24.6, 983.0], [24.7, 984.0], [24.8, 984.0], [24.9, 985.0], [25.0, 985.0], [25.1, 985.0], [25.2, 986.0], [25.3, 987.0], [25.4, 988.0], [25.5, 989.0], [25.6, 990.0], [25.7, 990.0], [25.8, 991.0], [25.9, 991.0], [26.0, 992.0], [26.1, 992.0], [26.2, 993.0], [26.3, 993.0], [26.4, 993.0], [26.5, 994.0], [26.6, 994.0], [26.7, 995.0], [26.8, 996.0], [26.9, 996.0], [27.0, 997.0], [27.1, 997.0], [27.2, 998.0], [27.3, 1000.0], [27.4, 1001.0], [27.5, 1001.0], [27.6, 1002.0], [27.7, 1003.0], [27.8, 1004.0], [27.9, 1007.0], [28.0, 1007.0], [28.1, 1009.0], [28.2, 1010.0], [28.3, 1011.0], [28.4, 1012.0], [28.5, 1012.0], [28.6, 1013.0], [28.7, 1014.0], [28.8, 1015.0], [28.9, 1016.0], [29.0, 1017.0], [29.1, 1017.0], [29.2, 1018.0], [29.3, 1019.0], [29.4, 1020.0], [29.5, 1021.0], [29.6, 1022.0], [29.7, 1022.0], [29.8, 1024.0], [29.9, 1024.0], [30.0, 1025.0], [30.1, 1026.0], [30.2, 1027.0], [30.3, 1028.0], [30.4, 1028.0], [30.5, 1029.0], [30.6, 1030.0], [30.7, 1031.0], [30.8, 1032.0], [30.9, 1035.0], [31.0, 1035.0], [31.1, 1037.0], [31.2, 1038.0], [31.3, 1039.0], [31.4, 1039.0], [31.5, 1041.0], [31.6, 1042.0], [31.7, 1043.0], [31.8, 1044.0], [31.9, 1044.0], [32.0, 1045.0], [32.1, 1045.0], [32.2, 1046.0], [32.3, 1048.0], [32.4, 1049.0], [32.5, 1051.0], [32.6, 1051.0], [32.7, 1052.0], [32.8, 1052.0], [32.9, 1053.0], [33.0, 1053.0], [33.1, 1054.0], [33.2, 1055.0], [33.3, 1055.0], [33.4, 1056.0], [33.5, 1056.0], [33.6, 1057.0], [33.7, 1058.0], [33.8, 1060.0], [33.9, 1060.0], [34.0, 1061.0], [34.1, 1062.0], [34.2, 1063.0], [34.3, 1064.0], [34.4, 1064.0], [34.5, 1065.0], [34.6, 1065.0], [34.7, 1067.0], [34.8, 1068.0], [34.9, 1069.0], [35.0, 1070.0], [35.1, 1071.0], [35.2, 1072.0], [35.3, 1073.0], [35.4, 1074.0], [35.5, 1075.0], [35.6, 1075.0], [35.7, 1075.0], [35.8, 1076.0], [35.9, 1076.0], [36.0, 1077.0], [36.1, 1078.0], [36.2, 1079.0], [36.3, 1079.0], [36.4, 1080.0], [36.5, 1080.0], [36.6, 1080.0], [36.7, 1081.0], [36.8, 1082.0], [36.9, 1083.0], [37.0, 1084.0], [37.1, 1084.0], [37.2, 1086.0], [37.3, 1087.0], [37.4, 1087.0], [37.5, 1088.0], [37.6, 1088.0], [37.7, 1088.0], [37.8, 1090.0], [37.9, 1090.0], [38.0, 1090.0], [38.1, 1091.0], [38.2, 1091.0], [38.3, 1092.0], [38.4, 1092.0], [38.5, 1093.0], [38.6, 1094.0], [38.7, 1094.0], [38.8, 1095.0], [38.9, 1095.0], [39.0, 1096.0], [39.1, 1097.0], [39.2, 1097.0], [39.3, 1097.0], [39.4, 1098.0], [39.5, 1099.0], [39.6, 1100.0], [39.7, 1101.0], [39.8, 1102.0], [39.9, 1102.0], [40.0, 1104.0], [40.1, 1104.0], [40.2, 1104.0], [40.3, 1105.0], [40.4, 1105.0], [40.5, 1106.0], [40.6, 1106.0], [40.7, 1107.0], [40.8, 1108.0], [40.9, 1109.0], [41.0, 1112.0], [41.1, 1112.0], [41.2, 1112.0], [41.3, 1114.0], [41.4, 1114.0], [41.5, 1116.0], [41.6, 1118.0], [41.7, 1120.0], [41.8, 1121.0], [41.9, 1122.0], [42.0, 1122.0], [42.1, 1123.0], [42.2, 1123.0], [42.3, 1124.0], [42.4, 1124.0], [42.5, 1126.0], [42.6, 1127.0], [42.7, 1127.0], [42.8, 1128.0], [42.9, 1128.0], [43.0, 1128.0], [43.1, 1129.0], [43.2, 1130.0], [43.3, 1130.0], [43.4, 1130.0], [43.5, 1131.0], [43.6, 1131.0], [43.7, 1132.0], [43.8, 1132.0], [43.9, 1133.0], [44.0, 1133.0], [44.1, 1133.0], [44.2, 1134.0], [44.3, 1134.0], [44.4, 1135.0], [44.5, 1135.0], [44.6, 1136.0], [44.7, 1137.0], [44.8, 1139.0], [44.9, 1139.0], [45.0, 1140.0], [45.1, 1141.0], [45.2, 1141.0], [45.3, 1141.0], [45.4, 1141.0], [45.5, 1143.0], [45.6, 1143.0], [45.7, 1143.0], [45.8, 1144.0], [45.9, 1145.0], [46.0, 1145.0], [46.1, 1145.0], [46.2, 1145.0], [46.3, 1146.0], [46.4, 1146.0], [46.5, 1147.0], [46.6, 1147.0], [46.7, 1148.0], [46.8, 1148.0], [46.9, 1149.0], [47.0, 1149.0], [47.1, 1149.0], [47.2, 1150.0], [47.3, 1150.0], [47.4, 1151.0], [47.5, 1151.0], [47.6, 1151.0], [47.7, 1151.0], [47.8, 1152.0], [47.9, 1152.0], [48.0, 1152.0], [48.1, 1153.0], [48.2, 1153.0], [48.3, 1154.0], [48.4, 1154.0], [48.5, 1155.0], [48.6, 1155.0], [48.7, 1155.0], [48.8, 1156.0], [48.9, 1157.0], [49.0, 1157.0], [49.1, 1157.0], [49.2, 1158.0], [49.3, 1158.0], [49.4, 1158.0], [49.5, 1158.0], [49.6, 1159.0], [49.7, 1159.0], [49.8, 1160.0], [49.9, 1160.0], [50.0, 1161.0], [50.1, 1161.0], [50.2, 1161.0], [50.3, 1162.0], [50.4, 1162.0], [50.5, 1162.0], [50.6, 1163.0], [50.7, 1163.0], [50.8, 1163.0], [50.9, 1163.0], [51.0, 1164.0], [51.1, 1164.0], [51.2, 1165.0], [51.3, 1166.0], [51.4, 1166.0], [51.5, 1166.0], [51.6, 1167.0], [51.7, 1167.0], [51.8, 1168.0], [51.9, 1168.0], [52.0, 1168.0], [52.1, 1169.0], [52.2, 1169.0], [52.3, 1169.0], [52.4, 1169.0], [52.5, 1170.0], [52.6, 1170.0], [52.7, 1170.0], [52.8, 1171.0], [52.9, 1172.0], [53.0, 1172.0], [53.1, 1173.0], [53.2, 1173.0], [53.3, 1174.0], [53.4, 1174.0], [53.5, 1175.0], [53.6, 1175.0], [53.7, 1175.0], [53.8, 1178.0], [53.9, 1178.0], [54.0, 1179.0], [54.1, 1180.0], [54.2, 1181.0], [54.3, 1181.0], [54.4, 1182.0], [54.5, 1182.0], [54.6, 1183.0], [54.7, 1183.0], [54.8, 1183.0], [54.9, 1184.0], [55.0, 1186.0], [55.1, 1186.0], [55.2, 1186.0], [55.3, 1187.0], [55.4, 1187.0], [55.5, 1188.0], [55.6, 1188.0], [55.7, 1189.0], [55.8, 1189.0], [55.9, 1190.0], [56.0, 1190.0], [56.1, 1190.0], [56.2, 1191.0], [56.3, 1191.0], [56.4, 1191.0], [56.5, 1192.0], [56.6, 1192.0], [56.7, 1192.0], [56.8, 1192.0], [56.9, 1193.0], [57.0, 1194.0], [57.1, 1194.0], [57.2, 1195.0], [57.3, 1195.0], [57.4, 1195.0], [57.5, 1195.0], [57.6, 1196.0], [57.7, 1197.0], [57.8, 1197.0], [57.9, 1197.0], [58.0, 1198.0], [58.1, 1198.0], [58.2, 1199.0], [58.3, 1200.0], [58.4, 1200.0], [58.5, 1200.0], [58.6, 1200.0], [58.7, 1200.0], [58.8, 1201.0], [58.9, 1201.0], [59.0, 1202.0], [59.1, 1202.0], [59.2, 1202.0], [59.3, 1202.0], [59.4, 1203.0], [59.5, 1203.0], [59.6, 1203.0], [59.7, 1204.0], [59.8, 1205.0], [59.9, 1205.0], [60.0, 1205.0], [60.1, 1206.0], [60.2, 1207.0], [60.3, 1208.0], [60.4, 1208.0], [60.5, 1209.0], [60.6, 1210.0], [60.7, 1210.0], [60.8, 1210.0], [60.9, 1210.0], [61.0, 1211.0], [61.1, 1212.0], [61.2, 1212.0], [61.3, 1213.0], [61.4, 1213.0], [61.5, 1214.0], [61.6, 1215.0], [61.7, 1216.0], [61.8, 1217.0], [61.9, 1217.0], [62.0, 1217.0], [62.1, 1217.0], [62.2, 1218.0], [62.3, 1218.0], [62.4, 1219.0], [62.5, 1220.0], [62.6, 1220.0], [62.7, 1220.0], [62.8, 1220.0], [62.9, 1221.0], [63.0, 1221.0], [63.1, 1221.0], [63.2, 1222.0], [63.3, 1222.0], [63.4, 1222.0], [63.5, 1223.0], [63.6, 1223.0], [63.7, 1223.0], [63.8, 1224.0], [63.9, 1225.0], [64.0, 1225.0], [64.1, 1225.0], [64.2, 1226.0], [64.3, 1227.0], [64.4, 1227.0], [64.5, 1227.0], [64.6, 1227.0], [64.7, 1228.0], [64.8, 1228.0], [64.9, 1229.0], [65.0, 1230.0], [65.1, 1230.0], [65.2, 1231.0], [65.3, 1232.0], [65.4, 1232.0], [65.5, 1234.0], [65.6, 1235.0], [65.7, 1236.0], [65.8, 1238.0], [65.9, 1239.0], [66.0, 1243.0], [66.1, 1245.0], [66.2, 1248.0], [66.3, 1260.0], [66.4, 1265.0], [66.5, 1269.0], [66.6, 1272.0], [66.7, 1278.0], [66.8, 1280.0], [66.9, 1282.0], [67.0, 1293.0], [67.1, 1295.0], [67.2, 1296.0], [67.3, 1299.0], [67.4, 1306.0], [67.5, 1309.0], [67.6, 1311.0], [67.7, 1317.0], [67.8, 1322.0], [67.9, 1331.0], [68.0, 1334.0], [68.1, 1344.0], [68.2, 1345.0], [68.3, 1349.0], [68.4, 1351.0], [68.5, 1352.0], [68.6, 1355.0], [68.7, 1355.0], [68.8, 1362.0], [68.9, 1363.0], [69.0, 1366.0], [69.1, 1371.0], [69.2, 1372.0], [69.3, 1378.0], [69.4, 1380.0], [69.5, 1384.0], [69.6, 1387.0], [69.7, 1388.0], [69.8, 1390.0], [69.9, 1393.0], [70.0, 1394.0], [70.1, 1397.0], [70.2, 1398.0], [70.3, 1400.0], [70.4, 1402.0], [70.5, 1402.0], [70.6, 1404.0], [70.7, 1406.0], [70.8, 1407.0], [70.9, 1409.0], [71.0, 1411.0], [71.1, 1413.0], [71.2, 1414.0], [71.3, 1417.0], [71.4, 1418.0], [71.5, 1418.0], [71.6, 1420.0], [71.7, 1421.0], [71.8, 1423.0], [71.9, 1423.0], [72.0, 1425.0], [72.1, 1429.0], [72.2, 1431.0], [72.3, 1432.0], [72.4, 1433.0], [72.5, 1433.0], [72.6, 1435.0], [72.7, 1436.0], [72.8, 1436.0], [72.9, 1439.0], [73.0, 1439.0], [73.1, 1440.0], [73.2, 1440.0], [73.3, 1441.0], [73.4, 1441.0], [73.5, 1442.0], [73.6, 1442.0], [73.7, 1442.0], [73.8, 1445.0], [73.9, 1446.0], [74.0, 1447.0], [74.1, 1447.0], [74.2, 1448.0], [74.3, 1448.0], [74.4, 1449.0], [74.5, 1449.0], [74.6, 1450.0], [74.7, 1451.0], [74.8, 1453.0], [74.9, 1453.0], [75.0, 1454.0], [75.1, 1455.0], [75.2, 1455.0], [75.3, 1458.0], [75.4, 1458.0], [75.5, 1459.0], [75.6, 1463.0], [75.7, 1465.0], [75.8, 1468.0], [75.9, 1471.0], [76.0, 1473.0], [76.1, 1479.0], [76.2, 1480.0], [76.3, 1483.0], [76.4, 1483.0], [76.5, 1485.0], [76.6, 1489.0], [76.7, 1489.0], [76.8, 1491.0], [76.9, 1492.0], [77.0, 1493.0], [77.1, 1498.0], [77.2, 1500.0], [77.3, 1501.0], [77.4, 1502.0], [77.5, 1503.0], [77.6, 1507.0], [77.7, 1510.0], [77.8, 1512.0], [77.9, 1513.0], [78.0, 1514.0], [78.1, 1519.0], [78.2, 1523.0], [78.3, 1525.0], [78.4, 1526.0], [78.5, 1526.0], [78.6, 1529.0], [78.7, 1530.0], [78.8, 1535.0], [78.9, 1538.0], [79.0, 1538.0], [79.1, 1539.0], [79.2, 1542.0], [79.3, 1544.0], [79.4, 1547.0], [79.5, 1556.0], [79.6, 1557.0], [79.7, 1558.0], [79.8, 1561.0], [79.9, 1563.0], [80.0, 1564.0], [80.1, 1569.0], [80.2, 1570.0], [80.3, 1574.0], [80.4, 1576.0], [80.5, 1579.0], [80.6, 1581.0], [80.7, 1585.0], [80.8, 1588.0], [80.9, 1592.0], [81.0, 1594.0], [81.1, 1597.0], [81.2, 1602.0], [81.3, 1608.0], [81.4, 1806.0], [81.5, 1878.0], [81.6, 2056.0], [81.7, 2082.0], [81.8, 2120.0], [81.9, 2122.0], [82.0, 2123.0], [82.1, 2131.0], [82.2, 2131.0], [82.3, 2133.0], [82.4, 2136.0], [82.5, 2138.0], [82.6, 2140.0], [82.7, 2146.0], [82.8, 2162.0], [82.9, 2167.0], [83.0, 2168.0], [83.1, 2185.0], [83.2, 2188.0], [83.3, 2216.0], [83.4, 2226.0], [83.5, 2239.0], [83.6, 2254.0], [83.7, 2270.0], [83.8, 2285.0], [83.9, 2299.0], [84.0, 2309.0], [84.1, 2325.0], [84.2, 2328.0], [84.3, 2335.0], [84.4, 2339.0], [84.5, 2352.0], [84.6, 2360.0], [84.7, 2364.0], [84.8, 2372.0], [84.9, 2377.0], [85.0, 2381.0], [85.1, 2392.0], [85.2, 2396.0], [85.3, 2413.0], [85.4, 2416.0], [85.5, 2418.0], [85.6, 2433.0], [85.7, 2446.0], [85.8, 2459.0], [85.9, 2466.0], [86.0, 2468.0], [86.1, 2498.0], [86.2, 2501.0], [86.3, 2512.0], [86.4, 2541.0], [86.5, 2559.0], [86.6, 2564.0], [86.7, 2578.0], [86.8, 2590.0], [86.9, 2596.0], [87.0, 2598.0], [87.1, 2610.0], [87.2, 2625.0], [87.3, 2645.0], [87.4, 2660.0], [87.5, 2665.0], [87.6, 2673.0], [87.7, 2697.0], [87.8, 2713.0], [87.9, 2728.0], [88.0, 2738.0], [88.1, 2752.0], [88.2, 2762.0], [88.3, 2770.0], [88.4, 2772.0], [88.5, 2778.0], [88.6, 2791.0], [88.7, 2795.0], [88.8, 2801.0], [88.9, 2823.0], [89.0, 2831.0], [89.1, 2847.0], [89.2, 2853.0], [89.3, 2874.0], [89.4, 2899.0], [89.5, 2909.0], [89.6, 2916.0], [89.7, 2930.0], [89.8, 2934.0], [89.9, 2953.0], [90.0, 2954.0], [90.1, 2972.0], [90.2, 2985.0], [90.3, 3025.0], [90.4, 3041.0], [90.5, 3058.0], [90.6, 3062.0], [90.7, 3069.0], [90.8, 3087.0], [90.9, 3091.0], [91.0, 3099.0], [91.1, 3111.0], [91.2, 3114.0], [91.3, 3136.0], [91.4, 3140.0], [91.5, 3141.0], [91.6, 3158.0], [91.7, 3161.0], [91.8, 3174.0], [91.9, 3182.0], [92.0, 3183.0], [92.1, 3199.0], [92.2, 3200.0], [92.3, 3204.0], [92.4, 3217.0], [92.5, 3222.0], [92.6, 3224.0], [92.7, 3234.0], [92.8, 3239.0], [92.9, 3239.0], [93.0, 3242.0], [93.1, 3251.0], [93.2, 3261.0], [93.3, 3270.0], [93.4, 3275.0], [93.5, 3283.0], [93.6, 3313.0], [93.7, 3317.0], [93.8, 3330.0], [93.9, 3342.0], [94.0, 3352.0], [94.1, 3376.0], [94.2, 3385.0], [94.3, 3393.0], [94.4, 3403.0], [94.5, 3413.0], [94.6, 3421.0], [94.7, 3425.0], [94.8, 3431.0], [94.9, 3436.0], [95.0, 3442.0], [95.1, 3446.0], [95.2, 3448.0], [95.3, 3464.0], [95.4, 3477.0], [95.5, 3479.0], [95.6, 3492.0], [95.7, 3508.0], [95.8, 3512.0], [95.9, 3518.0], [96.0, 3519.0], [96.1, 3535.0], [96.2, 3538.0], [96.3, 3568.0], [96.4, 3571.0], [96.5, 3578.0], [96.6, 3586.0], [96.7, 3610.0], [96.8, 3619.0], [96.9, 3624.0], [97.0, 3628.0], [97.1, 3649.0], [97.2, 3660.0], [97.3, 3666.0], [97.4, 3669.0], [97.5, 3682.0], [97.6, 3698.0], [97.7, 3732.0], [97.8, 3757.0], [97.9, 3765.0], [98.0, 3770.0], [98.1, 3785.0], [98.2, 3816.0], [98.3, 3831.0], [98.4, 3833.0], [98.5, 3864.0], [98.6, 3888.0], [98.7, 3917.0], [98.8, 3951.0], [98.9, 4008.0], [99.0, 4032.0], [99.1, 4233.0], [99.2, 4334.0], [99.3, 4462.0], [99.4, 4500.0], [99.5, 4692.0], [99.6, 4797.0], [99.7, 4924.0], [99.8, 5139.0], [99.9, 5345.0], [100.0, 5477.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 450.0, "series": [{"data": [[600.0, 50.0], [700.0, 68.0], [800.0, 186.0], [900.0, 302.0], [1000.0, 295.0], [1100.0, 450.0], [1200.0, 217.0], [1300.0, 71.0], [1400.0, 165.0], [1500.0, 96.0], [1600.0, 5.0], [1800.0, 4.0], [1900.0, 1.0], [2000.0, 3.0], [2100.0, 37.0], [2300.0, 31.0], [2200.0, 17.0], [2400.0, 21.0], [2500.0, 22.0], [2600.0, 16.0], [2700.0, 26.0], [2800.0, 15.0], [2900.0, 20.0], [3000.0, 18.0], [3100.0, 27.0], [3200.0, 34.0], [3300.0, 20.0], [3400.0, 31.0], [3500.0, 24.0], [3600.0, 23.0], [3700.0, 13.0], [3800.0, 11.0], [3900.0, 6.0], [4000.0, 4.0], [4200.0, 2.0], [4300.0, 4.0], [4400.0, 2.0], [4500.0, 2.0], [4600.0, 1.0], [4700.0, 3.0], [4800.0, 1.0], [5000.0, 2.0], [5100.0, 2.0], [4900.0, 1.0], [5300.0, 1.0], [5400.0, 2.0], [100.0, 15.0], [200.0, 1.0], [300.0, 6.0], [400.0, 13.0], [500.0, 13.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 35.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1819.0, "series": [{"data": [[0.0, 35.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1819.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 546.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 274.2887499999998, "minX": 1.69665576E12, "maxY": 274.2887499999998, "series": [{"data": [[1.69665576E12, 274.2887499999998]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69665576E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 100.0, "minX": 1.0, "maxY": 4008.0, "series": [{"data": [[2.0, 3639.0], [3.0, 1108.0], [4.0, 129.0], [5.0, 3126.0], [6.0, 136.0], [7.0, 1174.5], [8.0, 1408.6666666666665], [9.0, 290.0], [10.0, 374.0], [11.0, 106.0], [12.0, 100.0], [13.0, 514.0], [14.0, 110.0], [15.0, 382.0], [20.0, 642.5], [22.0, 236.25], [26.0, 186.5], [27.0, 286.0], [28.0, 321.0], [29.0, 323.0], [30.0, 1581.0], [31.0, 652.8], [33.0, 492.0], [32.0, 490.0], [35.0, 493.0], [34.0, 483.0], [37.0, 504.0], [36.0, 1408.0], [39.0, 521.0], [38.0, 525.0], [41.0, 541.0], [40.0, 517.0], [42.0, 544.0], [45.0, 552.0], [44.0, 552.5], [47.0, 579.0], [46.0, 549.0], [49.0, 616.0], [48.0, 611.0], [51.0, 622.0], [50.0, 622.0], [53.0, 627.0], [52.0, 618.0], [55.0, 626.0], [54.0, 620.0], [57.0, 625.0], [56.0, 628.0], [59.0, 638.0], [58.0, 641.0], [61.0, 1721.0], [60.0, 632.0], [63.0, 636.0], [62.0, 643.0], [67.0, 643.0], [66.0, 640.0], [65.0, 646.0], [64.0, 657.0], [71.0, 652.0], [70.0, 653.0], [69.0, 648.3333333333334], [68.0, 650.0], [75.0, 670.0], [74.0, 687.0], [73.0, 675.0], [72.0, 664.0], [79.0, 669.0], [78.0, 948.0], [77.0, 684.0], [76.0, 684.0], [83.0, 700.0], [82.0, 679.0], [81.0, 679.0], [80.0, 676.0], [87.0, 686.0], [86.0, 681.0], [85.0, 691.0], [84.0, 678.0], [91.0, 715.0], [90.0, 1269.0], [89.0, 702.0], [88.0, 692.0], [95.0, 702.0], [94.0, 701.0], [93.0, 700.5], [92.0, 697.0], [99.0, 716.0], [98.0, 708.0], [97.0, 700.0], [96.0, 694.0], [103.0, 728.0], [102.0, 712.0], [101.0, 715.0], [100.0, 713.0], [107.0, 718.0], [106.0, 717.0], [105.0, 708.0], [104.0, 716.0], [111.0, 724.0], [110.0, 728.0], [109.0, 717.0], [108.0, 729.0], [114.0, 750.0], [113.0, 731.0], [112.0, 736.0], [119.0, 733.0], [117.0, 740.3333333333334], [123.0, 737.0], [122.0, 739.0], [121.0, 729.0], [120.0, 965.0], [126.0, 749.0], [125.0, 753.0], [124.0, 743.0], [135.0, 752.0], [134.0, 744.0], [133.0, 747.0], [132.0, 758.0], [131.0, 741.0], [130.0, 759.0], [143.0, 769.0], [142.0, 765.0], [141.0, 755.0], [140.0, 1191.3333333333333], [138.0, 758.0], [137.0, 747.0], [136.0, 759.0], [150.0, 816.0], [149.0, 1013.6], [148.0, 773.0], [147.0, 773.0], [146.0, 782.0], [145.0, 767.0], [144.0, 771.0], [159.0, 1172.5], [158.0, 1936.0], [157.0, 840.0], [156.0, 831.5], [155.0, 1076.0], [154.0, 829.0], [153.0, 818.0], [152.0, 1357.0], [167.0, 1806.0], [166.0, 1152.0], [165.0, 881.0], [164.0, 869.6666666666666], [163.0, 847.5], [162.0, 855.0], [161.0, 856.0], [160.0, 851.0], [175.0, 1817.0], [174.0, 896.5], [173.0, 896.5], [172.0, 893.0], [171.0, 909.5], [169.0, 899.0], [182.0, 924.0], [181.0, 911.0], [180.0, 914.0], [179.0, 911.0], [178.0, 900.0], [177.0, 900.0], [176.0, 898.5], [190.0, 1463.0], [189.0, 1489.0], [188.0, 897.0], [187.0, 896.5], [186.0, 903.0], [185.0, 1103.6666666666667], [199.0, 895.0], [198.0, 1110.6666666666667], [196.0, 905.0], [195.0, 898.0], [194.0, 894.0], [193.0, 908.0], [192.0, 1204.5], [207.0, 902.5], [205.0, 1080.3333333333333], [204.0, 898.0], [203.0, 896.0], [202.0, 904.0], [201.0, 906.0], [200.0, 893.0], [215.0, 901.0], [214.0, 1454.0], [213.0, 1118.0], [212.0, 1459.0], [211.0, 1215.0], [210.0, 1052.75], [209.0, 1074.6666666666667], [208.0, 1028.25], [223.0, 920.75], [222.0, 1050.25], [221.0, 914.0], [220.0, 1229.0], [219.0, 915.0], [218.0, 903.0], [217.0, 910.0], [216.0, 899.6666666666666], [231.0, 929.0], [230.0, 918.0], [229.0, 1185.25], [226.0, 913.0], [225.0, 924.3333333333334], [224.0, 1242.0], [239.0, 955.375], [238.0, 952.0], [237.0, 1025.3333333333333], [236.0, 941.0], [235.0, 945.8333333333334], [234.0, 935.6666666666666], [233.0, 927.75], [232.0, 985.625], [247.0, 968.8], [246.0, 982.0], [245.0, 985.0], [244.0, 960.0], [243.0, 977.0], [242.0, 969.0], [241.0, 961.5], [240.0, 963.0], [255.0, 1001.8], [253.0, 984.0], [252.0, 987.0], [251.0, 989.4], [250.0, 971.8], [270.0, 1045.6666666666667], [271.0, 1043.75], [269.0, 1044.0], [268.0, 1036.5], [267.0, 1032.25], [266.0, 1026.1666666666665], [264.0, 1015.25], [263.0, 1009.6], [257.0, 991.0], [256.0, 979.0], [259.0, 988.0], [258.0, 1094.5], [262.0, 1000.75], [261.0, 1024.0], [260.0, 995.5], [286.0, 1079.5], [287.0, 1093.0], [285.0, 1078.5], [284.0, 1083.0], [283.0, 1083.6666666666667], [282.0, 1089.0], [281.0, 1082.0], [280.0, 1080.0], [279.0, 1072.6666666666667], [273.0, 1054.0], [272.0, 1055.0], [275.0, 1058.0], [274.0, 1068.0], [278.0, 1078.5], [277.0, 1073.5], [276.0, 1072.0], [300.0, 1597.4118262689676], [298.0, 1096.75], [297.0, 1090.0], [296.0, 1097.8333333333335], [295.0, 1093.0], [294.0, 1100.0], [293.0, 1088.0], [292.0, 1097.4], [291.0, 1089.0], [290.0, 1099.5], [289.0, 1088.0], [288.0, 1088.0], [1.0, 4008.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[274.2887499999998, 1458.486249999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6255.0, "minX": 1.69665576E12, "maxY": 132694.41666666666, "series": [{"data": [[1.69665576E12, 132694.41666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69665576E12, 6255.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69665576E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1458.486249999999, "minX": 1.69665576E12, "maxY": 1458.486249999999, "series": [{"data": [[1.69665576E12, 1458.486249999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69665576E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1452.7474999999993, "minX": 1.69665576E12, "maxY": 1452.7474999999993, "series": [{"data": [[1.69665576E12, 1452.7474999999993]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69665576E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 343.83416666666704, "minX": 1.69665576E12, "maxY": 343.83416666666704, "series": [{"data": [[1.69665576E12, 343.83416666666704]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69665576E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 100.0, "minX": 1.69665576E12, "maxY": 5477.0, "series": [{"data": [[1.69665576E12, 5477.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69665576E12, 100.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69665576E12, 2957.6000000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69665576E12, 4032.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69665576E12, 1160.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.69665576E12, 3443.8999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69665576E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 679.0, "minX": 2.0, "maxY": 3823.5, "series": [{"data": [[2.0, 3823.5], [282.0, 996.0], [277.0, 1166.0], [296.0, 3223.5], [303.0, 969.0], [9.0, 1108.0], [167.0, 679.0], [175.0, 1447.0], [190.0, 1432.5], [229.0, 897.0], [224.0, 1195.0], [246.0, 1147.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 303.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 360.0, "minX": 2.0, "maxY": 3823.5, "series": [{"data": [[2.0, 3823.5], [282.0, 996.0], [277.0, 1165.0], [296.0, 3223.5], [303.0, 969.0], [9.0, 360.0], [167.0, 679.0], [175.0, 1447.0], [190.0, 1432.5], [229.0, 897.0], [224.0, 1195.0], [246.0, 1147.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 303.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.69665576E12, "maxY": 40.0, "series": [{"data": [[1.69665576E12, 40.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69665576E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.69665576E12, "maxY": 40.0, "series": [{"data": [[1.69665576E12, 40.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69665576E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.69665576E12, "maxY": 40.0, "series": [{"data": [[1.69665576E12, 40.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69665576E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.69665576E12, "maxY": 40.0, "series": [{"data": [[1.69665576E12, 40.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69665576E12, "title": "Total Transactions Per Second"}},
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

