
> crdt-benchmarks@1.0.0 table
> node bin/render-table.js benchmarks/results.json 6000 yjs ywasm automerge-wasm tree-fugue tree-fugue-simple list-fugue-simple

N = 6000 | yjs | ywasm | automerge-wasm | tree-fugue | tree-fugue-simple | list-fugue-simple|
| :- |  -: | -: | -: | -: | -: | -:  |
|[B1.1] Append N characters (time)                                         |          190 ms |          236 ms |          234 ms |          120 ms |          867 ms |          156 ms |
|[B1.1] Append N characters (avgUpdateSize)                                |        27 bytes |        27 bytes |       121 bytes |        39 bytes |       164 bytes |       197 bytes |
|[B1.1] Append N characters (encodeTime)                                   |            1 ms |            0 ms |            9 ms |            1 ms |           97 ms |            7 ms |
|[B1.1] Append N characters (docSize)                                      |      6031 bytes |      6031 bytes |      3990 bytes |      6145 bytes |     42774 bytes |   1005836 bytes |
|[B1.1] Append N characters (memUsed)                                      |             0 B |             0 B |             0 B |             0 B |          2.1 MB |        655.3 kB |
|[B1.1] Append N characters (parseTime)                                    |           60 ms |           68 ms |          133 ms |           68 ms |          116 ms |           85 ms |
|[B1.2] Insert string of length N (time)                                   |            1 ms |            0 ms |           20 ms |            2 ms |          694 ms |           70 ms |
|[B1.2] Insert string of length N (avgUpdateSize)                          |      6031 bytes |      6031 bytes |      6196 bytes |      6049 bytes |    819682 bytes |   1017682 bytes |
|[B1.2] Insert string of length N (encodeTime)                             |            1 ms |            0 ms |            2 ms |            0 ms |           72 ms |           11 ms |
|[B1.2] Insert string of length N (docSize)                                |      6031 bytes |      6031 bytes |      3972 bytes |      6143 bytes |     42785 bytes |   1005834 bytes |
|[B1.2] Insert string of length N (memUsed)                                |         17.7 kB |           304 B |             0 B |          9.5 kB |          2.1 MB |        496.1 kB |
|[B1.2] Insert string of length N (parseTime)                              |           61 ms |           61 ms |           78 ms |           64 ms |          109 ms |           93 ms |
|[B1.3] Prepend N characters (time)                                        |          143 ms |           25 ms |           79 ms |          442 ms |          634 ms |          122 ms |
|[B1.3] Prepend N characters (avgUpdateSize)                               |        27 bytes |        27 bytes |       116 bytes |        46 bytes |       164 bytes |       197 bytes |
|[B1.3] Prepend N characters (encodeTime)                                  |            4 ms |            0 ms |           10 ms |            9 ms |           66 ms |            6 ms |
|[B1.3] Prepend N characters (docSize)                                     |      6041 bytes |      6041 bytes |      3986 bytes |     65766 bytes |     42730 bytes |   1005836 bytes |
|[B1.3] Prepend N characters (memUsed)                                     |        961.8 kB |             0 B |             0 B |          1.6 MB |            2 MB |          662 kB |
|[B1.3] Prepend N characters (parseTime)                                   |           73 ms |           63 ms |          167 ms |           81 ms |          109 ms |           89 ms |
|[B1.4] Insert N characters at random positions (time)                     |          157 ms |          127 ms |          436 ms |           93 ms |          108 ms |          195 ms |
|[B1.4] Insert N characters at random positions (avgUpdateSize)            |        29 bytes |        29 bytes |       121 bytes |        42 bytes |       163 bytes |       209 bytes |
|[B1.4] Insert N characters at random positions (encodeTime)               |           11 ms |            0 ms |           11 ms |            5 ms |           76 ms |            7 ms |
|[B1.4] Insert N characters at random positions (docSize)                  |     29554 bytes |     29554 bytes |     24743 bytes |     35494 bytes |     36804 bytes |   1078069 bytes |
|[B1.4] Insert N characters at random positions (memUsed)                  |        742.1 kB |             0 B |             0 B |        694.2 kB |          2.2 MB |        663.7 kB |
|[B1.4] Insert N characters at random positions (parseTime)                |           93 ms |           65 ms |          170 ms |           75 ms |          118 ms |           86 ms |
|[B1.5] Insert N words at random positions (time)                          |          181 ms |          425 ms |          676 ms |           88 ms |          336 ms |         2053 ms |
|[B1.5] Insert N words at random positions (avgUpdateSize)                 |        36 bytes |        36 bytes |       131 bytes |        50 bytes |       864 bytes |      1143 bytes |
|[B1.5] Insert N words at random positions (encodeTime)                    |           14 ms |            1 ms |           28 ms |           11 ms |          178 ms |           39 ms |
|[B1.5] Insert N words at random positions (docSize)                       |     87924 bytes |     87924 bytes |     96199 bytes |     91193 bytes |    226996 bytes |   6604366 bytes |
|[B1.5] Insert N words at random positions (memUsed)                       |          2.6 MB |             0 B |             0 B |          1.2 MB |         12.3 MB |          4.7 MB |
|[B1.5] Insert N words at random positions (parseTime)                     |          113 ms |           71 ms |          275 ms |           89 ms |          244 ms |          140 ms |
|[B1.6] Insert string, then delete it (time)                               |            2 ms |            1 ms |           35 ms |           49 ms |         1025 ms |          148 ms |
|[B1.6] Insert string, then delete it (avgUpdateSize)                      |      6053 bytes |      6053 bytes |      6333 bytes |     71836 bytes |   1208487 bytes |   1406487 bytes |
|[B1.6] Insert string, then delete it (encodeTime)                         |            0 ms |            0 ms |            4 ms |            2 ms |           48 ms |            6 ms |
|[B1.6] Insert string, then delete it (docSize)                            |        38 bytes |        38 bytes |      3991 bytes |       137 bytes |     17792 bytes |   1005834 bytes |
|[B1.6] Insert string, then delete it (memUsed)                            |             0 B |           664 B |           440 B |             0 B |            2 MB |        722.1 kB |
|[B1.6] Insert string, then delete it (parseTime)                          |           58 ms |           66 ms |          145 ms |           71 ms |          123 ms |           90 ms |
|[B1.7] Insert/Delete strings at random positions (time)                   |          188 ms |          130 ms |          575 ms |          143 ms |          331 ms |          959 ms |
|[B1.7] Insert/Delete strings at random positions (avgUpdateSize)          |        31 bytes |        31 bytes |       135 bytes |        67 bytes |       603 bytes |       740 bytes |
|[B1.7] Insert/Delete strings at random positions (encodeTime)             |           14 ms |            1 ms |           23 ms |            3 ms |          107 ms |           23 ms |
|[B1.7] Insert/Delete strings at random positions (docSize)                |     28377 bytes |     28377 bytes |     59280 bytes |     29957 bytes |     74710 bytes |   3228806 bytes |
|[B1.7] Insert/Delete strings at random positions (memUsed)                |        727.9 kB |             0 B |             0 B |        454.6 kB |          6.1 MB |          2.2 MB |
|[B1.7] Insert/Delete strings at random positions (parseTime)              |           90 ms |           70 ms |          237 ms |           78 ms |          149 ms |          102 ms |
|[B1.8] Append N numbers (time)                                            |          174 ms |           34 ms |          268 ms |           99 ms |          864 ms |           89 ms |
|[B1.8] Append N numbers (avgUpdateSize)                                   |        32 bytes |        32 bytes |       125 bytes |        45 bytes |       171 bytes |       204 bytes |
|[B1.8] Append N numbers (encodeTime)                                      |            4 ms |            0 ms |           13 ms |            5 ms |           76 ms |           15 ms |
|[B1.8] Append N numbers (docSize)                                         |     35634 bytes |     35634 bytes |     26982 bytes |     47751 bytes |     74644 bytes |   1044655 bytes |
|[B1.8] Append N numbers (memUsed)                                         |             0 B |        453.4 kB |             0 B |        143.6 kB |          2.2 MB |        670.6 kB |
|[B1.8] Append N numbers (parseTime)                                       |           65 ms |           70 ms |          168 ms |           84 ms |          125 ms |           92 ms |
|[B1.9] Insert Array of N numbers (time)                                   |            6 ms |            4 ms |           25 ms |           28 ms |          660 ms |           50 ms |
|[B1.9] Insert Array of N numbers (avgUpdateSize)                          |     35657 bytes |     35657 bytes |     31194 bytes |     47678 bytes |    858656 bytes |   1056656 bytes |
|[B1.9] Insert Array of N numbers (encodeTime)                             |            1 ms |            0 ms |            4 ms |            8 ms |           87 ms |            8 ms |
|[B1.9] Insert Array of N numbers (docSize)                                |     35657 bytes |     35657 bytes |     26951 bytes |     47772 bytes |     74742 bytes |   1044807 bytes |
|[B1.9] Insert Array of N numbers (memUsed)                                |             0 B |           496 B |           640 B |        262.1 kB |          2.1 MB |        584.1 kB |
|[B1.9] Insert Array of N numbers (parseTime)                              |           60 ms |           69 ms |          125 ms |           80 ms |          121 ms |           85 ms |
|[B1.10] Prepend N numbers (time)                                          |          145 ms |           29 ms |          405 ms |          436 ms |          501 ms |           83 ms |
|[B1.10] Prepend N numbers (avgUpdateSize)                                 |        32 bytes |        32 bytes |       120 bytes |        52 bytes |       171 bytes |       204 bytes |
|[B1.10] Prepend N numbers (encodeTime)                                    |            8 ms |            0 ms |           12 ms |           15 ms |           80 ms |            7 ms |
|[B1.10] Prepend N numbers (docSize)                                       |     35665 bytes |     35665 bytes |     26985 bytes |    107390 bytes |     74613 bytes |   1044722 bytes |
|[B1.10] Prepend N numbers (memUsed)                                       |          1.7 MB |             0 B |             0 B |          2.2 MB |          1.8 MB |          471 kB |
|[B1.10] Prepend N numbers (parseTime)                                     |           78 ms |           71 ms |          163 ms |          103 ms |          118 ms |           87 ms |
|[B1.11] Insert N numbers at random positions (time)                       |          163 ms |          145 ms |          448 ms |           92 ms |           98 ms |          159 ms |
|[B1.11] Insert N numbers at random positions (avgUpdateSize)              |        34 bytes |        34 bytes |       125 bytes |        48 bytes |       171 bytes |       216 bytes |
|[B1.11] Insert N numbers at random positions (encodeTime)                 |            8 ms |            1 ms |           12 ms |            5 ms |           80 ms |            6 ms |
|[B1.11] Insert N numbers at random positions (docSize)                    |     59137 bytes |     59137 bytes |     47744 bytes |     77385 bytes |     68041 bytes |   1116861 bytes |
|[B1.11] Insert N numbers at random positions (memUsed)                    |          1.7 MB |             0 B |             0 B |             0 B |            2 MB |        673.1 kB |
|[B1.11] Insert N numbers at random positions (parseTime)                  |           84 ms |           73 ms |          161 ms |           99 ms |          119 ms |           77 ms |
|[B2.1] Concurrently insert string of length N at index 0 (time)           |            3 ms |            0 ms |           86 ms |            4 ms |         1577 ms |          302 ms |
|[B2.1] Concurrently insert string of length N at index 0 (updateSize)     |      6094 bytes |      6094 bytes |      9494 bytes |      6136 bytes |    826516 bytes |   1092156 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (encodeTime)     |            0 ms |            0 ms |            4 ms |            1 ms |           90 ms |           15 ms |
|[B2.1] Concurrently insert string of length N at index 0 (docSize)        |     12152 bytes |     12151 bytes |      8009 bytes |     12289 bytes |     86415 bytes |   2160409 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (memUsed)        |             0 B |           240 B |             0 B |             0 B |          4.2 MB |          1.5 MB |
|[B2.1] Concurrently insert string of length N at index 0 (parseTime)      |           64 ms |           73 ms |          150 ms |           70 ms |          124 ms |           90 ms |
|[B2.2] Concurrently insert N characters at random positions (time)        |           94 ms |          354 ms |         1237 ms |          129 ms |          191 ms |          640 ms |
|[B2.2] Concurrently insert N characters at random positions (updateSize)  |     33444 bytes |    177007 bytes |   1093282 bytes |    104977 bytes |    825600 bytes |   1099004 bytes |
|[B2.2] Concurrently insert N characters at random positions (encodeTime)  |            2 ms |            1 ms |           23 ms |           12 ms |           97 ms |           11 ms |
|[B2.2] Concurrently insert N characters at random positions (docSize)     |     66860 bytes |     66860 bytes |     50699 bytes |     72341 bytes |     74451 bytes |   2174106 bytes |
|[B2.2] Concurrently insert N characters at random positions (memUsed)     |          2.4 MB |             0 B |             0 B |          1.6 MB |          4.2 MB |          1.5 MB |
|[B2.2] Concurrently insert N characters at random positions (parseTime)   |          121 ms |           77 ms |          234 ms |           84 ms |          136 ms |           95 ms |
|[B2.3] Concurrently insert N words at random positions (time)             |          170 ms |          968 ms |         2133 ms |          163 ms |          910 ms |        14898 ms |
|[B2.3] Concurrently insert N words at random positions (updateSize)       |     88994 bytes |    215213 bytes |   1185195 bytes |    149822 bytes |   4980784 bytes |   6638148 bytes |
|[B2.3] Concurrently insert N words at random positions (encodeTime)       |            4 ms |            3 ms |           61 ms |           24 ms |          281 ms |           97 ms |
|[B2.3] Concurrently insert N words at random positions (docSize)          |    178137 bytes |    178137 bytes |    191494 bytes |    182584 bytes |    449181 bytes |  13094218 bytes |
|[B2.3] Concurrently insert N words at random positions (memUsed)          |          5.2 MB |             0 B |             0 B |          3.2 MB |         25.2 MB |          9.4 MB |
|[B2.3] Concurrently insert N words at random positions (parseTime)        |          143 ms |          122 ms |          450 ms |          115 ms |          333 ms |          303 ms |
|[B2.4] Concurrently insert & delete (time)                                |          334 ms |         2604 ms |         4306 ms |          393 ms |         1497 ms |        62469 ms |
|[B2.4] Concurrently insert & delete (updateSize)                          |    139517 bytes |    392795 bytes |   2395867 bytes |    398559 bytes |   8495206 bytes |  10999960 bytes |
|[B2.4] Concurrently insert & delete (encodeTime)                          |           37 ms |            5 ms |          121 ms |           47 ms |          470 ms |          196 ms |
|[B2.4] Concurrently insert & delete (docSize)                             |    279172 bytes |    278927 bytes |    307360 bytes |    252660 bytes |    639895 bytes |  19713932 bytes |
|[B2.4] Concurrently insert & delete (memUsed)                             |          9.2 MB |             0 B |             0 B |          4.7 MB |         37.8 MB |         14.1 MB |
|[B2.4] Concurrently insert & delete (parseTime)                           |          211 ms |          136 ms |          848 ms |          129 ms |          657 ms |          404 ms |
|[B3.4] 20√N clients concurrently insert text in Array (time)              |           86 ms |          253 ms |           44 ms |           29 ms |           38 ms |           37 ms |
|[B3.4] 20√N clients concurrently insert text in Array (updateSize)        |     52748 bytes |     52736 bytes |    277630 bytes |     77430 bytes |    229890 bytes |    282250 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (encodeTime)        |            3 ms |            1 ms |           14 ms |           27 ms |           73 ms |           11 ms |
|[B3.4] 20√N clients concurrently insert text in Array (docSize)           |     26593 bytes |     26581 bytes |     83578 bytes |     86647 bytes |     62017 bytes |    280751 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (memUsed)           |        850.2 kB |             0 B |             0 B |        659.9 kB |         63.3 kB |          275 kB |
|[B3.4] 20√N clients concurrently insert text in Array (parseTime)         |           86 ms |          112 ms |          165 ms |          102 ms |          154 ms |          113 ms |
|[B4] Apply real-world editing dataset (time)                              |         4804 ms |        52988 ms |        86220 ms |         1534 ms |        14270 ms |        84651 ms |
|[B4] Apply real-world editing dataset (updateSize)                        |   7565904 bytes |   7565904 bytes |  58115146 bytes |  10224234 bytes |  37715931 bytes |  46343814 bytes |
|[B4] Apply real-world editing dataset (encodeTime)                        |           23 ms |            3 ms |          675 ms |           11 ms |          577 ms |          286 ms |
|[B4] Apply real-world editing dataset (docSize)                           |    159929 bytes |    159929 bytes |    142473 bytes |    167873 bytes |   1020960 bytes |  33750684 bytes |
|[B4] Apply real-world editing dataset (parseTime)                         |           63 ms |            9 ms |        82025 ms |           13 ms |          413 ms |          429 ms |
|[B4] Apply real-world editing dataset (memUsed)                           |          2.5 MB |            32 B |             0 B |          1.6 MB |         64.1 MB |           24 MB |
|[B4x100] Apply real-world editing dataset 100 times (time)                |       619680 ms |         skipped |         skipped |       238592 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (updateSize)          | 819905758 bytes |         skipped |         skipped | 1074335646 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (encodeTime)          |          400 ms |         skipped |         skipped |         1523 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (docSize)             |  15989245 bytes |         skipped |         skipped |  17844936 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (parseTime)           |         3237 ms |         skipped |         skipped |          689 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (memUsed)             |        343.6 MB |         skipped |         skipped |        175.8 MB |         skipped |         skipped |

