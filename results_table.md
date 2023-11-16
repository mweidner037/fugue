
> crdt-benchmarks@1.0.0 table
> node bin/render-table.js benchmarks/results.json 6000 yjs ywasm automerge-wasm fugue fugue-simple fugue-max-simple

sqrtN = 1540
Format: mean +/- stddev; 10 measured trials, 5 warmup trials.

N = 6000 | yjs | ywasm | automerge-wasm | fugue | fugue-simple | fugue-max-simple|
| :- |  -: | -: | -: | -: | -: | -:  |
|[B1.1] Append N characters (time)                                         |    180 +/- 9 ms |     95 +/- 1 ms |     98 +/- 1 ms |     79 +/- 3 ms |   549 +/- 33 ms |   721 +/- 16 ms |
|[B1.1] Append N characters (avgUpdateSize)                                |  27 +/- 0 bytes |  27 +/- 0 bytes | 121 +/- 0 bytes |  46 +/- 0 bytes | 170 +/- 0 bytes | 189 +/- 0 bytes |
|[B1.1] Append N characters (encodeTime)                                   |      1 +/- 0 ms |      0 +/- 0 ms |      4 +/- 0 ms |      0 +/- 0 ms |     59 +/- 1 ms |     60 +/- 2 ms |
|[B1.1] Append N characters (docSize)                                      | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 3987 +/- 0 bytes | 6127 +/- 0 bytes | 42755 +/- 3 bytes | 45119 +/- 2 bytes |
|[B1.1] Append N characters (memUsed)                                      | -113518 +/- 7828 bytes | -26397 +/- 84483 bytes | -7055 +/- 2600 bytes | -20702 +/- 15461 bytes | 2114262 +/- 5714 bytes | 2429335 +/- 98685 bytes |
|[B1.1] Append N characters (parseTime)                                    |     82 +/- 2 ms |     94 +/- 4 ms |    137 +/- 1 ms |     89 +/- 3 ms |    108 +/- 3 ms |    109 +/- 2 ms |
|[B1.2] Insert string of length N (time)                                   |      4 +/- 1 ms |      0 +/- 0 ms |     10 +/- 0 ms |      0 +/- 0 ms |   544 +/- 29 ms |   788 +/- 29 ms |
|[B1.2] Insert string of length N (avgUpdateSize)                          | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 6196 +/- 0 bytes | 6055 +/- 0 bytes | 819679 +/- 0 bytes | 933679 +/- 0 bytes |
|[B1.2] Insert string of length N (encodeTime)                             |      4 +/- 1 ms |      0 +/- 0 ms |      2 +/- 0 ms |      0 +/- 0 ms |     63 +/- 1 ms |     62 +/- 1 ms |
|[B1.2] Insert string of length N (docSize)                                | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 3969 +/- 0 bytes | 6125 +/- 0 bytes | 42769 +/- 3 bytes | 45083 +/- 2 bytes |
|[B1.2] Insert string of length N (memUsed)                                | 15474 +/- 15 bytes | 240 +/- 0 bytes | 592 +/- 0 bytes | 13104 +/- 0 bytes | 2183594 +/- 136627 bytes | 2406626 +/- 81521 bytes |
|[B1.2] Insert string of length N (parseTime)                              |     73 +/- 2 ms |     99 +/- 2 ms |     91 +/- 3 ms |     80 +/- 3 ms |    103 +/- 3 ms |    105 +/- 2 ms |
|[B1.3] Prepend N characters (time)                                        |    153 +/- 5 ms |     37 +/- 1 ms |     94 +/- 1 ms |   599 +/- 28 ms |   563 +/- 50 ms |   556 +/- 11 ms |
|[B1.3] Prepend N characters (avgUpdateSize)                               |  27 +/- 0 bytes |  27 +/- 0 bytes | 116 +/- 0 bytes |  53 +/- 0 bytes | 170 +/- 0 bytes | 170 +/- 0 bytes |
|[B1.3] Prepend N characters (encodeTime)                                  |      4 +/- 1 ms |      1 +/- 1 ms |      4 +/- 0 ms |      8 +/- 1 ms |     59 +/- 1 ms |     60 +/- 1 ms |
|[B1.3] Prepend N characters (docSize)                                     | 6041 +/- 0 bytes | 6041 +/- 0 bytes | 3983 +/- 0 bytes | 65747 +/- 0 bytes | 42711 +/- 3 bytes | 42739 +/- 3 bytes |
|[B1.3] Prepend N characters (memUsed)                                     | 1094940 +/- 138697 bytes | 288 +/- 62 bytes | -6487 +/- 2039 bytes | 1775467 +/- 100020 bytes | 2151710 +/- 90308 bytes | 2185186 +/- 81165 bytes |
|[B1.3] Prepend N characters (parseTime)                                   |    109 +/- 9 ms |    111 +/- 4 ms |    127 +/- 3 ms |     96 +/- 4 ms |    102 +/- 4 ms |    103 +/- 2 ms |
|[B1.4] Insert N characters at random positions (time)                     |    173 +/- 4 ms |    175 +/- 8 ms |    106 +/- 1 ms |    100 +/- 3 ms |    122 +/- 3 ms |    131 +/- 3 ms |
|[B1.4] Insert N characters at random positions (avgUpdateSize)            |  29 +/- 0 bytes |  29 +/- 0 bytes | 121 +/- 0 bytes |  49 +/- 0 bytes | 169 +/- 0 bytes | 196 +/- 0 bytes |
|[B1.4] Insert N characters at random positions (encodeTime)               |      9 +/- 2 ms |      2 +/- 1 ms |      6 +/- 0 ms |      6 +/- 1 ms |     61 +/- 1 ms |     66 +/- 1 ms |
|[B1.4] Insert N characters at random positions (docSize)                  | 29554 +/- 0 bytes | 29554 +/- 0 bytes | 24740 +/- 0 bytes | 35475 +/- 0 bytes | 36781 +/- 8 bytes | 48271 +/- 9 bytes |
|[B1.4] Insert N characters at random positions (memUsed)                  | 1175370 +/- 107157 bytes | -48530 +/- 123545 bytes | -6487 +/- 2039 bytes | 1000958 +/- 155697 bytes | 2148377 +/- 64406 bytes | 2271029 +/- 98586 bytes |
|[B1.4] Insert N characters at random positions (parseTime)                |   131 +/- 14 ms |   182 +/- 13 ms |    135 +/- 2 ms |     95 +/- 3 ms |    106 +/- 3 ms |    109 +/- 1 ms |
|[B1.5] Insert N words at random positions (time)                          |    210 +/- 5 ms |    517 +/- 7 ms |    181 +/- 1 ms |    111 +/- 3 ms |    284 +/- 2 ms |    331 +/- 2 ms |
|[B1.5] Insert N words at random positions (avgUpdateSize)                 |  36 +/- 0 bytes |  36 +/- 0 bytes | 131 +/- 0 bytes |  57 +/- 0 bytes | 862 +/- 0 bytes | 1137 +/- 0 bytes |
|[B1.5] Insert N words at random positions (encodeTime)                    |     13 +/- 1 ms |      5 +/- 3 ms |     19 +/- 0 ms |     10 +/- 1 ms |    147 +/- 1 ms |    184 +/- 3 ms |
|[B1.5] Insert N words at random positions (docSize)                       | 87924 +/- 0 bytes | 87924 +/- 0 bytes | 96196 +/- 0 bytes | 91174 +/- 0 bytes | 227020 +/- 119 bytes | 325050 +/- 60 bytes |
|[B1.5] Insert N words at random positions (memUsed)                       | 2619103 +/- 161058 bytes | -28626 +/- 91177 bytes | -5848 +/- 51 bytes | 1620530 +/- 104749 bytes | 12732002 +/- 4184 bytes | 13819544 +/- 110260 bytes |
|[B1.5] Insert N words at random positions (parseTime)                     |    132 +/- 9 ms |   209 +/- 16 ms |    249 +/- 3 ms |    100 +/- 3 ms |    179 +/- 2 ms |    207 +/- 3 ms |
|[B1.6] Insert string, then delete it (time)                               |      8 +/- 0 ms |      0 +/- 0 ms |     20 +/- 0 ms |     40 +/- 1 ms |   985 +/- 39 ms |  1153 +/- 39 ms |
|[B1.6] Insert string, then delete it (avgUpdateSize)                      | 6053 +/- 1 bytes | 6053 +/- 1 bytes | 6333 +/- 0 bytes | 71839 +/- 0 bytes | 1208481 +/- 0 bytes | 1322481 +/- 0 bytes |
|[B1.6] Insert string, then delete it (encodeTime)                         |      0 +/- 0 ms |      0 +/- 0 ms |      2 +/- 0 ms |      0 +/- 0 ms |     41 +/- 1 ms |     44 +/- 1 ms |
|[B1.6] Insert string, then delete it (docSize)                            |  38 +/- 1 bytes |  38 +/- 1 bytes | 3988 +/- 0 bytes | 120 +/- 0 bytes | 17777 +/- 3 bytes | 17220 +/- 2 bytes |
|[B1.6] Insert string, then delete it (memUsed)                            | 9855 +/- 2470 bytes | 240 +/- 0 bytes | 592 +/- 0 bytes | -60197 +/- 104278 bytes | 2119141 +/- 2782 bytes | 2419686 +/- 91427 bytes |
|[B1.6] Insert string, then delete it (parseTime)                          |     74 +/- 2 ms |    167 +/- 2 ms |    110 +/- 2 ms |     79 +/- 3 ms |    103 +/- 3 ms |    105 +/- 2 ms |
|[B1.7] Insert/Delete strings at random positions (time)                   |    213 +/- 5 ms |   172 +/- 13 ms |    158 +/- 1 ms |    154 +/- 5 ms |    291 +/- 4 ms |    320 +/- 1 ms |
|[B1.7] Insert/Delete strings at random positions (avgUpdateSize)          |  31 +/- 0 bytes |  31 +/- 0 bytes | 135 +/- 0 bytes |  70 +/- 0 bytes | 601 +/- 0 bytes | 737 +/- 0 bytes |
|[B1.7] Insert/Delete strings at random positions (encodeTime)             |     12 +/- 1 ms |      2 +/- 0 ms |     16 +/- 0 ms |      4 +/- 1 ms |     86 +/- 1 ms |    108 +/- 3 ms |
|[B1.7] Insert/Delete strings at random positions (docSize)                | 28377 +/- 0 bytes | 28377 +/- 0 bytes | 59277 +/- 0 bytes | 29938 +/- 0 bytes | 74710 +/- 41 bytes | 102833 +/- 62 bytes |
|[B1.7] Insert/Delete strings at random positions (memUsed)                | 1529923 +/- 199580 bytes | -68826 +/- 99402 bytes | -5848 +/- 51 bytes | 849384 +/- 119266 bytes | 6239177 +/- 4475 bytes | 6787073 +/- 88427 bytes |
|[B1.7] Insert/Delete strings at random positions (parseTime)              |    113 +/- 4 ms |   254 +/- 12 ms |    229 +/- 2 ms |     99 +/- 9 ms |    123 +/- 2 ms |    140 +/- 2 ms |
|[B1.8] Append N numbers (time)                                            |    194 +/- 9 ms |     42 +/- 1 ms |     93 +/- 1 ms |     95 +/- 1 ms |   527 +/- 28 ms |   713 +/- 21 ms |
|[B1.8] Append N numbers (avgUpdateSize)                                   |  32 +/- 0 bytes |  32 +/- 0 bytes | 125 +/- 0 bytes |  52 +/- 0 bytes | 177 +/- 0 bytes | 196 +/- 0 bytes |
|[B1.8] Append N numbers (encodeTime)                                      |      4 +/- 0 ms |      2 +/- 1 ms |      5 +/- 0 ms |      3 +/- 0 ms |     63 +/- 1 ms |     66 +/- 3 ms |
|[B1.8] Append N numbers (docSize)                                         | 35634 +/- 0 bytes | 35634 +/- 0 bytes | 26979 +/- 0 bytes | 47732 +/- 0 bytes | 74623 +/- 1 bytes | 75723 +/- 2 bytes |
|[B1.8] Append N numbers (memUsed)                                         | -35356 +/- 65765 bytes | -74557 +/- 41397 bytes | -6487 +/- 2039 bytes | 190323 +/- 102113 bytes | 2095434 +/- 3145 bytes | 2412253 +/- 87402 bytes |
|[B1.8] Append N numbers (parseTime)                                       |     84 +/- 2 ms |    213 +/- 7 ms |    133 +/- 1 ms |    102 +/- 4 ms |    117 +/- 4 ms |    119 +/- 4 ms |
|[B1.9] Insert Array of N numbers (time)                                   |      5 +/- 0 ms |     13 +/- 1 ms |     10 +/- 0 ms |     21 +/- 2 ms |   610 +/- 25 ms |   900 +/- 40 ms |
|[B1.9] Insert Array of N numbers (avgUpdateSize)                          | 35657 +/- 0 bytes | 35657 +/- 0 bytes | 31194 +/- 0 bytes | 47683 +/- 0 bytes | 858653 +/- 0 bytes | 972653 +/- 0 bytes |
|[B1.9] Insert Array of N numbers (encodeTime)                             |      3 +/- 2 ms |      2 +/- 0 ms |      3 +/- 0 ms |      6 +/- 1 ms |     73 +/- 4 ms |     68 +/- 3 ms |
|[B1.9] Insert Array of N numbers (docSize)                                | 35657 +/- 0 bytes | 35657 +/- 0 bytes | 26948 +/- 0 bytes | 47753 +/- 0 bytes | 74724 +/- 5 bytes | 75837 +/- 4 bytes |
|[B1.9] Insert Array of N numbers (memUsed)                                | 93474 +/- 50289 bytes | -73123 +/- 22607 bytes | 592 +/- 0 bytes | 24988 +/- 15816 bytes | 2115954 +/- 11673 bytes | 2405074 +/- 103058 bytes |
|[B1.9] Insert Array of N numbers (parseTime)                              |     84 +/- 9 ms |    249 +/- 5 ms |     93 +/- 2 ms |    104 +/- 4 ms |    114 +/- 2 ms |    116 +/- 2 ms |
|[B1.10] Prepend N numbers (time)                                          |    152 +/- 3 ms |    66 +/- 19 ms |     94 +/- 2 ms |   587 +/- 14 ms |    507 +/- 8 ms |   544 +/- 15 ms |
|[B1.10] Prepend N numbers (avgUpdateSize)                                 |  32 +/- 0 bytes |  32 +/- 0 bytes | 120 +/- 0 bytes |  59 +/- 0 bytes | 177 +/- 0 bytes | 177 +/- 0 bytes |
|[B1.10] Prepend N numbers (encodeTime)                                    |     10 +/- 1 ms |      2 +/- 1 ms |      5 +/- 0 ms |     11 +/- 1 ms |     71 +/- 2 ms |     65 +/- 3 ms |
|[B1.10] Prepend N numbers (docSize)                                       | 35665 +/- 0 bytes | 35665 +/- 0 bytes | 26982 +/- 0 bytes | 107371 +/- 0 bytes | 74597 +/- 3 bytes | 74622 +/- 2 bytes |
|[B1.10] Prepend N numbers (memUsed)                                       | 2284454 +/- 150076 bytes | -99686 +/- 59046 bytes | -5848 +/- 51 bytes | 2090982 +/- 134546 bytes | 2137414 +/- 87148 bytes | 2174531 +/- 80383 bytes |
|[B1.10] Prepend N numbers (parseTime)                                     |     99 +/- 6 ms |   323 +/- 23 ms |    129 +/- 2 ms |    129 +/- 6 ms |    114 +/- 2 ms |    114 +/- 2 ms |
|[B1.11] Insert N numbers at random positions (time)                       |    182 +/- 3 ms |   391 +/- 69 ms |    105 +/- 1 ms |    115 +/- 5 ms |    115 +/- 1 ms |    127 +/- 2 ms |
|[B1.11] Insert N numbers at random positions (avgUpdateSize)              |  34 +/- 0 bytes |  34 +/- 0 bytes | 125 +/- 0 bytes |  55 +/- 0 bytes | 177 +/- 0 bytes | 203 +/- 0 bytes |
|[B1.11] Insert N numbers at random positions (encodeTime)                 |     12 +/- 2 ms |      8 +/- 5 ms |      7 +/- 0 ms |      8 +/- 1 ms |     66 +/- 1 ms |     74 +/- 3 ms |
|[B1.11] Insert N numbers at random positions (docSize)                    | 59137 +/- 0 bytes | 59137 +/- 0 bytes | 47741 +/- 0 bytes | 77366 +/- 0 bytes | 68020 +/- 8 bytes | 79841 +/- 13 bytes |
|[B1.11] Insert N numbers at random positions (memUsed)                    | 2272550 +/- 164116 bytes | -50034 +/- 81740 bytes | -5848 +/- 51 bytes | 1183682 +/- 74976 bytes | 2102886 +/- 30995 bytes | 2243202 +/- 98710 bytes |
|[B1.11] Insert N numbers at random positions (parseTime)                  |    112 +/- 7 ms |   357 +/- 15 ms |    135 +/- 1 ms |    124 +/- 9 ms |    115 +/- 3 ms |    120 +/- 2 ms |
|[B2.1] Concurrently insert string of length N at index 0 (time)           |      8 +/- 0 ms |      6 +/- 8 ms |     45 +/- 0 ms |      0 +/- 0 ms |  1163 +/- 34 ms |  1632 +/- 31 ms |
|[B2.1] Concurrently insert string of length N at index 0 (updateSize)     | 6094 +/- 0 bytes | 6094 +/- 0 bytes | 9494 +/- 0 bytes | 6144 +/- 0 bytes | 826510 +/- 0 bytes | 1133409 +/- 0 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (encodeTime)     |      0 +/- 0 ms |      3 +/- 6 ms |      4 +/- 0 ms |      0 +/- 0 ms |     78 +/- 1 ms |     91 +/- 4 ms |
|[B2.1] Concurrently insert string of length N at index 0 (docSize)        | 12152 +/- 0 bytes | 12151 +/- 1 bytes | 8006 +/- 0 bytes | 12280 +/- 0 bytes | 86399 +/- 3 bytes | 91019 +/- 7 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (memUsed)        | 22249 +/- 35 bytes | 250 +/- 30 bytes | 602 +/- 30 bytes | 20138 +/- 30 bytes | 4265666 +/- 30 bytes | 4752266 +/- 115 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (parseTime)      |     76 +/- 3 ms |   293 +/- 28 ms |    111 +/- 1 ms |     81 +/- 2 ms |    114 +/- 2 ms |    125 +/- 3 ms |
|[B2.2] Concurrently insert N characters at random positions (time)        |    91 +/- 12 ms |   554 +/- 12 ms |    399 +/- 2 ms |    133 +/- 2 ms |    165 +/- 2 ms |    170 +/- 3 ms |
|[B2.2] Concurrently insert N characters at random positions (updateSize)  | 33444 +/- 0 bytes | 177007 +/- 0 bytes | 1093282 +/- 0 bytes | 104976 +/- 0 bytes | 825594 +/- 0 bytes | 982466 +/- 0 bytes |
|[B2.2] Concurrently insert N characters at random positions (encodeTime)  |      3 +/- 0 ms |      6 +/- 6 ms |     12 +/- 0 ms |     15 +/- 1 ms |     78 +/- 1 ms |     88 +/- 4 ms |
|[B2.2] Concurrently insert N characters at random positions (docSize)     | 66858 +/- 4 bytes | 66858 +/- 4 bytes | 50695 +/- 0 bytes | 72331 +/- 0 bytes | 74378 +/- 4 bytes | 97904 +/- 8 bytes |
|[B2.2] Concurrently insert N characters at random positions (memUsed)     | 2510424 +/- 139950 bytes | 316 +/- 72 bytes | -5819 +/- 40 bytes | 1821033 +/- 92052 bytes | 4265656 +/- 434 bytes | 4505566 +/- 17160 bytes |
|[B2.2] Concurrently insert N characters at random positions (parseTime)   |    125 +/- 8 ms |   357 +/- 16 ms |    199 +/- 2 ms |     97 +/- 5 ms |    114 +/- 3 ms |    124 +/- 2 ms |
|[B2.3] Concurrently insert N words at random positions (time)             |    157 +/- 9 ms | 1384 +/- 132 ms |    737 +/- 2 ms |    146 +/- 2 ms |    699 +/- 5 ms |    836 +/- 8 ms |
|[B2.3] Concurrently insert N words at random positions (updateSize)       | 88994 +/- 0 bytes | 214911 +/- 954 bytes | 1185195 +/- 0 bytes | 149820 +/- 0 bytes | 4980777 +/- 0 bytes | 6613084 +/- 0 bytes |
|[B2.3] Concurrently insert N words at random positions (encodeTime)       |      9 +/- 2 ms |      8 +/- 5 ms |     43 +/- 0 ms |     44 +/- 1 ms |    250 +/- 2 ms |    326 +/- 4 ms |
|[B2.3] Concurrently insert N words at random positions (docSize)          | 178132 +/- 3 bytes | 178109 +/- 78 bytes | 191492 +/- 0 bytes | 182574 +/- 0 bytes | 449156 +/- 111 bytes | 644856 +/- 76 bytes |
|[B2.3] Concurrently insert N words at random positions (memUsed)          | 5465355 +/- 119951 bytes | 144 +/- 83 bytes | -5810 +/- 30 bytes | 3363805 +/- 1607 bytes | 25174886 +/- 167587 bytes | 27564401 +/- 109353 bytes |
|[B2.3] Concurrently insert N words at random positions (parseTime)        |   145 +/- 13 ms |   373 +/- 10 ms |    427 +/- 2 ms |    126 +/- 2 ms |    248 +/- 4 ms |    343 +/- 3 ms |
|[B2.4] Concurrently insert & delete (time)                                |   321 +/- 26 ms |  3419 +/- 29 ms |   1417 +/- 4 ms |    351 +/- 2 ms |   1196 +/- 8 ms |  1423 +/- 10 ms |
|[B2.4] Concurrently insert & delete (updateSize)                          | 139492 +/- 52 bytes | 397372 +/- 3763 bytes | 2395867 +/- 0 bytes | 398557 +/- 0 bytes | 8495198 +/- 0 bytes | 10947346 +/- 0 bytes |
|[B2.4] Concurrently insert & delete (encodeTime)                          |     24 +/- 6 ms |      8 +/- 0 ms |     74 +/- 0 ms |     50 +/- 1 ms |    360 +/- 5 ms |   510 +/- 10 ms |
|[B2.4] Concurrently insert & delete (docSize)                             | 279121 +/- 102 bytes | 279119 +/- 156 bytes | 307286 +/- 0 bytes | 252650 +/- 0 bytes | 639847 +/- 26 bytes | 894748 +/- 42 bytes |
|[B2.4] Concurrently insert & delete (memUsed)                             | 9314593 +/- 965098 bytes | 240 +/- 0 bytes | -6449 +/- 2052 bytes | 4948110 +/- 1207 bytes | 37764551 +/- 111815 bytes | 41579099 +/- 538 bytes |
|[B2.4] Concurrently insert & delete (parseTime)                           |   236 +/- 25 ms |   375 +/- 16 ms |    760 +/- 3 ms |    137 +/- 2 ms |    323 +/- 2 ms |    426 +/- 3 ms |
|[B3.4] 20√N clients concurrently insert text in Array (memUsed)           | 878883 +/- 168930 bytes | -40376 +/- 84342 bytes | -3213 +/- 10060 bytes | 1135994 +/- 80650 bytes | 583563 +/- 72669 bytes | 668761 +/- 26415 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (time)              |    514 +/- 6 ms |    316 +/- 6 ms |     30 +/- 2 ms |     27 +/- 3 ms |     42 +/- 3 ms |     45 +/- 2 ms |
|[B3.4] 20√N clients concurrently insert text in Array (updateSize)        | 52743 +/- 9 bytes | 52739 +/- 7 bytes | 277630 +/- 0 bytes | 88210 +/- 0 bytes | 240670 +/- 0 bytes | 269930 +/- 0 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (encodeTime)        |     10 +/- 2 ms |      1 +/- 1 ms |     11 +/- 0 ms |      4 +/- 1 ms |     49 +/- 1 ms |     51 +/- 1 ms |
|[B3.4] 20√N clients concurrently insert text in Array (docSize)           | 26588 +/- 9 bytes | 26584 +/- 7 bytes | 86511 +/- 8 bytes | 82012 +/- 0 bytes | 57400 +/- 17 bytes | 57643 +/- 16 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (parseTime)         |   106 +/- 10 ms |   352 +/- 14 ms |    105 +/- 2 ms |   118 +/- 12 ms |    127 +/- 3 ms |   144 +/- 11 ms |
|[B4] Apply real-world editing dataset (time)                              |  6650 +/- 79 ms | 34962 +/- 68 ms |  4989 +/- 17 ms | 2773 +/- 149 ms | 15254 +/- 367 ms | 16611 +/- 342 ms |
|[B4] Apply real-world editing dataset (memUsed)                           | 3307606 +/- 157776 bytes | -11551 +/- 4429 bytes | 24458 +/- 17190 bytes | 2408565 +/- 14779 bytes | 64846502 +/- 16619 bytes | 71909552 +/- 7093 bytes |
|[B4] Apply real-world editing dataset (updateSize)                        | 7539926 +/- 82149 bytes | 7506202 +/- 108180 bytes | 32626661 +/- 0 bytes | 12042680 +/- 0 bytes | 39352063 +/- 0 bytes | 48962944 +/- 0 bytes |
|[B4] Apply real-world editing dataset (encodeTime)                        |     17 +/- 1 ms |      5 +/- 1 ms |    180 +/- 0 ms |     20 +/- 1 ms |    583 +/- 5 ms |   788 +/- 11 ms |
|[B4] Apply real-world editing dataset (docSize)                           | 159929 +/- 1 bytes | 159929 +/- 1 bytes | 129111 +/- 0 bytes | 167854 +/- 0 bytes | 1021001 +/- 53 bytes | 1237039 +/- 164 bytes |
|[B4] Apply real-world editing dataset (parseTime)                         |     63 +/- 6 ms |     15 +/- 0 ms |   2746 +/- 6 ms |     13 +/- 2 ms |    334 +/- 3 ms |    522 +/- 7 ms |
|[B4x100] Apply real-world editing dataset 100 times (time)                | 725423 +/- 10868 ms |         skipped |         skipped | 354625 +/- 12875 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (memUsed)             | 294159726 +/- 16829360 bytes |         skipped |         skipped | 223146340 +/- 14074 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (updateSize)          | 819131128 +/- 2449595 bytes |         skipped |         skipped | 1256180246 +/- 0 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (encodeTime)          |   479 +/- 35 ms |         skipped |         skipped |  1405 +/- 35 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (docSize)             | 15989245 +/- 0 bytes |         skipped |         skipped | 17844916 +/- 0 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (parseTime)           | 2316 +/- 423 ms |         skipped |         skipped |    640 +/- 8 ms |         skipped |         skipped |

