
> crdt-benchmarks@1.0.0 table
> node bin/render-table.js benchmarks/results.json 6000 yjs ywasm automerge-wasm tree-fugue tree-fugue-simple list-fugue-simple

sqrtN = 1540
Format: mean +/- stddev; 10 measured trials, 5 warmup trials.

N = 6000 | yjs | ywasm | automerge-wasm | tree-fugue | tree-fugue-simple | list-fugue-simple|
| :- |  -: | -: | -: | -: | -: | -:  |
|[B1.1] Append N characters (time)                                         |          199 ms |          264 ms |          343 ms |          142 ms |          870 ms |          154 ms |
|[B1.1] Append N characters (avgUpdateSize)                                |        27 bytes |        27 bytes |       121 bytes |        39 bytes |       164 bytes |       197 bytes |
|[B1.1] Append N characters (encodeTime)                                   |            1 ms |            0 ms |           13 ms |            1 ms |            6 ms |            9 ms |
|[B1.1] Append N characters (docSize)                                      |      6031 bytes |      6031 bytes |      3990 bytes |      6145 bytes |    615998 bytes |   1005836 bytes |
|[B1.1] Append N characters (memUsed)                                      |   -556800 bytes |    -29736 bytes |   -183384 bytes |   -358208 bytes |   2036360 bytes |    663072 bytes |
|[B1.1] Append N characters (parseTime)                                    |           61 ms |           87 ms |          175 ms |           74 ms |           91 ms |           87 ms |
|[B1.2] Insert string of length N (time)                                   |            1 ms |            1 ms |           26 ms |            3 ms |          683 ms |           63 ms |
|[B1.2] Insert string of length N (avgUpdateSize)                          |      6031 bytes |      6031 bytes |      6196 bytes |      6049 bytes |    819682 bytes |   1017682 bytes |
|[B1.2] Insert string of length N (encodeTime)                             |            1 ms |            0 ms |            3 ms |            0 ms |            6 ms |           12 ms |
|[B1.2] Insert string of length N (docSize)                                |      6031 bytes |      6031 bytes |      3972 bytes |      6143 bytes |    615996 bytes |   1005834 bytes |
|[B1.2] Insert string of length N (memUsed)                                |    -22472 bytes |       304 bytes |    -19880 bytes |      9920 bytes |   1830456 bytes |    755504 bytes |
|[B1.2] Insert string of length N (parseTime)                              |           61 ms |           82 ms |          103 ms |           79 ms |           88 ms |           89 ms |
|[B1.3] Prepend N characters (time)                                        |          148 ms |           35 ms |          103 ms |          605 ms |          632 ms |          116 ms |
|[B1.3] Prepend N characters (avgUpdateSize)                               |        27 bytes |        27 bytes |       116 bytes |        46 bytes |       164 bytes |       197 bytes |
|[B1.3] Prepend N characters (encodeTime)                                  |            5 ms |            0 ms |           13 ms |           11 ms |            4 ms |            7 ms |
|[B1.3] Prepend N characters (docSize)                                     |      6041 bytes |      6041 bytes |      3986 bytes |     65766 bytes |    615998 bytes |   1005836 bytes |
|[B1.3] Prepend N characters (memUsed)                                     |   1037024 bytes |    -26440 bytes |    -41400 bytes |   1573192 bytes |   2284824 bytes |    670096 bytes |
|[B1.3] Prepend N characters (parseTime)                                   |           78 ms |           84 ms |          207 ms |           91 ms |           88 ms |           96 ms |
|[B1.4] Insert N characters at random positions (time)                     |          174 ms |          171 ms |          528 ms |          114 ms |          105 ms |          216 ms |
|[B1.4] Insert N characters at random positions (avgUpdateSize)            |        29 bytes |        29 bytes |       121 bytes |        42 bytes |       163 bytes |       209 bytes |
|[B1.4] Insert N characters at random positions (encodeTime)               |           12 ms |            1 ms |           14 ms |            6 ms |            5 ms |            8 ms |
|[B1.4] Insert N characters at random positions (docSize)                  |     29554 bytes |     29554 bytes |     24743 bytes |     35494 bytes |    599394 bytes |   1078069 bytes |
|[B1.4] Insert N characters at random positions (memUsed)                  |    600656 bytes |    -49608 bytes |   -282920 bytes |    668112 bytes |   1997720 bytes |    656232 bytes |
|[B1.4] Insert N characters at random positions (parseTime)                |          107 ms |           86 ms |          195 ms |           95 ms |           97 ms |           93 ms |
|[B1.5] Insert N words at random positions (time)                          |          238 ms |          526 ms |          806 ms |          124 ms |          333 ms |         2329 ms |
|[B1.5] Insert N words at random positions (avgUpdateSize)                 |        36 bytes |        36 bytes |       131 bytes |        50 bytes |       864 bytes |      1143 bytes |
|[B1.5] Insert N words at random positions (encodeTime)                    |           17 ms |            1 ms |           30 ms |           13 ms |           30 ms |           46 ms |
|[B1.5] Insert N words at random positions (docSize)                       |     87924 bytes |     87924 bytes |     96199 bytes |     91193 bytes |   3656379 bytes |   6604366 bytes |
|[B1.5] Insert N words at random positions (memUsed)                       |   2233424 bytes |    -14872 bytes |    -46552 bytes |   1255864 bytes |  12660496 bytes |   4653768 bytes |
|[B1.5] Insert N words at random positions (parseTime)                     |          139 ms |           84 ms |          275 ms |          113 ms |          199 ms |          155 ms |
|[B1.6] Insert string, then delete it (time)                               |            3 ms |            1 ms |           33 ms |           64 ms |         1033 ms |          148 ms |
|[B1.6] Insert string, then delete it (avgUpdateSize)                      |      6053 bytes |      6053 bytes |      6333 bytes |     71836 bytes |   1208487 bytes |   1406487 bytes |
|[B1.6] Insert string, then delete it (encodeTime)                         |            0 ms |            0 ms |            4 ms |            3 ms |            5 ms |            7 ms |
|[B1.6] Insert string, then delete it (docSize)                            |        38 bytes |        38 bytes |      3991 bytes |       137 bytes |    599100 bytes |   1005834 bytes |
|[B1.6] Insert string, then delete it (memUsed)                            |    213880 bytes |       856 bytes |       416 bytes |    -55368 bytes |   2038376 bytes |    719744 bytes |
|[B1.6] Insert string, then delete it (parseTime)                          |           79 ms |           78 ms |          153 ms |           84 ms |           97 ms |           96 ms |
|[B1.7] Insert/Delete strings at random positions (time)                   |          280 ms |          160 ms |          641 ms |          182 ms |          325 ms |         1099 ms |
|[B1.7] Insert/Delete strings at random positions (avgUpdateSize)          |        31 bytes |        30 bytes |       135 bytes |        67 bytes |       603 bytes |       740 bytes |
|[B1.7] Insert/Delete strings at random positions (encodeTime)             |           22 ms |            1 ms |           28 ms |            4 ms |           12 ms |           26 ms |
|[B1.7] Insert/Delete strings at random positions (docSize)                |     28377 bytes |     28375 bytes |     59280 bytes |     29957 bytes |   1784311 bytes |   3228806 bytes |
|[B1.7] Insert/Delete strings at random positions (memUsed)                |    892184 bytes |    -48176 bytes |    -40744 bytes |    468544 bytes |   6138456 bytes |   2200248 bytes |
|[B1.7] Insert/Delete strings at random positions (parseTime)              |          138 ms |           82 ms |          284 ms |           93 ms |          124 ms |          112 ms |
|[B1.8] Append N numbers (time)                                            |          271 ms |           43 ms |          313 ms |          128 ms |          871 ms |          104 ms |
|[B1.8] Append N numbers (avgUpdateSize)                                   |        32 bytes |        32 bytes |       125 bytes |        45 bytes |       171 bytes |       204 bytes |
|[B1.8] Append N numbers (encodeTime)                                      |            6 ms |            0 ms |           16 ms |            6 ms |            5 ms |           17 ms |
|[B1.8] Append N numbers (docSize)                                         |     35634 bytes |     35634 bytes |     26982 bytes |     47751 bytes |    654817 bytes |   1044655 bytes |
|[B1.8] Append N numbers (memUsed)                                         |   -288328 bytes |    -45080 bytes |     -7864 bytes |     86656 bytes |   2173304 bytes |    671240 bytes |
|[B1.8] Append N numbers (parseTime)                                       |           92 ms |           82 ms |          206 ms |          102 ms |          101 ms |          101 ms |
|[B1.9] Insert Array of N numbers (time)                                   |            3 ms |            5 ms |           29 ms |           36 ms |          643 ms |           49 ms |
|[B1.9] Insert Array of N numbers (avgUpdateSize)                          |     35657 bytes |     35657 bytes |     31194 bytes |     47678 bytes |    858656 bytes |   1056656 bytes |
|[B1.9] Insert Array of N numbers (encodeTime)                             |            1 ms |            0 ms |            5 ms |           10 ms |            6 ms |            8 ms |
|[B1.9] Insert Array of N numbers (docSize)                                |     35657 bytes |     35657 bytes |     26951 bytes |     47772 bytes |    654969 bytes |   1044807 bytes |
|[B1.9] Insert Array of N numbers (memUsed)                                |    -29576 bytes |      3904 bytes |       640 bytes |     53336 bytes |   2062744 bytes |    658464 bytes |
|[B1.9] Insert Array of N numbers (parseTime)                              |           81 ms |           82 ms |          152 ms |           98 ms |           89 ms |           89 ms |
|[B1.10] Prepend N numbers (time)                                          |          209 ms |           37 ms |          483 ms |          566 ms |          481 ms |           97 ms |
|[B1.10] Prepend N numbers (avgUpdateSize)                                 |        32 bytes |        32 bytes |       120 bytes |        52 bytes |       171 bytes |       204 bytes |
|[B1.10] Prepend N numbers (encodeTime)                                    |           12 ms |            1 ms |           15 ms |           15 ms |            4 ms |            8 ms |
|[B1.10] Prepend N numbers (docSize)                                       |     35665 bytes |     35665 bytes |     26985 bytes |    107390 bytes |    654884 bytes |   1044722 bytes |
|[B1.10] Prepend N numbers (memUsed)                                       |   1680088 bytes |   -145696 bytes |    -30368 bytes |   1886768 bytes |   1838552 bytes |    469320 bytes |
|[B1.10] Prepend N numbers (parseTime)                                     |          110 ms |           88 ms |          190 ms |          112 ms |           87 ms |           91 ms |
|[B1.11] Insert N numbers at random positions (time)                       |          241 ms |          183 ms |          499 ms |          130 ms |           96 ms |          193 ms |
|[B1.11] Insert N numbers at random positions (avgUpdateSize)              |        34 bytes |        34 bytes |       125 bytes |        48 bytes |       171 bytes |       216 bytes |
|[B1.11] Insert N numbers at random positions (encodeTime)                 |           15 ms |            1 ms |           13 ms |           13 ms |            5 ms |            7 ms |
|[B1.11] Insert N numbers at random positions (docSize)                    |     59137 bytes |     59137 bytes |     47744 bytes |     77385 bytes |    638196 bytes |   1116861 bytes |
|[B1.11] Insert N numbers at random positions (memUsed)                    |   1825792 bytes |    -32936 bytes |    -54592 bytes |   -877824 bytes |   2009056 bytes |    669696 bytes |
|[B1.11] Insert N numbers at random positions (parseTime)                  |          119 ms |           89 ms |          171 ms |          122 ms |           93 ms |           90 ms |
|[B2.1] Concurrently insert string of length N at index 0 (time)           |            4 ms |            1 ms |           88 ms |            7 ms |         1548 ms |          342 ms |
|[B2.1] Concurrently insert string of length N at index 0 (updateSize)     |      6094 bytes |      6094 bytes |      9494 bytes |      6136 bytes |    826516 bytes |   1092156 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (encodeTime)     |            0 ms |            0 ms |            4 ms |            1 ms |            9 ms |           17 ms |
|[B2.1] Concurrently insert string of length N at index 0 (docSize)        |     12151 bytes |     12151 bytes |      8009 bytes |     12289 bytes |   1241904 bytes |   2160409 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (memUsed)        |   -266528 bytes |       240 bytes |      -904 bytes |   -357224 bytes |   4194320 bytes |   1492240 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (parseTime)      |           86 ms |           88 ms |          146 ms |           80 ms |          103 ms |          101 ms |
|[B2.2] Concurrently insert N characters at random positions (time)        |          152 ms |          436 ms |         1392 ms |          158 ms |          191 ms |          755 ms |
|[B2.2] Concurrently insert N characters at random positions (updateSize)  |     33444 bytes |    177007 bytes |   1093282 bytes |    104977 bytes |    825600 bytes |   1099004 bytes |
|[B2.2] Concurrently insert N characters at random positions (encodeTime)  |            6 ms |            1 ms |           28 ms |           14 ms |            9 ms |           12 ms |
|[B2.2] Concurrently insert N characters at random positions (docSize)     |     66852 bytes |     66852 bytes |     50699 bytes |     72341 bytes |   1208756 bytes |   2174106 bytes |
|[B2.2] Concurrently insert N characters at random positions (memUsed)     |   2538368 bytes |    -56376 bytes |    -27504 bytes |   1540520 bytes |   4191728 bytes |   1485848 bytes |
|[B2.2] Concurrently insert N characters at random positions (parseTime)   |          139 ms |           90 ms |          269 ms |           94 ms |          107 ms |           93 ms |
|[B2.3] Concurrently insert N words at random positions (time)             |          205 ms |         1233 ms |         2520 ms |          181 ms |          907 ms |        21056 ms |
|[B2.3] Concurrently insert N words at random positions (updateSize)       |     88994 bytes |    212195 bytes |   1185195 bytes |    149822 bytes |   4980784 bytes |   6638148 bytes |
|[B2.3] Concurrently insert N words at random positions (encodeTime)       |            7 ms |            5 ms |           73 ms |           27 ms |           59 ms |          104 ms |
|[B2.3] Concurrently insert N words at random positions (docSize)          |    178130 bytes |    177889 bytes |    191496 bytes |    182584 bytes |   7248094 bytes |  13094218 bytes |
|[B2.3] Concurrently insert N words at random positions (memUsed)          |   5216016 bytes |    -71112 bytes |   -187384 bytes |   3161344 bytes |  25168416 bytes |   9424824 bytes |
|[B2.3] Concurrently insert N words at random positions (parseTime)        |          180 ms |          162 ms |          519 ms |          128 ms |          301 ms |          294 ms |
|[B2.4] Concurrently insert & delete (time)                                |          456 ms |         3125 ms |         4780 ms |          454 ms |         1568 ms |        68450 ms |
|[B2.4] Concurrently insert & delete (updateSize)                          |    139517 bytes |    398881 bytes |   2395867 bytes |    398559 bytes |   8495206 bytes |  10999960 bytes |
|[B2.4] Concurrently insert & delete (encodeTime)                          |           55 ms |            6 ms |          132 ms |           53 ms |           95 ms |          198 ms |
|[B2.4] Concurrently insert & delete (docSize)                             |    279166 bytes |    279166 bytes |    307359 bytes |    252660 bytes |  10883165 bytes |  19713932 bytes |
|[B2.4] Concurrently insert & delete (memUsed)                             |   9234040 bytes |    -11600 bytes |    -39352 bytes |   4708024 bytes |  37906736 bytes |  14147072 bytes |
|[B2.4] Concurrently insert & delete (parseTime)                           |          284 ms |          160 ms |          859 ms |          150 ms |          547 ms |          398 ms |
|[B3.4] 20√N clients concurrently insert text in Array (time)              |          116 ms |          297 ms |           43 ms |           36 ms |           38 ms |           38 ms |
|[B3.4] 20√N clients concurrently insert text in Array (updateSize)        |     52738 bytes |     52749 bytes |    277630 bytes |     77430 bytes |    229890 bytes |    282250 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (encodeTime)        |            4 ms |            1 ms |           13 ms |           34 ms |           11 ms |           11 ms |
|[B3.4] 20√N clients concurrently insert text in Array (docSize)           |     26583 bytes |     26594 bytes |     83559 bytes |     86647 bytes |    203895 bytes |    280751 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (memUsed)           |    824744 bytes |    -25752 bytes |     -3200 bytes |    892864 bytes |    156240 bytes |    491320 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (parseTime)         |          116 ms |          132 ms |          160 ms |          122 ms |          147 ms |          112 ms |
|[B4] Apply real-world editing dataset (time)                              |         6247 ms |        53616 ms |        78646 ms |         1611 ms |        13683 ms |        87641 ms |
|[B4] Apply real-world editing dataset (updateSize)                        |   7565904 bytes |   7565904 bytes |  58115146 bytes |  10224234 bytes |  37715931 bytes |  46343814 bytes |
|[B4] Apply real-world editing dataset (encodeTime)                        |           22 ms |            2 ms |          644 ms |           12 ms |          138 ms |          247 ms |
|[B4] Apply real-world editing dataset (docSize)                           |    159929 bytes |    159929 bytes |    142473 bytes |    167873 bytes |  18726204 bytes |  33750684 bytes |
|[B4] Apply real-world editing dataset (parseTime)                         |           80 ms |            8 ms |        80798 ms |           15 ms |          214 ms |          439 ms |
|[B4] Apply real-world editing dataset (memUsed)                           |   2992688 bytes |       216 bytes |   -183952 bytes |   1536200 bytes |  64192720 bytes |  23955848 bytes |
|[B4x100] Apply real-world editing dataset 100 times (time)                |       613111 ms |         skipped |         skipped |       242676 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (updateSize)          | 819905758 bytes |         skipped |         skipped | 1074335646 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (encodeTime)          |          422 ms |         skipped |         skipped |         1909 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (docSize)             |  15989245 bytes |         skipped |         skipped |  17844936 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (parseTime)           |         3488 ms |         skipped |         skipped |          847 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (memUsed)             | 343821320 bytes |         skipped |         skipped | 175581752 bytes |         skipped |         skipped |

