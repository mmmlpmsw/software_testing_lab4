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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 3393.0, "series": [{"data": [[0.0, 7.0], [0.1, 280.0], [0.2, 393.0], [0.3, 413.0], [0.4, 426.0], [0.5, 433.0], [0.6, 438.0], [0.7, 448.0], [0.8, 454.0], [0.9, 460.0], [1.0, 464.0], [1.1, 473.0], [1.2, 481.0], [1.3, 484.0], [1.4, 487.0], [1.5, 494.0], [1.6, 498.0], [1.7, 502.0], [1.8, 506.0], [1.9, 510.0], [2.0, 511.0], [2.1, 512.0], [2.2, 514.0], [2.3, 516.0], [2.4, 517.0], [2.5, 519.0], [2.6, 521.0], [2.7, 523.0], [2.8, 524.0], [2.9, 526.0], [3.0, 529.0], [3.1, 530.0], [3.2, 534.0], [3.3, 536.0], [3.4, 540.0], [3.5, 543.0], [3.6, 549.0], [3.7, 554.0], [3.8, 558.0], [3.9, 563.0], [4.0, 565.0], [4.1, 570.0], [4.2, 576.0], [4.3, 584.0], [4.4, 589.0], [4.5, 596.0], [4.6, 599.0], [4.7, 601.0], [4.8, 602.0], [4.9, 607.0], [5.0, 611.0], [5.1, 614.0], [5.2, 618.0], [5.3, 621.0], [5.4, 624.0], [5.5, 629.0], [5.6, 633.0], [5.7, 638.0], [5.8, 640.0], [5.9, 642.0], [6.0, 644.0], [6.1, 648.0], [6.2, 650.0], [6.3, 654.0], [6.4, 656.0], [6.5, 659.0], [6.6, 663.0], [6.7, 665.0], [6.8, 668.0], [6.9, 669.0], [7.0, 674.0], [7.1, 677.0], [7.2, 680.0], [7.3, 683.0], [7.4, 685.0], [7.5, 688.0], [7.6, 695.0], [7.7, 699.0], [7.8, 703.0], [7.9, 708.0], [8.0, 715.0], [8.1, 719.0], [8.2, 721.0], [8.3, 724.0], [8.4, 729.0], [8.5, 736.0], [8.6, 741.0], [8.7, 744.0], [8.8, 749.0], [8.9, 753.0], [9.0, 757.0], [9.1, 761.0], [9.2, 763.0], [9.3, 768.0], [9.4, 774.0], [9.5, 779.0], [9.6, 782.0], [9.7, 785.0], [9.8, 788.0], [9.9, 791.0], [10.0, 795.0], [10.1, 799.0], [10.2, 801.0], [10.3, 809.0], [10.4, 813.0], [10.5, 819.0], [10.6, 823.0], [10.7, 828.0], [10.8, 829.0], [10.9, 831.0], [11.0, 838.0], [11.1, 841.0], [11.2, 843.0], [11.3, 851.0], [11.4, 855.0], [11.5, 860.0], [11.6, 866.0], [11.7, 871.0], [11.8, 875.0], [11.9, 880.0], [12.0, 883.0], [12.1, 884.0], [12.2, 887.0], [12.3, 892.0], [12.4, 899.0], [12.5, 906.0], [12.6, 910.0], [12.7, 914.0], [12.8, 919.0], [12.9, 922.0], [13.0, 930.0], [13.1, 934.0], [13.2, 943.0], [13.3, 953.0], [13.4, 960.0], [13.5, 967.0], [13.6, 969.0], [13.7, 972.0], [13.8, 975.0], [13.9, 984.0], [14.0, 991.0], [14.1, 995.0], [14.2, 1000.0], [14.3, 1007.0], [14.4, 1009.0], [14.5, 1014.0], [14.6, 1016.0], [14.7, 1019.0], [14.8, 1023.0], [14.9, 1025.0], [15.0, 1027.0], [15.1, 1029.0], [15.2, 1033.0], [15.3, 1035.0], [15.4, 1040.0], [15.5, 1042.0], [15.6, 1045.0], [15.7, 1050.0], [15.8, 1052.0], [15.9, 1054.0], [16.0, 1057.0], [16.1, 1061.0], [16.2, 1064.0], [16.3, 1074.0], [16.4, 1079.0], [16.5, 1081.0], [16.6, 1083.0], [16.7, 1086.0], [16.8, 1092.0], [16.9, 1098.0], [17.0, 1103.0], [17.1, 1107.0], [17.2, 1111.0], [17.3, 1116.0], [17.4, 1118.0], [17.5, 1121.0], [17.6, 1123.0], [17.7, 1134.0], [17.8, 1140.0], [17.9, 1142.0], [18.0, 1152.0], [18.1, 1160.0], [18.2, 1166.0], [18.3, 1172.0], [18.4, 1178.0], [18.5, 1181.0], [18.6, 1186.0], [18.7, 1190.0], [18.8, 1198.0], [18.9, 1201.0], [19.0, 1208.0], [19.1, 1211.0], [19.2, 1217.0], [19.3, 1223.0], [19.4, 1232.0], [19.5, 1240.0], [19.6, 1242.0], [19.7, 1247.0], [19.8, 1255.0], [19.9, 1261.0], [20.0, 1268.0], [20.1, 1272.0], [20.2, 1278.0], [20.3, 1282.0], [20.4, 1287.0], [20.5, 1294.0], [20.6, 1301.0], [20.7, 1305.0], [20.8, 1310.0], [20.9, 1317.0], [21.0, 1322.0], [21.1, 1326.0], [21.2, 1331.0], [21.3, 1343.0], [21.4, 1348.0], [21.5, 1351.0], [21.6, 1360.0], [21.7, 1364.0], [21.8, 1372.0], [21.9, 1379.0], [22.0, 1385.0], [22.1, 1388.0], [22.2, 1394.0], [22.3, 1397.0], [22.4, 1401.0], [22.5, 1405.0], [22.6, 1413.0], [22.7, 1417.0], [22.8, 1422.0], [22.9, 1425.0], [23.0, 1429.0], [23.1, 1432.0], [23.2, 1437.0], [23.3, 1440.0], [23.4, 1445.0], [23.5, 1451.0], [23.6, 1454.0], [23.7, 1459.0], [23.8, 1463.0], [23.9, 1466.0], [24.0, 1471.0], [24.1, 1476.0], [24.2, 1479.0], [24.3, 1484.0], [24.4, 1489.0], [24.5, 1494.0], [24.6, 1497.0], [24.7, 1500.0], [24.8, 1506.0], [24.9, 1508.0], [25.0, 1511.0], [25.1, 1513.0], [25.2, 1515.0], [25.3, 1518.0], [25.4, 1520.0], [25.5, 1523.0], [25.6, 1527.0], [25.7, 1532.0], [25.8, 1533.0], [25.9, 1537.0], [26.0, 1539.0], [26.1, 1543.0], [26.2, 1546.0], [26.3, 1551.0], [26.4, 1556.0], [26.5, 1558.0], [26.6, 1560.0], [26.7, 1561.0], [26.8, 1562.0], [26.9, 1565.0], [27.0, 1569.0], [27.1, 1571.0], [27.2, 1574.0], [27.3, 1577.0], [27.4, 1578.0], [27.5, 1581.0], [27.6, 1585.0], [27.7, 1588.0], [27.8, 1592.0], [27.9, 1595.0], [28.0, 1596.0], [28.1, 1599.0], [28.2, 1600.0], [28.3, 1602.0], [28.4, 1604.0], [28.5, 1606.0], [28.6, 1608.0], [28.7, 1611.0], [28.8, 1614.0], [28.9, 1616.0], [29.0, 1619.0], [29.1, 1622.0], [29.2, 1625.0], [29.3, 1627.0], [29.4, 1630.0], [29.5, 1633.0], [29.6, 1635.0], [29.7, 1637.0], [29.8, 1638.0], [29.9, 1639.0], [30.0, 1640.0], [30.1, 1642.0], [30.2, 1643.0], [30.3, 1646.0], [30.4, 1648.0], [30.5, 1650.0], [30.6, 1652.0], [30.7, 1654.0], [30.8, 1655.0], [30.9, 1658.0], [31.0, 1659.0], [31.1, 1662.0], [31.2, 1664.0], [31.3, 1666.0], [31.4, 1667.0], [31.5, 1669.0], [31.6, 1672.0], [31.7, 1674.0], [31.8, 1675.0], [31.9, 1677.0], [32.0, 1678.0], [32.1, 1679.0], [32.2, 1680.0], [32.3, 1681.0], [32.4, 1682.0], [32.5, 1684.0], [32.6, 1686.0], [32.7, 1689.0], [32.8, 1691.0], [32.9, 1694.0], [33.0, 1696.0], [33.1, 1698.0], [33.2, 1699.0], [33.3, 1701.0], [33.4, 1703.0], [33.5, 1705.0], [33.6, 1706.0], [33.7, 1708.0], [33.8, 1710.0], [33.9, 1713.0], [34.0, 1716.0], [34.1, 1717.0], [34.2, 1719.0], [34.3, 1719.0], [34.4, 1720.0], [34.5, 1721.0], [34.6, 1722.0], [34.7, 1723.0], [34.8, 1726.0], [34.9, 1728.0], [35.0, 1731.0], [35.1, 1733.0], [35.2, 1736.0], [35.3, 1737.0], [35.4, 1739.0], [35.5, 1742.0], [35.6, 1744.0], [35.7, 1746.0], [35.8, 1749.0], [35.9, 1751.0], [36.0, 1753.0], [36.1, 1755.0], [36.2, 1757.0], [36.3, 1759.0], [36.4, 1760.0], [36.5, 1760.0], [36.6, 1761.0], [36.7, 1763.0], [36.8, 1766.0], [36.9, 1768.0], [37.0, 1770.0], [37.1, 1773.0], [37.2, 1776.0], [37.3, 1778.0], [37.4, 1780.0], [37.5, 1783.0], [37.6, 1785.0], [37.7, 1788.0], [37.8, 1790.0], [37.9, 1793.0], [38.0, 1794.0], [38.1, 1796.0], [38.2, 1797.0], [38.3, 1799.0], [38.4, 1800.0], [38.5, 1801.0], [38.6, 1802.0], [38.7, 1804.0], [38.8, 1805.0], [38.9, 1807.0], [39.0, 1808.0], [39.1, 1811.0], [39.2, 1813.0], [39.3, 1815.0], [39.4, 1817.0], [39.5, 1819.0], [39.6, 1822.0], [39.7, 1824.0], [39.8, 1826.0], [39.9, 1828.0], [40.0, 1830.0], [40.1, 1834.0], [40.2, 1836.0], [40.3, 1838.0], [40.4, 1838.0], [40.5, 1839.0], [40.6, 1840.0], [40.7, 1841.0], [40.8, 1842.0], [40.9, 1844.0], [41.0, 1846.0], [41.1, 1849.0], [41.2, 1853.0], [41.3, 1855.0], [41.4, 1856.0], [41.5, 1858.0], [41.6, 1860.0], [41.7, 1862.0], [41.8, 1864.0], [41.9, 1867.0], [42.0, 1869.0], [42.1, 1872.0], [42.2, 1874.0], [42.3, 1876.0], [42.4, 1877.0], [42.5, 1878.0], [42.6, 1879.0], [42.7, 1880.0], [42.8, 1881.0], [42.9, 1883.0], [43.0, 1884.0], [43.1, 1887.0], [43.2, 1889.0], [43.3, 1891.0], [43.4, 1894.0], [43.5, 1896.0], [43.6, 1898.0], [43.7, 1901.0], [43.8, 1903.0], [43.9, 1905.0], [44.0, 1908.0], [44.1, 1910.0], [44.2, 1912.0], [44.3, 1914.0], [44.4, 1916.0], [44.5, 1917.0], [44.6, 1918.0], [44.7, 1919.0], [44.8, 1920.0], [44.9, 1920.0], [45.0, 1921.0], [45.1, 1922.0], [45.2, 1924.0], [45.3, 1926.0], [45.4, 1929.0], [45.5, 1930.0], [45.6, 1932.0], [45.7, 1935.0], [45.8, 1936.0], [45.9, 1938.0], [46.0, 1940.0], [46.1, 1943.0], [46.2, 1945.0], [46.3, 1946.0], [46.4, 1949.0], [46.5, 1951.0], [46.6, 1953.0], [46.7, 1955.0], [46.8, 1957.0], [46.9, 1959.0], [47.0, 1960.0], [47.1, 1961.0], [47.2, 1961.0], [47.3, 1963.0], [47.4, 1964.0], [47.5, 1967.0], [47.6, 1969.0], [47.7, 1971.0], [47.8, 1974.0], [47.9, 1976.0], [48.0, 1977.0], [48.1, 1978.0], [48.2, 1979.0], [48.3, 1981.0], [48.4, 1982.0], [48.5, 1984.0], [48.6, 1986.0], [48.7, 1987.0], [48.8, 1990.0], [48.9, 1993.0], [49.0, 1996.0], [49.1, 1998.0], [49.2, 1999.0], [49.3, 2000.0], [49.4, 2001.0], [49.5, 2002.0], [49.6, 2003.0], [49.7, 2004.0], [49.8, 2007.0], [49.9, 2009.0], [50.0, 2011.0], [50.1, 2013.0], [50.2, 2015.0], [50.3, 2017.0], [50.4, 2019.0], [50.5, 2020.0], [50.6, 2022.0], [50.7, 2025.0], [50.8, 2026.0], [50.9, 2028.0], [51.0, 2029.0], [51.1, 2031.0], [51.2, 2033.0], [51.3, 2035.0], [51.4, 2037.0], [51.5, 2038.0], [51.6, 2039.0], [51.7, 2039.0], [51.8, 2040.0], [51.9, 2041.0], [52.0, 2043.0], [52.1, 2045.0], [52.2, 2047.0], [52.3, 2048.0], [52.4, 2050.0], [52.5, 2052.0], [52.6, 2054.0], [52.7, 2057.0], [52.8, 2058.0], [52.9, 2060.0], [53.0, 2062.0], [53.1, 2063.0], [53.2, 2065.0], [53.3, 2068.0], [53.4, 2070.0], [53.5, 2073.0], [53.6, 2075.0], [53.7, 2076.0], [53.8, 2078.0], [53.9, 2078.0], [54.0, 2079.0], [54.1, 2081.0], [54.2, 2082.0], [54.3, 2084.0], [54.4, 2086.0], [54.5, 2089.0], [54.6, 2092.0], [54.7, 2094.0], [54.8, 2095.0], [54.9, 2098.0], [55.0, 2100.0], [55.1, 2101.0], [55.2, 2104.0], [55.3, 2106.0], [55.4, 2108.0], [55.5, 2109.0], [55.6, 2112.0], [55.7, 2115.0], [55.8, 2116.0], [55.9, 2117.0], [56.0, 2118.0], [56.1, 2119.0], [56.2, 2120.0], [56.3, 2121.0], [56.4, 2122.0], [56.5, 2123.0], [56.6, 2124.0], [56.7, 2126.0], [56.8, 2129.0], [56.9, 2131.0], [57.0, 2133.0], [57.1, 2135.0], [57.2, 2137.0], [57.3, 2139.0], [57.4, 2141.0], [57.5, 2142.0], [57.6, 2144.0], [57.7, 2145.0], [57.8, 2147.0], [57.9, 2149.0], [58.0, 2152.0], [58.1, 2154.0], [58.2, 2156.0], [58.3, 2157.0], [58.4, 2158.0], [58.5, 2159.0], [58.6, 2160.0], [58.7, 2161.0], [58.8, 2162.0], [58.9, 2163.0], [59.0, 2164.0], [59.1, 2166.0], [59.2, 2167.0], [59.3, 2169.0], [59.4, 2172.0], [59.5, 2174.0], [59.6, 2176.0], [59.7, 2178.0], [59.8, 2179.0], [59.9, 2181.0], [60.0, 2182.0], [60.1, 2184.0], [60.2, 2186.0], [60.3, 2188.0], [60.4, 2190.0], [60.5, 2193.0], [60.6, 2194.0], [60.7, 2196.0], [60.8, 2197.0], [60.9, 2198.0], [61.0, 2199.0], [61.1, 2200.0], [61.2, 2202.0], [61.3, 2203.0], [61.4, 2204.0], [61.5, 2206.0], [61.6, 2209.0], [61.7, 2211.0], [61.8, 2213.0], [61.9, 2215.0], [62.0, 2217.0], [62.1, 2219.0], [62.2, 2221.0], [62.3, 2223.0], [62.4, 2225.0], [62.5, 2227.0], [62.6, 2229.0], [62.7, 2231.0], [62.8, 2232.0], [62.9, 2235.0], [63.0, 2236.0], [63.1, 2238.0], [63.2, 2239.0], [63.3, 2240.0], [63.4, 2241.0], [63.5, 2242.0], [63.6, 2243.0], [63.7, 2245.0], [63.8, 2247.0], [63.9, 2250.0], [64.0, 2252.0], [64.1, 2255.0], [64.2, 2255.0], [64.3, 2257.0], [64.4, 2259.0], [64.5, 2261.0], [64.6, 2262.0], [64.7, 2264.0], [64.8, 2265.0], [64.9, 2267.0], [65.0, 2269.0], [65.1, 2271.0], [65.2, 2273.0], [65.3, 2275.0], [65.4, 2277.0], [65.5, 2279.0], [65.6, 2279.0], [65.7, 2280.0], [65.8, 2281.0], [65.9, 2282.0], [66.0, 2283.0], [66.1, 2285.0], [66.2, 2287.0], [66.3, 2288.0], [66.4, 2289.0], [66.5, 2292.0], [66.6, 2293.0], [66.7, 2295.0], [66.8, 2297.0], [66.9, 2299.0], [67.0, 2303.0], [67.1, 2304.0], [67.2, 2306.0], [67.3, 2308.0], [67.4, 2311.0], [67.5, 2313.0], [67.6, 2314.0], [67.7, 2316.0], [67.8, 2317.0], [67.9, 2318.0], [68.0, 2319.0], [68.1, 2320.0], [68.2, 2321.0], [68.3, 2322.0], [68.4, 2323.0], [68.5, 2324.0], [68.6, 2325.0], [68.7, 2327.0], [68.8, 2329.0], [68.9, 2331.0], [69.0, 2332.0], [69.1, 2334.0], [69.2, 2336.0], [69.3, 2338.0], [69.4, 2340.0], [69.5, 2342.0], [69.6, 2342.0], [69.7, 2344.0], [69.8, 2347.0], [69.9, 2349.0], [70.0, 2350.0], [70.1, 2351.0], [70.2, 2353.0], [70.3, 2354.0], [70.4, 2356.0], [70.5, 2357.0], [70.6, 2358.0], [70.7, 2359.0], [70.8, 2360.0], [70.9, 2361.0], [71.0, 2362.0], [71.1, 2363.0], [71.2, 2364.0], [71.3, 2365.0], [71.4, 2366.0], [71.5, 2369.0], [71.6, 2370.0], [71.7, 2372.0], [71.8, 2373.0], [71.9, 2375.0], [72.0, 2377.0], [72.1, 2380.0], [72.2, 2382.0], [72.3, 2384.0], [72.4, 2386.0], [72.5, 2387.0], [72.6, 2389.0], [72.7, 2390.0], [72.8, 2393.0], [72.9, 2395.0], [73.0, 2397.0], [73.1, 2398.0], [73.2, 2398.0], [73.3, 2399.0], [73.4, 2400.0], [73.5, 2401.0], [73.6, 2402.0], [73.7, 2403.0], [73.8, 2405.0], [73.9, 2407.0], [74.0, 2409.0], [74.1, 2411.0], [74.2, 2414.0], [74.3, 2416.0], [74.4, 2417.0], [74.5, 2419.0], [74.6, 2420.0], [74.7, 2421.0], [74.8, 2422.0], [74.9, 2423.0], [75.0, 2426.0], [75.1, 2428.0], [75.2, 2429.0], [75.3, 2431.0], [75.4, 2433.0], [75.5, 2434.0], [75.6, 2435.0], [75.7, 2436.0], [75.8, 2437.0], [75.9, 2439.0], [76.0, 2439.0], [76.1, 2440.0], [76.2, 2441.0], [76.3, 2443.0], [76.4, 2444.0], [76.5, 2446.0], [76.6, 2448.0], [76.7, 2449.0], [76.8, 2450.0], [76.9, 2451.0], [77.0, 2453.0], [77.1, 2454.0], [77.2, 2456.0], [77.3, 2458.0], [77.4, 2459.0], [77.5, 2462.0], [77.6, 2463.0], [77.7, 2464.0], [77.8, 2466.0], [77.9, 2467.0], [78.0, 2469.0], [78.1, 2471.0], [78.2, 2472.0], [78.3, 2474.0], [78.4, 2476.0], [78.5, 2477.0], [78.6, 2478.0], [78.7, 2479.0], [78.8, 2480.0], [78.9, 2481.0], [79.0, 2482.0], [79.1, 2483.0], [79.2, 2485.0], [79.3, 2487.0], [79.4, 2490.0], [79.5, 2493.0], [79.6, 2495.0], [79.7, 2497.0], [79.8, 2499.0], [79.9, 2500.0], [80.0, 2502.0], [80.1, 2503.0], [80.2, 2505.0], [80.3, 2508.0], [80.4, 2511.0], [80.5, 2513.0], [80.6, 2514.0], [80.7, 2516.0], [80.8, 2518.0], [80.9, 2519.0], [81.0, 2520.0], [81.1, 2521.0], [81.2, 2522.0], [81.3, 2523.0], [81.4, 2525.0], [81.5, 2527.0], [81.6, 2529.0], [81.7, 2531.0], [81.8, 2532.0], [81.9, 2534.0], [82.0, 2537.0], [82.1, 2539.0], [82.2, 2541.0], [82.3, 2544.0], [82.4, 2545.0], [82.5, 2547.0], [82.6, 2549.0], [82.7, 2551.0], [82.8, 2553.0], [82.9, 2554.0], [83.0, 2556.0], [83.1, 2557.0], [83.2, 2558.0], [83.3, 2558.0], [83.4, 2559.0], [83.5, 2560.0], [83.6, 2560.0], [83.7, 2561.0], [83.8, 2562.0], [83.9, 2564.0], [84.0, 2566.0], [84.1, 2567.0], [84.2, 2569.0], [84.3, 2570.0], [84.4, 2572.0], [84.5, 2573.0], [84.6, 2575.0], [84.7, 2577.0], [84.8, 2578.0], [84.9, 2579.0], [85.0, 2580.0], [85.1, 2582.0], [85.2, 2584.0], [85.3, 2585.0], [85.4, 2587.0], [85.5, 2588.0], [85.6, 2590.0], [85.7, 2591.0], [85.8, 2593.0], [85.9, 2595.0], [86.0, 2597.0], [86.1, 2598.0], [86.2, 2599.0], [86.3, 2599.0], [86.4, 2601.0], [86.5, 2602.0], [86.6, 2602.0], [86.7, 2603.0], [86.8, 2605.0], [86.9, 2607.0], [87.0, 2608.0], [87.1, 2609.0], [87.2, 2612.0], [87.3, 2614.0], [87.4, 2615.0], [87.5, 2617.0], [87.6, 2620.0], [87.7, 2621.0], [87.8, 2623.0], [87.9, 2625.0], [88.0, 2627.0], [88.1, 2629.0], [88.2, 2631.0], [88.3, 2634.0], [88.4, 2636.0], [88.5, 2636.0], [88.6, 2637.0], [88.7, 2638.0], [88.8, 2639.0], [88.9, 2640.0], [89.0, 2641.0], [89.1, 2642.0], [89.2, 2643.0], [89.3, 2644.0], [89.4, 2646.0], [89.5, 2647.0], [89.6, 2650.0], [89.7, 2651.0], [89.8, 2653.0], [89.9, 2655.0], [90.0, 2657.0], [90.1, 2658.0], [90.2, 2660.0], [90.3, 2661.0], [90.4, 2662.0], [90.5, 2664.0], [90.6, 2665.0], [90.7, 2667.0], [90.8, 2668.0], [90.9, 2670.0], [91.0, 2672.0], [91.1, 2673.0], [91.2, 2676.0], [91.3, 2677.0], [91.4, 2678.0], [91.5, 2678.0], [91.6, 2679.0], [91.7, 2680.0], [91.8, 2681.0], [91.9, 2682.0], [92.0, 2682.0], [92.1, 2683.0], [92.2, 2685.0], [92.3, 2688.0], [92.4, 2690.0], [92.5, 2692.0], [92.6, 2694.0], [92.7, 2695.0], [92.8, 2696.0], [92.9, 2698.0], [93.0, 2699.0], [93.1, 2701.0], [93.2, 2702.0], [93.3, 2704.0], [93.4, 2706.0], [93.5, 2708.0], [93.6, 2709.0], [93.7, 2711.0], [93.8, 2713.0], [93.9, 2715.0], [94.0, 2716.0], [94.1, 2718.0], [94.2, 2719.0], [94.3, 2720.0], [94.4, 2720.0], [94.5, 2721.0], [94.6, 2723.0], [94.7, 2724.0], [94.8, 2725.0], [94.9, 2727.0], [95.0, 2729.0], [95.1, 2730.0], [95.2, 2732.0], [95.3, 2735.0], [95.4, 2736.0], [95.5, 2738.0], [95.6, 2740.0], [95.7, 2743.0], [95.8, 2745.0], [95.9, 2747.0], [96.0, 2749.0], [96.1, 2752.0], [96.2, 2754.0], [96.3, 2756.0], [96.4, 2757.0], [96.5, 2758.0], [96.6, 2760.0], [96.7, 2761.0], [96.8, 2762.0], [96.9, 2764.0], [97.0, 2766.0], [97.1, 2769.0], [97.2, 2771.0], [97.3, 2775.0], [97.4, 2777.0], [97.5, 2780.0], [97.6, 2783.0], [97.7, 2787.0], [97.8, 2790.0], [97.9, 2795.0], [98.0, 2799.0], [98.1, 2800.0], [98.2, 2802.0], [98.3, 2805.0], [98.4, 2809.0], [98.5, 2812.0], [98.6, 2815.0], [98.7, 2821.0], [98.8, 2826.0], [98.9, 2831.0], [99.0, 2835.0], [99.1, 2839.0], [99.2, 2842.0], [99.3, 2850.0], [99.4, 2863.0], [99.5, 2873.0], [99.6, 2882.0], [99.7, 2897.0], [99.8, 2917.0], [99.9, 2958.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1170.0, "series": [{"data": [[0.0, 4.0], [600.0, 540.0], [700.0, 421.0], [800.0, 405.0], [900.0, 309.0], [1000.0, 483.0], [1100.0, 335.0], [1200.0, 300.0], [1300.0, 317.0], [1400.0, 401.0], [1500.0, 614.0], [1600.0, 884.0], [100.0, 9.0], [1700.0, 903.0], [1800.0, 931.0], [1900.0, 975.0], [2000.0, 1010.0], [2100.0, 1061.0], [2200.0, 1029.0], [2300.0, 1131.0], [2400.0, 1140.0], [2500.0, 1135.0], [2600.0, 1170.0], [2700.0, 890.0], [2800.0, 288.0], [2900.0, 37.0], [3000.0, 6.0], [3100.0, 4.0], [3200.0, 1.0], [3300.0, 1.0], [200.0, 11.0], [300.0, 17.0], [400.0, 246.0], [500.0, 525.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 141.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 13133.0, "series": [{"data": [[0.0, 255.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4004.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 13133.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 141.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.720588235294119, "minX": 1.62161868E12, "maxY": 124.27259036144585, "series": [{"data": [[1.6216191E12, 104.57030075187974], [1.62161892E12, 59.6800894854586], [1.62161874E12, 15.782986111111109], [1.62161922E12, 124.27259036144585], [1.62161904E12, 89.60298742138387], [1.62161886E12, 44.934770277935364], [1.62161868E12, 4.720588235294119], [1.62161916E12, 119.57624049257508], [1.62161898E12, 74.60570955730246], [1.6216188E12, 30.12870448772227]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62161922E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 451.25, "minX": 1.0, "maxY": 2799.5, "series": [{"data": [[2.0, 644.1428571428571], [3.0, 584.1111111111111], [4.0, 468.4545454545455], [5.0, 511.0], [6.0, 570.9333333333334], [7.0, 466.10526315789474], [8.0, 501.0], [9.0, 455.1904761904762], [10.0, 471.29629629629625], [11.0, 497.9310344827586], [12.0, 537.3243243243243], [13.0, 472.40000000000003], [14.0, 469.7222222222223], [15.0, 496.52380952380946], [16.0, 513.5749999999999], [17.0, 518.2045454545454], [18.0, 524.541666666667], [19.0, 588.2068965517242], [20.0, 572.530612244898], [21.0, 562.1052631578947], [22.0, 621.6984126984129], [23.0, 613.0153846153844], [24.0, 603.8769230769232], [25.0, 593.7285714285715], [26.0, 619.1159420289854], [27.0, 661.904109589041], [28.0, 638.5733333333335], [29.0, 673.1428571428572], [30.0, 723.6705882352941], [31.0, 688.9397590361444], [32.0, 703.2093023255813], [33.0, 769.2471910112363], [34.0, 750.2065217391305], [35.0, 775.0860215053764], [36.0, 793.1145833333334], [37.0, 852.7326732673271], [38.0, 856.2843137254903], [39.0, 928.3084112149536], [40.0, 925.1666666666664], [41.0, 925.7636363636364], [42.0, 960.7448979591833], [43.0, 984.0153846153845], [44.0, 1023.2596153846157], [45.0, 1043.7916666666672], [46.0, 1074.4344262295083], [47.0, 1096.7619047619053], [48.0, 1143.9999999999998], [49.0, 1171.7769230769234], [50.0, 1249.4814814814815], [51.0, 1270.0656934306567], [52.0, 1316.9064748201433], [53.0, 1357.231343283582], [54.0, 1392.3703703703702], [55.0, 1460.2048192771085], [56.0, 1518.8455882352935], [57.0, 1494.4729729729734], [58.0, 1508.2129032258058], [59.0, 1586.1986301369861], [60.0, 1577.9251700680281], [61.0, 1585.7256097560976], [62.0, 1613.6845637583888], [63.0, 1638.7870967741944], [64.0, 1639.5290322580647], [65.0, 1662.3835616438355], [66.0, 1708.3353293413172], [67.0, 1699.8684210526314], [68.0, 1719.5705521472394], [69.0, 1753.410256410256], [70.0, 1757.6075949367084], [71.0, 1763.5632911392402], [72.0, 1798.8571428571427], [73.0, 1819.8633540372666], [74.0, 1811.0858895705524], [75.0, 1846.0783132530114], [76.0, 1879.1000000000008], [77.0, 1872.6706586826347], [78.0, 1889.132911392406], [79.0, 1930.8690476190482], [80.0, 1924.012121212121], [81.0, 1928.253012048194], [82.0, 1976.3592814371257], [83.0, 1984.0239520958082], [84.0, 1982.4642857142858], [85.0, 2029.8143712574847], [86.0, 2029.7065868263471], [87.0, 2031.17816091954], [88.0, 2083.3413173652702], [89.0, 2072.347058823529], [90.0, 2101.8372093023254], [91.0, 2117.8888888888887], [92.0, 2139.64161849711], [93.0, 2145.255813953488], [94.0, 2172.1329479768774], [95.0, 2187.280000000003], [96.0, 2203.1839080459768], [97.0, 2221.8305084745734], [98.0, 2233.369942196532], [99.0, 2248.6440677966093], [100.0, 2272.107344632768], [101.0, 2276.845714285714], [102.0, 2298.632768361582], [103.0, 2318.0172413793093], [104.0, 2322.233333333333], [105.0, 2356.916201117319], [106.0, 2347.773480662983], [107.0, 2384.890109890112], [108.0, 2394.8944444444446], [109.0, 2420.5227272727298], [110.0, 2434.5760869565215], [111.0, 2433.126373626375], [112.0, 2466.7877094972073], [113.0, 2474.8547486033535], [114.0, 2489.7783783783784], [115.0, 2476.6137566137536], [116.0, 2539.3068181818176], [117.0, 2540.5967741935488], [118.0, 2551.784946236559], [119.0, 2582.5494505494526], [120.0, 2583.743169398906], [121.0, 2597.803191489361], [122.0, 2639.1351351351345], [123.0, 2630.6296296296296], [124.0, 2646.272727272727], [125.0, 2683.0879120879117], [126.0, 2693.3386243386267], [127.0, 2690.937500000002], [128.0, 2727.4010989010967], [129.0, 2736.5312499999995], [130.0, 2730.5531914893636], [131.0, 2780.3439153439144], [132.0, 2796.17277486911], [133.0, 2638.2529411764713], [135.0, 2799.5], [1.0, 451.25]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[82.06895568356792, 1888.6502024753324]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 135.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 175.66666666666666, "minX": 1.62161868E12, "maxY": 16888.116666666665, "series": [{"data": [[1.6216191E12, 16270.333333333334], [1.62161892E12, 13670.75], [1.62161874E12, 3523.2], [1.62161922E12, 13366.066666666668], [1.62161904E12, 15560.8], [1.62161886E12, 10783.683333333332], [1.62161868E12, 415.93333333333334], [1.62161916E12, 16888.116666666665], [1.62161898E12, 14783.983333333334], [1.6216188E12, 7223.783333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6216191E12, 6871.666666666667], [1.62161892E12, 5773.75], [1.62161874E12, 1488.0], [1.62161922E12, 3087.0833333333335], [1.62161904E12, 6572.0], [1.62161886E12, 4554.416666666667], [1.62161868E12, 175.66666666666666], [1.62161916E12, 7132.583333333333], [1.62161898E12, 6243.916666666667], [1.6216188E12, 3050.9166666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62161922E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 472.2352941176472, "minX": 1.62161868E12, "maxY": 2609.648343373499, "series": [{"data": [[1.6216191E12, 2343.8312030075135], [1.62161892E12, 1557.8250559284108], [1.62161874E12, 512.4687500000001], [1.62161922E12, 2609.648343373499], [1.62161904E12, 2096.9654088050347], [1.62161886E12, 1058.1792399319334], [1.62161868E12, 472.2352941176472], [1.62161916E12, 2586.8844621513967], [1.62161898E12, 1839.8200248241621], [1.6216188E12, 690.0795935647764]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62161922E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 472.13235294117646, "minX": 1.62161868E12, "maxY": 2586.8750452734507, "series": [{"data": [[1.6216191E12, 2343.8191729323294], [1.62161892E12, 1557.8111856823289], [1.62161874E12, 512.451388888889], [1.62161922E12, 2467.850903614455], [1.62161904E12, 2096.9555817610085], [1.62161886E12, 1058.1752694271117], [1.62161868E12, 472.13235294117646], [1.62161916E12, 2586.8750452734507], [1.62161898E12, 1839.8100951592887], [1.6216188E12, 690.0626587637586]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62161922E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0450972279685561, "minX": 1.62161868E12, "maxY": 0.514705882352941, "series": [{"data": [[1.6216191E12, 0.06390977443609036], [1.62161892E12, 0.06129753914988819], [1.62161874E12, 0.1770833333333332], [1.62161922E12, 0.046686746987951805], [1.62161904E12, 0.049528301886792345], [1.62161886E12, 0.05218377765173], [1.62161868E12, 0.514705882352941], [1.62161916E12, 0.04527345164795369], [1.62161898E12, 0.0450972279685561], [1.6216188E12, 0.12531752751905167]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62161922E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 376.0, "minX": 1.62161868E12, "maxY": 3393.0, "series": [{"data": [[1.6216191E12, 2717.0], [1.62161892E12, 1917.0], [1.62161874E12, 1019.0], [1.62161922E12, 3393.0], [1.62161904E12, 2416.0], [1.62161886E12, 1689.0], [1.62161868E12, 954.0], [1.62161916E12, 2947.0], [1.62161898E12, 2138.0], [1.6216188E12, 1223.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6216191E12, 2446.0], [1.62161892E12, 1694.4], [1.62161874E12, 561.0], [1.62161922E12, 2847.0], [1.62161904E12, 2203.0], [1.62161886E12, 1258.6000000000001], [1.62161868E12, 524.4], [1.62161916E12, 2699.0], [1.62161898E12, 1951.0], [1.6216188E12, 794.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6216191E12, 2549.7799999999997], [1.62161892E12, 1776.1999999999994], [1.62161874E12, 992.6800000000003], [1.62161922E12, 3008.7199999999993], [1.62161904E12, 2287.55], [1.62161886E12, 1359.5199999999993], [1.62161868E12, 954.0], [1.62161916E12, 2794.040000000001], [1.62161898E12, 2033.8200000000002], [1.6216188E12, 877.3600000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6216191E12, 2472.95], [1.62161892E12, 1719.1999999999998], [1.62161874E12, 584.15], [1.62161922E12, 2891.0], [1.62161904E12, 2231.75], [1.62161886E12, 1299.8], [1.62161868E12, 605.8999999999999], [1.62161916E12, 2722.0], [1.62161898E12, 1979.0], [1.6216188E12, 812.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6216191E12, 2076.0], [1.62161892E12, 1247.0], [1.62161874E12, 400.0], [1.62161922E12, 2468.0], [1.62161904E12, 1902.0], [1.62161886E12, 785.0], [1.62161868E12, 376.0], [1.62161916E12, 2339.0], [1.62161898E12, 1612.0], [1.6216188E12, 521.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6216191E12, 2345.0], [1.62161892E12, 1575.0], [1.62161874E12, 513.0], [1.62161922E12, 2754.0], [1.62161904E12, 2098.0], [1.62161886E12, 1051.0], [1.62161868E12, 462.0], [1.62161916E12, 2585.0], [1.62161898E12, 1840.0], [1.6216188E12, 680.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62161922E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 174.0, "minX": 1.0, "maxY": 2799.0, "series": [{"data": [[2.0, 429.5], [3.0, 463.0], [4.0, 482.0], [5.0, 460.0], [6.0, 486.5], [7.0, 490.0], [8.0, 459.5], [9.0, 473.0], [10.0, 512.0], [11.0, 515.0], [12.0, 525.5], [13.0, 525.0], [14.0, 534.0], [15.0, 561.0], [16.0, 585.5], [17.0, 615.0], [18.0, 603.0], [19.0, 664.0], [20.0, 665.0], [21.0, 696.0], [22.0, 723.0], [23.0, 761.0], [24.0, 791.0], [25.0, 841.0], [26.0, 875.0], [27.0, 907.0], [28.0, 1018.0], [29.0, 1029.0], [30.0, 1067.0], [31.0, 1111.5], [32.0, 1478.5], [33.0, 1643.0], [34.0, 1295.5], [35.0, 1397.0], [36.0, 1566.5], [37.0, 1807.0], [39.0, 1908.0], [38.0, 1979.5], [41.0, 1960.0], [40.0, 1953.0], [42.0, 2082.0], [43.0, 2181.0], [44.0, 2273.0], [45.0, 2328.0], [47.0, 2519.0], [46.0, 2561.0], [49.0, 2548.0], [48.0, 2558.0], [50.0, 2407.0], [51.0, 2629.5], [53.0, 1524.0], [54.0, 1480.5], [157.0, 2799.0], [1.0, 407.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[157.0, 1532.0], [48.0, 174.0], [51.0, 273.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 157.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 2799.0, "series": [{"data": [[2.0, 429.5], [3.0, 463.0], [4.0, 482.0], [5.0, 460.0], [6.0, 486.5], [7.0, 490.0], [8.0, 459.5], [9.0, 473.0], [10.0, 512.0], [11.0, 515.0], [12.0, 525.5], [13.0, 525.0], [14.0, 534.0], [15.0, 560.0], [16.0, 585.5], [17.0, 615.0], [18.0, 603.0], [19.0, 664.0], [20.0, 665.0], [21.0, 696.0], [22.0, 723.0], [23.0, 761.0], [24.0, 791.0], [25.0, 841.0], [26.0, 875.0], [27.0, 907.0], [28.0, 1018.0], [29.0, 1029.0], [30.0, 1067.0], [31.0, 1111.5], [32.0, 1478.5], [33.0, 1643.0], [34.0, 1295.5], [35.0, 1397.0], [36.0, 1566.5], [37.0, 1807.0], [39.0, 1908.0], [38.0, 1979.5], [41.0, 1960.0], [40.0, 1953.0], [42.0, 2082.0], [43.0, 2181.0], [44.0, 2273.0], [45.0, 2328.0], [47.0, 2519.0], [46.0, 2561.0], [49.0, 2548.0], [48.0, 2558.0], [50.0, 2407.0], [51.0, 2629.5], [53.0, 1524.0], [54.0, 1480.5], [157.0, 2799.0], [1.0, 407.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[157.0, 0.0], [48.0, 174.0], [51.0, 271.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 157.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1666666666666667, "minX": 1.62161868E12, "maxY": 46.266666666666666, "series": [{"data": [[1.6216191E12, 44.583333333333336], [1.62161892E12, 37.63333333333333], [1.62161874E12, 9.833333333333334], [1.62161922E12, 20.016666666666666], [1.62161904E12, 42.65], [1.62161886E12, 29.7], [1.62161868E12, 1.1666666666666667], [1.62161916E12, 46.266666666666666], [1.62161898E12, 40.53333333333333], [1.6216188E12, 19.833333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62161922E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.62161868E12, "maxY": 46.016666666666666, "series": [{"data": [[1.6216191E12, 44.333333333333336], [1.62161892E12, 37.25], [1.62161874E12, 9.6], [1.62161922E12, 19.783333333333335], [1.62161904E12, 42.4], [1.62161886E12, 29.383333333333333], [1.62161868E12, 1.1333333333333333], [1.62161916E12, 46.016666666666666], [1.62161898E12, 40.28333333333333], [1.6216188E12, 19.683333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62161922E12, 0.13333333333333333]], "isOverall": false, "label": "503", "isController": false}, {"data": [[1.62161922E12, 2.216666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62161922E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.62161868E12, "maxY": 46.016666666666666, "series": [{"data": [[1.6216191E12, 44.333333333333336], [1.62161892E12, 37.25], [1.62161874E12, 9.6], [1.62161922E12, 19.783333333333335], [1.62161904E12, 42.4], [1.62161886E12, 29.383333333333333], [1.62161868E12, 1.1333333333333333], [1.62161916E12, 46.016666666666666], [1.62161898E12, 40.28333333333333], [1.6216188E12, 19.683333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.62161922E12, 2.35]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62161922E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.62161868E12, "maxY": 46.016666666666666, "series": [{"data": [[1.6216191E12, 44.333333333333336], [1.62161892E12, 37.25], [1.62161874E12, 9.6], [1.62161922E12, 19.783333333333335], [1.62161904E12, 42.4], [1.62161886E12, 29.383333333333333], [1.62161868E12, 1.1333333333333333], [1.62161916E12, 46.016666666666666], [1.62161898E12, 40.28333333333333], [1.6216188E12, 19.683333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62161922E12, 2.35]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62161922E12, "title": "Total Transactions Per Second"}},
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

