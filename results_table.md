
> crdt-benchmarks@1.0.0 table
> node bin/render-table.js benchmarks/results.json 6000 yjs ywasm automerge-wasm tree-fugue tree-fugue-simple list-fugue-simple

sqrtN = 1540
Format: mean +/- stddev; 10 measured trials, 5 warmup trials.

N = 6000 | yjs | ywasm | automerge-wasm | tree-fugue | tree-fugue-simple | list-fugue-simple|
| :- |  -: | -: | -: | -: | -: | -:  |
|[B1.1] Append N characters (time)                                         |    164 +/- 4 ms |    163 +/- 2 ms |     76 +/- 3 ms |     92 +/- 1 ms |   644 +/- 11 ms |     94 +/- 2 ms |
|[B1.1] Append N characters (avgUpdateSize)                                |  27 +/- 0 bytes |  27 +/- 0 bytes | 121 +/- 0 bytes |  39 +/- 0 bytes | 164 +/- 0 bytes | 197 +/- 0 bytes |
|[B1.1] Append N characters (encodeTime)                                   |      1 +/- 0 ms |      0 +/- 0 ms |      9 +/- 1 ms |      0 +/- 0 ms |      5 +/- 0 ms |      7 +/- 0 ms |
|[B1.1] Append N characters (docSize)                                      | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 3990 +/- 0 bytes | 6145 +/- 0 bytes | 615998 +/- 0 bytes | 1005836 +/- 0 bytes |
|[B1.1] Append N characters (memUsed)                                      | -318870 +/- 72990 bytes | -41270 +/- 18107 bytes | -38450 +/- 9685 bytes | -163124 +/- 23598 bytes | 2027911 +/- 67756 bytes | 669937 +/- 7806 bytes |
|[B1.1] Append N characters (parseTime)                                    |     62 +/- 1 ms |     79 +/- 4 ms |    108 +/- 5 ms |     97 +/- 4 ms |   168 +/- 26 ms |   128 +/- 13 ms |
|[B1.2] Insert string of length N (time)                                   |      1 +/- 1 ms |      0 +/- 0 ms |     16 +/- 1 ms |      0 +/- 0 ms |    620 +/- 8 ms |     47 +/- 1 ms |
|[B1.2] Insert string of length N (avgUpdateSize)                          | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 6196 +/- 0 bytes | 6049 +/- 0 bytes | 819682 +/- 0 bytes | 1017682 +/- 0 bytes |
|[B1.2] Insert string of length N (encodeTime)                             |      1 +/- 1 ms |      0 +/- 0 ms |      2 +/- 0 ms |      0 +/- 0 ms |      5 +/- 0 ms |      7 +/- 1 ms |
|[B1.2] Insert string of length N (docSize)                                | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 3972 +/- 0 bytes | 6143 +/- 0 bytes | 615996 +/- 0 bytes | 1005834 +/- 0 bytes |
|[B1.2] Insert string of length N (memUsed)                                | 7446 +/- 105804 bytes | 240 +/- 0 bytes | 520 +/- 43 bytes | 9274 +/- 155 bytes | 1960916 +/- 147746 bytes | 609223 +/- 96110 bytes |
|[B1.2] Insert string of length N (parseTime)                              |     60 +/- 1 ms |     94 +/- 1 ms |     68 +/- 0 ms |     76 +/- 0 ms |   149 +/- 21 ms |    111 +/- 8 ms |
|[B1.3] Prepend N characters (time)                                        |    148 +/- 4 ms |     30 +/- 1 ms |     56 +/- 2 ms |    496 +/- 5 ms |    475 +/- 8 ms |     94 +/- 2 ms |
|[B1.3] Prepend N characters (avgUpdateSize)                               |  27 +/- 0 bytes |  27 +/- 0 bytes | 116 +/- 0 bytes |  46 +/- 0 bytes | 164 +/- 0 bytes | 197 +/- 0 bytes |
|[B1.3] Prepend N characters (encodeTime)                                  |      5 +/- 1 ms |      0 +/- 0 ms |      8 +/- 0 ms |     11 +/- 1 ms |      4 +/- 0 ms |      6 +/- 0 ms |
|[B1.3] Prepend N characters (docSize)                                     | 6041 +/- 0 bytes | 6041 +/- 0 bytes | 3986 +/- 0 bytes | 65766 +/- 0 bytes | 615998 +/- 0 bytes | 1005836 +/- 0 bytes |
|[B1.3] Prepend N characters (memUsed)                                     | 783320 +/- 251472 bytes | -45074 +/- 18641 bytes | -33432 +/- 15128 bytes | 1437885 +/- 97010 bytes | 2006342 +/- 6528 bytes | 662690 +/- 8325 bytes |
|[B1.3] Prepend N characters (parseTime)                                   |     81 +/- 4 ms |    112 +/- 4 ms |    100 +/- 2 ms |   161 +/- 23 ms |   164 +/- 27 ms |   129 +/- 13 ms |
|[B1.4] Insert N characters at random positions (time)                     |    168 +/- 2 ms |   166 +/- 14 ms |     64 +/- 1 ms |    103 +/- 2 ms |    103 +/- 2 ms |    186 +/- 2 ms |
|[B1.4] Insert N characters at random positions (avgUpdateSize)            |  29 +/- 0 bytes |  29 +/- 0 bytes | 121 +/- 0 bytes |  42 +/- 0 bytes | 163 +/- 0 bytes | 209 +/- 0 bytes |
|[B1.4] Insert N characters at random positions (encodeTime)               |     12 +/- 1 ms |      3 +/- 1 ms |      9 +/- 0 ms |      8 +/- 1 ms |      5 +/- 0 ms |      7 +/- 0 ms |
|[B1.4] Insert N characters at random positions (docSize)                  | 29554 +/- 0 bytes | 29554 +/- 0 bytes | 24743 +/- 0 bytes | 35494 +/- 0 bytes | 599394 +/- 0 bytes | 1078069 +/- 0 bytes |
|[B1.4] Insert N characters at random positions (memUsed)                  | 765917 +/- 91021 bytes | -32495 +/- 15106 bytes | -45892 +/- 13918 bytes | 642165 +/- 117990 bytes | 2002867 +/- 10280 bytes | 663631 +/- 8602 bytes |
|[B1.4] Insert N characters at random positions (parseTime)                |     94 +/- 5 ms |   228 +/- 29 ms |    108 +/- 2 ms |   146 +/- 16 ms |   183 +/- 29 ms |   127 +/- 13 ms |
|[B1.5] Insert N words at random positions (time)                          |    198 +/- 9 ms |    558 +/- 9 ms |    165 +/- 5 ms |    111 +/- 2 ms |    327 +/- 4 ms | 2410 +/- 108 ms |
|[B1.5] Insert N words at random positions (avgUpdateSize)                 |  36 +/- 0 bytes |  36 +/- 0 bytes | 131 +/- 0 bytes |  50 +/- 0 bytes | 864 +/- 0 bytes | 1143 +/- 0 bytes |
|[B1.5] Insert N words at random positions (encodeTime)                    |     14 +/- 2 ms |      3 +/- 1 ms |     27 +/- 1 ms |     13 +/- 1 ms |     26 +/- 1 ms |     40 +/- 1 ms |
|[B1.5] Insert N words at random positions (docSize)                       | 87924 +/- 0 bytes | 87924 +/- 0 bytes | 96199 +/- 0 bytes | 91193 +/- 0 bytes | 3656379 +/- 0 bytes | 6604366 +/- 0 bytes |
|[B1.5] Insert N words at random positions (memUsed)                       | 2185402 +/- 198772 bytes | -22877 +/- 24286 bytes | -45234 +/- 14522 bytes | 1470514 +/- 32270 bytes | 12627963 +/- 4122 bytes | 4640210 +/- 4492 bytes |
|[B1.5] Insert N words at random positions (parseTime)                     |    115 +/- 5 ms |   321 +/- 10 ms |    219 +/- 5 ms |   193 +/- 26 ms |  648 +/- 141 ms |   326 +/- 55 ms |
|[B1.6] Insert string, then delete it (time)                               |      2 +/- 2 ms |      0 +/- 0 ms |     24 +/- 0 ms |     49 +/- 4 ms |   1003 +/- 9 ms |    145 +/- 1 ms |
|[B1.6] Insert string, then delete it (avgUpdateSize)                      | 6053 +/- 0 bytes | 6053 +/- 0 bytes | 6333 +/- 0 bytes | 71836 +/- 0 bytes | 1208487 +/- 0 bytes | 1406487 +/- 0 bytes |
|[B1.6] Insert string, then delete it (encodeTime)                         |      0 +/- 0 ms |      0 +/- 0 ms |      3 +/- 0 ms |      1 +/- 1 ms |      4 +/- 0 ms |      6 +/- 0 ms |
|[B1.6] Insert string, then delete it (docSize)                            |  38 +/- 0 bytes |  38 +/- 0 bytes | 3991 +/- 0 bytes | 137 +/- 0 bytes | 599100 +/- 0 bytes | 1005834 +/- 0 bytes |
|[B1.6] Insert string, then delete it (memUsed)                            | 25970 +/- 187447 bytes | 240 +/- 0 bytes | 1567 +/- 3312 bytes | -84752 +/- 27533 bytes | 2046982 +/- 5019 bytes | 709713 +/- 4528 bytes |
|[B1.6] Insert string, then delete it (parseTime)                          |     67 +/- 1 ms |    174 +/- 2 ms |     88 +/- 0 ms |     81 +/- 1 ms |   151 +/- 22 ms |    109 +/- 8 ms |
|[B1.7] Insert/Delete strings at random positions (time)                   |    290 +/- 4 ms |    194 +/- 6 ms |    118 +/- 0 ms |    168 +/- 3 ms |    324 +/- 4 ms |  1073 +/- 24 ms |
|[B1.7] Insert/Delete strings at random positions (avgUpdateSize)          |  31 +/- 0 bytes |  31 +/- 0 bytes | 135 +/- 0 bytes |  67 +/- 0 bytes | 603 +/- 0 bytes | 740 +/- 0 bytes |
|[B1.7] Insert/Delete strings at random positions (encodeTime)             |     21 +/- 2 ms |      4 +/- 1 ms |     22 +/- 0 ms |      6 +/- 1 ms |     12 +/- 0 ms |     18 +/- 0 ms |
|[B1.7] Insert/Delete strings at random positions (docSize)                | 28377 +/- 1 bytes | 28377 +/- 0 bytes | 59280 +/- 0 bytes | 29957 +/- 0 bytes | 1784311 +/- 0 bytes | 3228806 +/- 0 bytes |
|[B1.7] Insert/Delete strings at random positions (memUsed)                | 976550 +/- 105045 bytes | -36127 +/- 11672 bytes | -44888 +/- 10060 bytes | 559857 +/- 98475 bytes | 6137890 +/- 23746 bytes | 2196978 +/- 5931 bytes |
|[B1.7] Insert/Delete strings at random positions (parseTime)              |    132 +/- 3 ms |   336 +/- 13 ms |    192 +/- 1 ms |   140 +/- 16 ms |   352 +/- 71 ms |   204 +/- 31 ms |
|[B1.8] Append N numbers (time)                                            |    236 +/- 3 ms |     34 +/- 1 ms |     73 +/- 1 ms |    104 +/- 3 ms |    668 +/- 7 ms |     92 +/- 1 ms |
|[B1.8] Append N numbers (avgUpdateSize)                                   |  32 +/- 0 bytes |  32 +/- 0 bytes | 125 +/- 0 bytes |  45 +/- 0 bytes | 171 +/- 0 bytes | 204 +/- 0 bytes |
|[B1.8] Append N numbers (encodeTime)                                      |      5 +/- 2 ms |      3 +/- 0 ms |     10 +/- 0 ms |      4 +/- 0 ms |      4 +/- 0 ms |      7 +/- 0 ms |
|[B1.8] Append N numbers (docSize)                                         | 35634 +/- 0 bytes | 35634 +/- 0 bytes | 26982 +/- 0 bytes | 47751 +/- 0 bytes | 654817 +/- 0 bytes | 1044655 +/- 0 bytes |
|[B1.8] Append N numbers (memUsed)                                         | -266024 +/- 131236 bytes | -37526 +/- 28115 bytes | -45295 +/- 14303 bytes | -107294 +/- 90506 bytes | 2013174 +/- 7695 bytes | 666414 +/- 2504 bytes |
|[B1.8] Append N numbers (parseTime)                                       |     83 +/- 1 ms |    316 +/- 9 ms |    112 +/- 1 ms |    117 +/- 5 ms |   169 +/- 26 ms |   130 +/- 12 ms |
|[B1.9] Insert Array of N numbers (time)                                   |      5 +/- 3 ms |     10 +/- 0 ms |     17 +/- 0 ms |     32 +/- 1 ms |    639 +/- 5 ms |     48 +/- 0 ms |
|[B1.9] Insert Array of N numbers (avgUpdateSize)                          | 35657 +/- 0 bytes | 35657 +/- 0 bytes | 31194 +/- 0 bytes | 47678 +/- 0 bytes | 858656 +/- 0 bytes | 1056656 +/- 0 bytes |
|[B1.9] Insert Array of N numbers (encodeTime)                             |      3 +/- 2 ms |      2 +/- 0 ms |      3 +/- 0 ms |      9 +/- 1 ms |      5 +/- 1 ms |      7 +/- 0 ms |
|[B1.9] Insert Array of N numbers (docSize)                                | 35657 +/- 0 bytes | 35657 +/- 0 bytes | 26951 +/- 0 bytes | 47772 +/- 0 bytes | 654969 +/- 0 bytes | 1044807 +/- 0 bytes |
|[B1.9] Insert Array of N numbers (memUsed)                                | 83396 +/- 91574 bytes | 304 +/- 0 bytes | 520 +/- 0 bytes | 44802 +/- 96568 bytes | 1981934 +/- 91368 bytes | 603710 +/- 127170 bytes |
|[B1.9] Insert Array of N numbers (parseTime)                              |     81 +/- 2 ms |    324 +/- 2 ms |     74 +/- 0 ms |     94 +/- 1 ms |   150 +/- 22 ms |    111 +/- 9 ms |
|[B1.10] Prepend N numbers (time)                                          |    198 +/- 4 ms |     50 +/- 2 ms |     61 +/- 0 ms |   504 +/- 10 ms |    480 +/- 6 ms |     92 +/- 2 ms |
|[B1.10] Prepend N numbers (avgUpdateSize)                                 |  32 +/- 0 bytes |  32 +/- 0 bytes | 120 +/- 0 bytes |  52 +/- 0 bytes | 171 +/- 0 bytes | 204 +/- 0 bytes |
|[B1.10] Prepend N numbers (encodeTime)                                    |     14 +/- 3 ms |      3 +/- 0 ms |      9 +/- 0 ms |     11 +/- 4 ms |      4 +/- 0 ms |      7 +/- 0 ms |
|[B1.10] Prepend N numbers (docSize)                                       | 35665 +/- 0 bytes | 35665 +/- 0 bytes | 26985 +/- 0 bytes | 107390 +/- 0 bytes | 654884 +/- 0 bytes | 1044722 +/- 0 bytes |
|[B1.10] Prepend N numbers (memUsed)                                       | 1920767 +/- 70289 bytes | -49093 +/- 16018 bytes | -45236 +/- 15378 bytes | 1886122 +/- 165797 bytes | 2012733 +/- 4411 bytes | 669010 +/- 4112 bytes |
|[B1.10] Prepend N numbers (parseTime)                                     |    103 +/- 4 ms |   459 +/- 10 ms |    106 +/- 0 ms |   196 +/- 28 ms |   165 +/- 27 ms |   130 +/- 12 ms |
|[B1.11] Insert N numbers at random positions (time)                       |    232 +/- 6 ms |    230 +/- 2 ms |     67 +/- 1 ms |    118 +/- 7 ms |     99 +/- 2 ms |    180 +/- 2 ms |
|[B1.11] Insert N numbers at random positions (avgUpdateSize)              |  34 +/- 0 bytes |  34 +/- 0 bytes | 125 +/- 0 bytes |  48 +/- 0 bytes | 171 +/- 0 bytes | 216 +/- 0 bytes |
|[B1.11] Insert N numbers at random positions (encodeTime)                 |     17 +/- 3 ms |      5 +/- 2 ms |     11 +/- 0 ms |     10 +/- 4 ms |      5 +/- 0 ms |      7 +/- 0 ms |
|[B1.11] Insert N numbers at random positions (docSize)                    | 59137 +/- 0 bytes | 59137 +/- 0 bytes | 47744 +/- 0 bytes | 77385 +/- 0 bytes | 638196 +/- 0 bytes | 1116861 +/- 0 bytes |
|[B1.11] Insert N numbers at random positions (memUsed)                    | 1901860 +/- 81276 bytes | -50421 +/- 15633 bytes | -45204 +/- 15714 bytes | 919078 +/- 136774 bytes | 2005972 +/- 2718 bytes | 670187 +/- 3311 bytes |
|[B1.11] Insert N numbers at random positions (parseTime)                  |    122 +/- 5 ms |    462 +/- 9 ms |    113 +/- 0 ms |   186 +/- 21 ms |   183 +/- 28 ms |   126 +/- 12 ms |
|[B2.1] Concurrently insert string of length N at index 0 (time)           |      3 +/- 3 ms |      1 +/- 4 ms |     62 +/- 0 ms |      0 +/- 0 ms |  1497 +/- 15 ms |   337 +/- 26 ms |
|[B2.1] Concurrently insert string of length N at index 0 (updateSize)     | 6094 +/- 0 bytes | 6094 +/- 0 bytes | 9494 +/- 0 bytes | 6136 +/- 0 bytes | 826516 +/- 0 bytes | 1092156 +/- 0 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (encodeTime)     |      0 +/- 0 ms |      4 +/- 6 ms |      3 +/- 0 ms |      0 +/- 0 ms |      8 +/- 1 ms |     13 +/- 1 ms |
|[B2.1] Concurrently insert string of length N at index 0 (docSize)        | 12151 +/- 0 bytes | 12151 +/- 1 bytes | 8009 +/- 0 bytes | 12289 +/- 0 bytes | 1241904 +/- 0 bytes | 2160409 +/- 0 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (memUsed)        | 147543 +/- 182448 bytes | 234 +/- 46 bytes | 530 +/- 30 bytes | 59974 +/- 138070 bytes | 4195367 +/- 2894 bytes | 1494390 +/- 3023 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (parseTime)      |     72 +/- 1 ms |   329 +/- 66 ms |     91 +/- 1 ms |     77 +/- 0 ms |   236 +/- 46 ms |   148 +/- 17 ms |
|[B2.2] Concurrently insert N characters at random positions (time)        |   121 +/- 17 ms |    588 +/- 7 ms |    300 +/- 1 ms |    165 +/- 4 ms |    198 +/- 2 ms |   760 +/- 16 ms |
|[B2.2] Concurrently insert N characters at random positions (updateSize)  | 33444 +/- 0 bytes | 176692 +/- 998 bytes | 1093282 +/- 0 bytes | 104977 +/- 0 bytes | 825600 +/- 0 bytes | 1099004 +/- 0 bytes |
|[B2.2] Concurrently insert N characters at random positions (encodeTime)  |      3 +/- 1 ms |      3 +/- 1 ms |     22 +/- 0 ms |     17 +/- 1 ms |     10 +/- 0 ms |     12 +/- 1 ms |
|[B2.2] Concurrently insert N characters at random positions (docSize)     | 66856 +/- 4 bytes | 66792 +/- 200 bytes | 50699 +/- 0 bytes | 72341 +/- 0 bytes | 1208756 +/- 0 bytes | 2174106 +/- 0 bytes |
|[B2.2] Concurrently insert N characters at random positions (memUsed)     | 2377332 +/- 122614 bytes | -46980 +/- 23478 bytes | -30836 +/- 1594 bytes | 1596482 +/- 5176 bytes | 4194978 +/- 2925 bytes | 1494070 +/- 2851 bytes |
|[B2.2] Concurrently insert N characters at random positions (parseTime)   |   139 +/- 11 ms |    521 +/- 6 ms |    178 +/- 1 ms |   183 +/- 23 ms |   251 +/- 47 ms |   142 +/- 15 ms |
|[B2.3] Concurrently insert N words at random positions (time)             |   205 +/- 13 ms |   1478 +/- 6 ms |    682 +/- 2 ms |    182 +/- 5 ms |   926 +/- 11 ms | 17469 +/- 2936 ms |
|[B2.3] Concurrently insert N words at random positions (updateSize)       | 88994 +/- 0 bytes | 214907 +/- 968 bytes | 1185195 +/- 0 bytes | 149822 +/- 0 bytes | 4980784 +/- 0 bytes | 6638148 +/- 0 bytes |
|[B2.3] Concurrently insert N words at random positions (encodeTime)       |      7 +/- 1 ms |      6 +/- 1 ms |     60 +/- 1 ms |     67 +/- 1 ms |     52 +/- 1 ms |   127 +/- 43 ms |
|[B2.3] Concurrently insert N words at random positions (docSize)          | 178131 +/- 3 bytes | 178109 +/- 75 bytes | 191495 +/- 1 bytes | 182584 +/- 0 bytes | 7248094 +/- 0 bytes | 13094218 +/- 0 bytes |
|[B2.3] Concurrently insert N words at random positions (memUsed)          | 5180718 +/- 13140 bytes | -54514 +/- 10659 bytes | -30487 +/- 1368 bytes | 3171623 +/- 3217 bytes | 25184599 +/- 401 bytes | 9425443 +/- 17 bytes |
|[B2.3] Concurrently insert N words at random positions (parseTime)        |   168 +/- 13 ms |    468 +/- 2 ms |    386 +/- 2 ms |   269 +/- 42 ms | 1154 +/- 270 ms |  723 +/- 117 ms |
|[B2.4] Concurrently insert & delete (time)                                |   346 +/- 27 ms |  3829 +/- 70 ms |   1275 +/- 5 ms |    495 +/- 7 ms |  1589 +/- 20 ms | 81418 +/- 15643 ms |
|[B2.4] Concurrently insert & delete (updateSize)                          | 139505 +/- 39 bytes | 397970 +/- 2051 bytes | 2395867 +/- 0 bytes | 398559 +/- 0 bytes | 8495206 +/- 0 bytes | 10999960 +/- 0 bytes |
|[B2.4] Concurrently insert & delete (encodeTime)                          |     20 +/- 2 ms |     14 +/- 5 ms |    110 +/- 1 ms |     71 +/- 1 ms |     94 +/- 3 ms |   153 +/- 17 ms |
|[B2.4] Concurrently insert & delete (docSize)                             | 279144 +/- 78 bytes | 279146 +/- 77 bytes | 307359 +/- 1 bytes | 252660 +/- 0 bytes | 10883165 +/- 0 bytes | 19713932 +/- 0 bytes |
|[B2.4] Concurrently insert & delete (memUsed)                             | 9226858 +/- 323865 bytes | -26739 +/- 27999 bytes | -32971 +/- 5298 bytes | 4711663 +/- 4036 bytes | 37907054 +/- 212 bytes | 14145465 +/- 50 bytes |
|[B2.4] Concurrently insert & delete (parseTime)                           |   254 +/- 23 ms |   538 +/- 48 ms |    698 +/- 2 ms |   353 +/- 64 ms | 2511 +/- 622 ms | 1174 +/- 276 ms |
|[B3.4] 20√N clients concurrently insert text in Array (time)              |    102 +/- 7 ms |   372 +/- 12 ms |     40 +/- 5 ms |     35 +/- 3 ms |     33 +/- 3 ms |     38 +/- 3 ms |
|[B3.4] 20√N clients concurrently insert text in Array (updateSize)        | 52743 +/- 6 bytes | 52742 +/- 9 bytes | 277630 +/- 0 bytes | 77430 +/- 0 bytes | 229890 +/- 0 bytes | 282250 +/- 0 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (encodeTime)        |      3 +/- 1 ms |      1 +/- 0 ms |     12 +/- 1 ms |     14 +/- 3 ms |     11 +/- 0 ms |     11 +/- 1 ms |
|[B3.4] 20√N clients concurrently insert text in Array (docSize)           | 26588 +/- 6 bytes | 26587 +/- 9 bytes | 83561 +/- 11 bytes | 86647 +/- 0 bytes | 203895 +/- 0 bytes | 280751 +/- 0 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (memUsed)           | 731457 +/- 126680 bytes | -331158 +/- 194431 bytes | -16570 +/- 29463 bytes | 881647 +/- 115986 bytes | 263300 +/- 177274 bytes | 444835 +/- 125512 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (parseTime)         |    102 +/- 7 ms |    444 +/- 8 ms |    100 +/- 8 ms |   345 +/- 70 ms |   326 +/- 65 ms |   311 +/- 64 ms |
|[B4] Apply real-world editing dataset (time)                              |  5668 +/- 72 ms | 54074 +/- 635 ms | 4531 +/- 170 ms |  1802 +/- 56 ms | 13094 +/- 147 ms | 90524 +/- 2494 ms |
|[B4] Apply real-world editing dataset (updateSize)                        | 7565904 +/- 0 bytes | 7524434 +/- 83192 bytes | 58115146 +/- 0 bytes | 10224234 +/- 0 bytes | 37715931 +/- 0 bytes | 46343814 +/- 0 bytes |
|[B4] Apply real-world editing dataset (encodeTime)                        |     22 +/- 1 ms |      4 +/- 3 ms |   544 +/- 30 ms |     14 +/- 1 ms |    142 +/- 2 ms |    229 +/- 1 ms |
|[B4] Apply real-world editing dataset (docSize)                           | 159929 +/- 0 bytes | 159929 +/- 1 bytes | 142473 +/- 0 bytes | 167873 +/- 0 bytes | 18726204 +/- 0 bytes | 33750684 +/- 0 bytes |
|[B4] Apply real-world editing dataset (parseTime)                         |     78 +/- 4 ms |     23 +/- 1 ms |  3270 +/- 76 ms |     16 +/- 1 ms |    287 +/- 7 ms |    330 +/- 5 ms |
|[B4] Apply real-world editing dataset (memUsed)                           | 3008719 +/- 200042 bytes | -7874 +/- 10649 bytes | -28516 +/- 4470 bytes | 1579968 +/- 10020 bytes | 64179988 +/- 101 bytes | 23941705 +/- 3735 bytes |
|[B4x100] Apply real-world editing dataset 100 times (time)                | 581447 +/- 8546 ms |         skipped |         skipped | 200836 +/- 6758 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (updateSize)          | 819905758 +/- 0 bytes |         skipped |         skipped | 1074335646 +/- 0 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (encodeTime)          |   378 +/- 35 ms |         skipped |         skipped | 1336 +/- 152 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (docSize)             | 15989245 +/- 0 bytes |         skipped |         skipped | 17844936 +/- 0 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (parseTime)           | 2337 +/- 608 ms |         skipped |         skipped |   677 +/- 33 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (memUsed)             | 283162421 +/- 41608583 bytes |         skipped |         skipped | 175699612 +/- 130208 bytes |         skipped |         skipped |

