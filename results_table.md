
> crdt-benchmarks@1.0.0 table
> node bin/render-table.js benchmarks/results.json 6000 yjs ywasm automerge-wasm tree-fugue tree-fugue-simple list-fugue-simple

sqrtN = 1540
Format: mean +/- stddev; 10 measured trials, 5 warmup trials.

N = 6000 | yjs | ywasm | automerge-wasm | tree-fugue | tree-fugue-simple | list-fugue-simple|
| :- |  -: | -: | -: | -: | -: | -:  |
|[B1.1] Append N characters (time)                                         |    162 +/- 4 ms |    172 +/- 1 ms |     95 +/- 1 ms |     86 +/- 1 ms |    494 +/- 4 ms |     90 +/- 2 ms |
|[B1.1] Append N characters (avgUpdateSize)                                |  27 +/- 0 bytes |  27 +/- 0 bytes | 121 +/- 0 bytes |  39 +/- 0 bytes | 164 +/- 0 bytes | 197 +/- 0 bytes |
|[B1.1] Append N characters (encodeTime)                                   |      1 +/- 0 ms |      0 +/- 0 ms |     10 +/- 1 ms |      0 +/- 0 ms |      5 +/- 1 ms |      7 +/- 0 ms |
|[B1.1] Append N characters (docSize)                                      | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 3990 +/- 0 bytes | 6145 +/- 0 bytes | 615998 +/- 0 bytes | 1005836 +/- 0 bytes |
|[B1.1] Append N characters (memUsed)                                      | -388710 +/- 339732 bytes | 239616 +/- 108202 bytes | 4915 +/- 7428 bytes | 18022 +/- 107475 bytes | 274432 +/- 144325 bytes | 466534 +/- 278055 bytes |
|[B1.1] Append N characters (parseTime)                                    |    178 +/- 2 ms |   238 +/- 14 ms |    256 +/- 3 ms |   277 +/- 15 ms |   499 +/- 77 ms |   365 +/- 40 ms |
|[B1.2] Insert string of length N (time)                                   |      1 +/- 1 ms |      0 +/- 0 ms |     20 +/- 0 ms |      0 +/- 0 ms |    468 +/- 5 ms |     45 +/- 1 ms |
|[B1.2] Insert string of length N (avgUpdateSize)                          | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 6196 +/- 0 bytes | 6049 +/- 0 bytes | 819682 +/- 0 bytes | 1017682 +/- 0 bytes |
|[B1.2] Insert string of length N (encodeTime)                             |      1 +/- 0 ms |      0 +/- 0 ms |      2 +/- 0 ms |      0 +/- 0 ms |      5 +/- 0 ms |      7 +/- 0 ms |
|[B1.2] Insert string of length N (docSize)                                | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 3972 +/- 0 bytes | 6143 +/- 0 bytes | 615996 +/- 0 bytes | 1005834 +/- 0 bytes |
|[B1.2] Insert string of length N (memUsed)                                | 819 +/- 1727 bytes | 7782 +/- 11167 bytes | 410 +/- 1295 bytes | 15155 +/- 3886 bytes | 408371 +/- 169335 bytes | 222413 +/- 161860 bytes |
|[B1.2] Insert string of length N (parseTime)                              |    195 +/- 5 ms |    279 +/- 1 ms |    219 +/- 1 ms |    218 +/- 3 ms |   441 +/- 66 ms |   312 +/- 26 ms |
|[B1.3] Prepend N characters (time)                                        |    153 +/- 5 ms |     30 +/- 1 ms |     73 +/- 1 ms |    486 +/- 8 ms |    468 +/- 6 ms |     89 +/- 1 ms |
|[B1.3] Prepend N characters (avgUpdateSize)                               |  27 +/- 0 bytes |  27 +/- 0 bytes | 116 +/- 0 bytes |  46 +/- 0 bytes | 164 +/- 0 bytes | 197 +/- 0 bytes |
|[B1.3] Prepend N characters (encodeTime)                                  |      5 +/- 1 ms |      0 +/- 0 ms |     10 +/- 0 ms |     10 +/- 1 ms |      4 +/- 0 ms |      6 +/- 0 ms |
|[B1.3] Prepend N characters (docSize)                                     | 6041 +/- 0 bytes | 6041 +/- 0 bytes | 3986 +/- 0 bytes | 65766 +/- 0 bytes | 615998 +/- 0 bytes | 1005836 +/- 0 bytes |
|[B1.3] Prepend N characters (memUsed)                                     | 2458 +/- 305097 bytes | 1183744 +/- 116142 bytes | 12288 +/- 14578 bytes | 303104 +/- 197280 bytes | 279757 +/- 102155 bytes | 419021 +/- 163693 bytes |
|[B1.3] Prepend N characters (parseTime)                                   |    213 +/- 8 ms |   328 +/- 16 ms |    253 +/- 2 ms |   478 +/- 73 ms |   496 +/- 83 ms |   370 +/- 39 ms |
|[B1.4] Insert N characters at random positions (time)                     |    171 +/- 6 ms |   165 +/- 13 ms |     82 +/- 0 ms |     97 +/- 2 ms |     97 +/- 2 ms |    180 +/- 2 ms |
|[B1.4] Insert N characters at random positions (avgUpdateSize)            |  29 +/- 0 bytes |  29 +/- 0 bytes | 121 +/- 0 bytes |  42 +/- 0 bytes | 163 +/- 0 bytes | 209 +/- 0 bytes |
|[B1.4] Insert N characters at random positions (encodeTime)               |     12 +/- 1 ms |      3 +/- 1 ms |     11 +/- 0 ms |      7 +/- 2 ms |      5 +/- 0 ms |      7 +/- 0 ms |
|[B1.4] Insert N characters at random positions (docSize)                  | 29554 +/- 0 bytes | 29554 +/- 0 bytes | 24743 +/- 0 bytes | 35494 +/- 0 bytes | 599394 +/- 0 bytes | 1078069 +/- 0 bytes |
|[B1.4] Insert N characters at random positions (memUsed)                  | 87245 +/- 325603 bytes | 1019494 +/- 109473 bytes | 3686 +/- 7081 bytes | 149914 +/- 81628 bytes | 175718 +/- 146904 bytes | 375603 +/- 144726 bytes |
|[B1.4] Insert N characters at random positions (parseTime)                |   233 +/- 18 ms |   500 +/- 40 ms |    263 +/- 3 ms |   413 +/- 48 ms |   532 +/- 86 ms |   364 +/- 39 ms |
|[B1.5] Insert N words at random positions (time)                          |    247 +/- 6 ms |    553 +/- 8 ms |    191 +/- 1 ms |    105 +/- 2 ms |    313 +/- 5 ms |  2352 +/- 77 ms |
|[B1.5] Insert N words at random positions (avgUpdateSize)                 |  36 +/- 0 bytes |  36 +/- 0 bytes | 131 +/- 0 bytes |  50 +/- 0 bytes | 864 +/- 0 bytes | 1143 +/- 0 bytes |
|[B1.5] Insert N words at random positions (encodeTime)                    |     17 +/- 2 ms |      3 +/- 1 ms |     31 +/- 0 ms |     13 +/- 1 ms |     28 +/- 1 ms |     40 +/- 2 ms |
|[B1.5] Insert N words at random positions (docSize)                       | 87924 +/- 0 bytes | 87924 +/- 0 bytes | 96199 +/- 0 bytes | 91193 +/- 0 bytes | 3656379 +/- 0 bytes | 6604366 +/- 0 bytes |
|[B1.5] Insert N words at random positions (memUsed)                       | 577946 +/- 867917 bytes | 1751040 +/- 104432 bytes |   0 +/- 0 bytes | 377651 +/- 161119 bytes | 13555302 +/- 524356 bytes | 652083 +/- 68479 bytes |
|[B1.5] Insert N words at random positions (parseTime)                     |    301 +/- 4 ms |   647 +/- 23 ms |    380 +/- 2 ms |   535 +/- 78 ms | 1831 +/- 432 ms |  890 +/- 175 ms |
|[B1.6] Insert string, then delete it (time)                               |      3 +/- 3 ms |      0 +/- 0 ms |     28 +/- 0 ms |     48 +/- 3 ms |    823 +/- 7 ms |    140 +/- 3 ms |
|[B1.6] Insert string, then delete it (avgUpdateSize)                      | 6052 +/- 1 bytes | 6053 +/- 0 bytes | 6333 +/- 0 bytes | 71836 +/- 0 bytes | 1208487 +/- 0 bytes | 1406487 +/- 0 bytes |
|[B1.6] Insert string, then delete it (encodeTime)                         |      0 +/- 0 ms |      0 +/- 0 ms |      3 +/- 0 ms |      2 +/- 1 ms |      4 +/- 0 ms |      6 +/- 0 ms |
|[B1.6] Insert string, then delete it (docSize)                            |  37 +/- 1 bytes |  38 +/- 0 bytes | 3991 +/- 0 bytes | 137 +/- 0 bytes | 599100 +/- 0 bytes | 1005834 +/- 0 bytes |
|[B1.6] Insert string, then delete it (memUsed)                            | 819 +/- 1727 bytes | 2048 +/- 2159 bytes | 30720 +/- 68926 bytes | -15974 +/- 117140 bytes | 285082 +/- 127133 bytes | 255181 +/- 117737 bytes |
|[B1.6] Insert string, then delete it (parseTime)                          |    211 +/- 3 ms |    518 +/- 3 ms |    233 +/- 1 ms |    230 +/- 2 ms |   450 +/- 67 ms |   311 +/- 24 ms |
|[B1.7] Insert/Delete strings at random positions (time)                   |    267 +/- 3 ms |    189 +/- 7 ms |    139 +/- 1 ms |    156 +/- 2 ms |    310 +/- 2 ms |  1052 +/- 35 ms |
|[B1.7] Insert/Delete strings at random positions (avgUpdateSize)          |  31 +/- 0 bytes |  31 +/- 0 bytes | 135 +/- 0 bytes |  67 +/- 0 bytes | 603 +/- 0 bytes | 740 +/- 0 bytes |
|[B1.7] Insert/Delete strings at random positions (encodeTime)             |     19 +/- 1 ms |      4 +/- 1 ms |     25 +/- 0 ms |      6 +/- 1 ms |     12 +/- 1 ms |     18 +/- 0 ms |
|[B1.7] Insert/Delete strings at random positions (docSize)                | 28377 +/- 0 bytes | 28377 +/- 0 bytes | 59280 +/- 0 bytes | 29957 +/- 0 bytes | 1784311 +/- 0 bytes | 3228806 +/- 0 bytes |
|[B1.7] Insert/Delete strings at random positions (memUsed)                | -218317 +/- 592983 bytes | 889242 +/- 24534 bytes |   0 +/- 0 bytes | 206848 +/- 143668 bytes | 444006 +/- 126839 bytes | 443187 +/- 43980 bytes |
|[B1.7] Insert/Delete strings at random positions (parseTime)              |    285 +/- 4 ms |   717 +/- 24 ms |    354 +/- 3 ms |   405 +/- 48 ms | 1016 +/- 219 ms |   571 +/- 95 ms |
|[B1.8] Append N numbers (time)                                            |    199 +/- 8 ms |     34 +/- 2 ms |     89 +/- 2 ms |     95 +/- 2 ms |   502 +/- 10 ms |     87 +/- 1 ms |
|[B1.8] Append N numbers (avgUpdateSize)                                   |  32 +/- 0 bytes |  32 +/- 0 bytes | 125 +/- 0 bytes |  45 +/- 0 bytes | 171 +/- 0 bytes | 204 +/- 0 bytes |
|[B1.8] Append N numbers (encodeTime)                                      |      5 +/- 0 ms |      3 +/- 0 ms |     11 +/- 0 ms |      4 +/- 1 ms |      4 +/- 0 ms |      7 +/- 1 ms |
|[B1.8] Append N numbers (docSize)                                         | 35634 +/- 0 bytes | 35634 +/- 0 bytes | 26982 +/- 0 bytes | 47751 +/- 0 bytes | 654817 +/- 0 bytes | 1044655 +/- 0 bytes |
|[B1.8] Append N numbers (memUsed)                                         | -324813 +/- 295941 bytes | 127795 +/- 40355 bytes | 11469 +/- 24255 bytes | 77824 +/- 70152 bytes | 219136 +/- 92425 bytes | 432538 +/- 216802 bytes |
|[B1.8] Append N numbers (parseTime)                                       |    206 +/- 9 ms |   752 +/- 18 ms |    260 +/- 2 ms |   307 +/- 16 ms |   502 +/- 80 ms |   367 +/- 38 ms |
|[B1.9] Insert Array of N numbers (time)                                   |      6 +/- 1 ms |     10 +/- 1 ms |     19 +/- 0 ms |     29 +/- 1 ms |    471 +/- 4 ms |     45 +/- 1 ms |
|[B1.9] Insert Array of N numbers (avgUpdateSize)                          | 35657 +/- 0 bytes | 35657 +/- 0 bytes | 31194 +/- 0 bytes | 47678 +/- 0 bytes | 858656 +/- 0 bytes | 1056656 +/- 0 bytes |
|[B1.9] Insert Array of N numbers (encodeTime)                             |      2 +/- 1 ms |      2 +/- 0 ms |      3 +/- 0 ms |      8 +/- 0 ms |      5 +/- 0 ms |      7 +/- 0 ms |
|[B1.9] Insert Array of N numbers (docSize)                                | 35657 +/- 0 bytes | 35657 +/- 0 bytes | 26951 +/- 0 bytes | 47772 +/- 0 bytes | 654969 +/- 0 bytes | 1044807 +/- 0 bytes |
|[B1.9] Insert Array of N numbers (memUsed)                                | 819 +/- 1727 bytes | 82739 +/- 90993 bytes |   0 +/- 0 bytes | 47923 +/- 63691 bytes | 367002 +/- 131373 bytes | 195789 +/- 116779 bytes |
|[B1.9] Insert Array of N numbers (parseTime)                              |    206 +/- 9 ms |    775 +/- 5 ms |    218 +/- 1 ms |    242 +/- 2 ms |   443 +/- 66 ms |   313 +/- 24 ms |
|[B1.10] Prepend N numbers (time)                                          |    186 +/- 6 ms |     48 +/- 2 ms |     75 +/- 1 ms |    496 +/- 9 ms |    475 +/- 6 ms |     87 +/- 2 ms |
|[B1.10] Prepend N numbers (avgUpdateSize)                                 |  32 +/- 0 bytes |  32 +/- 0 bytes | 120 +/- 0 bytes |  52 +/- 0 bytes | 171 +/- 0 bytes | 204 +/- 0 bytes |
|[B1.10] Prepend N numbers (encodeTime)                                    |     12 +/- 1 ms |      3 +/- 0 ms |     11 +/- 0 ms |     14 +/- 0 ms |      4 +/- 0 ms |      7 +/- 1 ms |
|[B1.10] Prepend N numbers (docSize)                                       | 35665 +/- 0 bytes | 35665 +/- 0 bytes | 26985 +/- 0 bytes | 107390 +/- 0 bytes | 654884 +/- 0 bytes | 1044722 +/- 0 bytes |
|[B1.10] Prepend N numbers (memUsed)                                       | -525517 +/- 536488 bytes | 1134592 +/- 70285 bytes | 6554 +/- 12089 bytes | 496435 +/- 217056 bytes | 224461 +/- 104442 bytes | 514048 +/- 120896 bytes |
|[B1.10] Prepend N numbers (parseTime)                                     |   256 +/- 10 ms |   948 +/- 22 ms |    255 +/- 3 ms |   562 +/- 89 ms |   496 +/- 81 ms |   366 +/- 37 ms |
|[B1.11] Insert N numbers at random positions (time)                       |   201 +/- 11 ms |    220 +/- 2 ms |     82 +/- 1 ms |    111 +/- 3 ms |     94 +/- 2 ms |    175 +/- 2 ms |
|[B1.11] Insert N numbers at random positions (avgUpdateSize)              |  34 +/- 0 bytes |  34 +/- 0 bytes | 125 +/- 0 bytes |  48 +/- 0 bytes | 171 +/- 0 bytes | 216 +/- 0 bytes |
|[B1.11] Insert N numbers at random positions (encodeTime)                 |     13 +/- 1 ms |      5 +/- 1 ms |     12 +/- 0 ms |     12 +/- 1 ms |      5 +/- 0 ms |      7 +/- 0 ms |
|[B1.11] Insert N numbers at random positions (docSize)                    | 59137 +/- 0 bytes | 59137 +/- 0 bytes | 47744 +/- 0 bytes | 77385 +/- 0 bytes | 638196 +/- 0 bytes | 1116861 +/- 0 bytes |
|[B1.11] Insert N numbers at random positions (memUsed)                    | 321946 +/- 347472 bytes | 1112883 +/- 91794 bytes | 6144 +/- 9703 bytes | 375194 +/- 106517 bytes | 249856 +/- 116142 bytes | 380109 +/- 186305 bytes |
|[B1.11] Insert N numbers at random positions (parseTime)                  |   255 +/- 15 ms |  1005 +/- 22 ms |    265 +/- 4 ms |   505 +/- 66 ms |   532 +/- 85 ms |   363 +/- 39 ms |
|[B2.1] Concurrently insert string of length N at index 0 (time)           |      5 +/- 3 ms |      1 +/- 4 ms |     72 +/- 0 ms |      0 +/- 0 ms |  1137 +/- 13 ms |   328 +/- 12 ms |
|[B2.1] Concurrently insert string of length N at index 0 (updateSize)     | 6094 +/- 0 bytes | 6094 +/- 0 bytes | 9494 +/- 0 bytes | 6136 +/- 0 bytes | 826516 +/- 0 bytes | 1092156 +/- 0 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (encodeTime)     |      0 +/- 0 ms |      4 +/- 6 ms |      4 +/- 0 ms |      0 +/- 0 ms |      8 +/- 0 ms |     13 +/- 1 ms |
|[B2.1] Concurrently insert string of length N at index 0 (docSize)        | 12151 +/- 1 bytes | 12151 +/- 0 bytes | 8009 +/- 0 bytes | 12289 +/- 0 bytes | 1241904 +/- 0 bytes | 2160409 +/- 0 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (memUsed)        | 819 +/- 2591 bytes | 16794 +/- 17953 bytes | 3686 +/- 11657 bytes | 21299 +/- 5393 bytes | 282624 +/- 114737 bytes | 391987 +/- 156972 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (parseTime)      |    202 +/- 9 ms |   884 +/- 65 ms |    236 +/- 1 ms |    220 +/- 1 ms |  696 +/- 134 ms |   413 +/- 52 ms |
|[B2.2] Concurrently insert N characters at random positions (time)        |   125 +/- 12 ms |    585 +/- 6 ms |    345 +/- 3 ms |    156 +/- 3 ms |    194 +/- 3 ms |   744 +/- 28 ms |
|[B2.2] Concurrently insert N characters at random positions (updateSize)  | 33444 +/- 0 bytes | 177007 +/- 0 bytes | 1093282 +/- 0 bytes | 104977 +/- 0 bytes | 825600 +/- 0 bytes | 1099004 +/- 0 bytes |
|[B2.2] Concurrently insert N characters at random positions (encodeTime)  |      3 +/- 1 ms |      3 +/- 0 ms |     24 +/- 0 ms |     16 +/- 1 ms |      9 +/- 0 ms |     12 +/- 1 ms |
|[B2.2] Concurrently insert N characters at random positions (docSize)     | 66857 +/- 4 bytes | 66855 +/- 4 bytes | 50699 +/- 0 bytes | 72341 +/- 0 bytes | 1208756 +/- 0 bytes | 2174106 +/- 0 bytes |
|[B2.2] Concurrently insert N characters at random positions (memUsed)     | 1682637 +/- 225803 bytes | 2047181 +/- 63243 bytes |   0 +/- 0 bytes | 363725 +/- 149998 bytes | 312934 +/- 78199 bytes | 413286 +/- 184794 bytes |
|[B2.2] Concurrently insert N characters at random positions (parseTime)   |   293 +/- 12 ms |   1079 +/- 3 ms |    328 +/- 2 ms |   505 +/- 72 ms |  733 +/- 139 ms |   404 +/- 53 ms |
|[B2.3] Concurrently insert N words at random positions (time)             |   204 +/- 13 ms |  1460 +/- 14 ms |   782 +/- 11 ms |    173 +/- 3 ms |   906 +/- 13 ms | 16085 +/- 2268 ms |
|[B2.3] Concurrently insert N words at random positions (updateSize)       | 88994 +/- 0 bytes | 214911 +/- 954 bytes | 1185195 +/- 0 bytes | 149822 +/- 0 bytes | 4980784 +/- 0 bytes | 6638148 +/- 0 bytes |
|[B2.3] Concurrently insert N words at random positions (encodeTime)       |      7 +/- 0 ms |      6 +/- 1 ms |     67 +/- 2 ms |     65 +/- 1 ms |     52 +/- 1 ms |   121 +/- 44 ms |
|[B2.3] Concurrently insert N words at random positions (docSize)          | 178134 +/- 4 bytes | 178108 +/- 77 bytes | 191496 +/- 1 bytes | 182584 +/- 0 bytes | 7248094 +/- 0 bytes | 13094218 +/- 0 bytes |
|[B2.3] Concurrently insert N words at random positions (memUsed)          | 2927002 +/- 1495796 bytes | 3487744 +/- 39299 bytes | 9830 +/- 21081 bytes | 342426 +/- 149941 bytes | 1814528 +/- 3662839 bytes | 1322189 +/- 294645 bytes |
|[B2.3] Concurrently insert N words at random positions (parseTime)        |   335 +/- 11 ms |   1029 +/- 5 ms |    569 +/- 7 ms |  730 +/- 131 ms | 3282 +/- 823 ms | 1572 +/- 323 ms |
|[B2.4] Concurrently insert & delete (time)                                |   372 +/- 46 ms |  3788 +/- 27 ms |   1443 +/- 5 ms |    471 +/- 4 ms |  1547 +/- 17 ms | 55644 +/- 964 ms |
|[B2.4] Concurrently insert & delete (updateSize)                          | 139517 +/- 0 bytes | 398121 +/- 1931 bytes | 2395867 +/- 0 bytes | 398559 +/- 0 bytes | 8495206 +/- 0 bytes | 10999960 +/- 0 bytes |
|[B2.4] Concurrently insert & delete (encodeTime)                          |     22 +/- 6 ms |     10 +/- 4 ms |    121 +/- 1 ms |     69 +/- 1 ms |     92 +/- 3 ms |   146 +/- 18 ms |
|[B2.4] Concurrently insert & delete (docSize)                             | 279168 +/- 3 bytes | 279143 +/- 76 bytes | 307359 +/- 1 bytes | 252660 +/- 0 bytes | 10883165 +/- 0 bytes | 19713932 +/- 0 bytes |
|[B2.4] Concurrently insert & delete (memUsed)                             | 7612006 +/- 2748499 bytes | 5332582 +/- 40569 bytes | 3686 +/- 7831 bytes | 400179 +/- 115013 bytes | 2141389 +/- 3077221 bytes | 10010624 +/- 2964181 bytes |
|[B2.4] Concurrently insert & delete (parseTime)                           |   440 +/- 28 ms |  1054 +/- 32 ms |    910 +/- 4 ms |  969 +/- 193 ms | 5626 +/- 1458 ms | 2430 +/- 564 ms |
|[B3.4] 20√N clients concurrently insert text in Array (memUsed)           | 83012 +/- 146203 bytes | 350618 +/- 106820 bytes | 54613 +/- 67494 bytes | 211900 +/- 187756 bytes | 192512 +/- 223137 bytes | 209442 +/- 142529 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (time)              |    105 +/- 2 ms |   364 +/- 11 ms |     40 +/- 2 ms |     34 +/- 3 ms |     32 +/- 2 ms |     35 +/- 3 ms |
|[B3.4] 20√N clients concurrently insert text in Array (updateSize)        | 52744 +/- 4 bytes | 52741 +/- 6 bytes | 277630 +/- 0 bytes | 77430 +/- 0 bytes | 229890 +/- 0 bytes | 282250 +/- 0 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (encodeTime)        |      3 +/- 0 ms |      1 +/- 0 ms |     13 +/- 1 ms |     15 +/- 0 ms |     10 +/- 0 ms |     10 +/- 0 ms |
|[B3.4] 20√N clients concurrently insert text in Array (docSize)           | 26589 +/- 4 bytes | 26586 +/- 6 bytes | 83563 +/- 11 bytes | 86647 +/- 0 bytes | 203895 +/- 0 bytes | 280751 +/- 0 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (parseTime)         |    283 +/- 4 ms |  1047 +/- 21 ms |    236 +/- 2 ms |  985 +/- 206 ms |  935 +/- 198 ms |  896 +/- 190 ms |
|[B4] Apply real-world editing dataset (time)                              |  5568 +/- 75 ms | 53496 +/- 499 ms |  4708 +/- 18 ms |  1633 +/- 20 ms | 14410 +/- 470 ms | 74913 +/- 582 ms |
|[B4] Apply real-world editing dataset (memUsed)                           | 5716787 +/- 966550 bytes | 451379 +/- 3929912 bytes |   0 +/- 0 bytes | 2408448 +/- 173671 bytes | 42867917 +/- 28925956 bytes | 24081203 +/- 131976 bytes |
|[B4] Apply real-world editing dataset (updateSize)                        | 7539926 +/- 82149 bytes | 7565904 +/- 0 bytes | 58115146 +/- 0 bytes | 10224234 +/- 0 bytes | 37715931 +/- 0 bytes | 46343814 +/- 0 bytes |
|[B4] Apply real-world editing dataset (encodeTime)                        |     21 +/- 1 ms |      2 +/- 0 ms |    556 +/- 2 ms |     20 +/- 1 ms |    142 +/- 7 ms |    304 +/- 2 ms |
|[B4] Apply real-world editing dataset (docSize)                           | 159929 +/- 1 bytes | 159929 +/- 0 bytes | 142473 +/- 0 bytes | 167873 +/- 0 bytes | 18726204 +/- 0 bytes | 33750684 +/- 0 bytes |
|[B4] Apply real-world editing dataset (parseTime)                         |     76 +/- 7 ms |     13 +/- 1 ms |  3514 +/- 32 ms |     13 +/- 1 ms |   358 +/- 17 ms |    388 +/- 4 ms |
|[B4x100] Apply real-world editing dataset 100 times (time)                | 591028 +/- 10282 ms |         skipped |         skipped | 204576 +/- 7005 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (updateSize)          | 819131128 +/- 2449595 bytes |         skipped |         skipped | 1074335646 +/- 0 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (encodeTime)          |  435 +/- 200 ms |         skipped |         skipped | 1267 +/- 218 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (docSize)             | 15989245 +/- 0 bytes |         skipped |         skipped | 17844936 +/- 0 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (parseTime)           | 2213 +/- 531 ms |         skipped |         skipped |    684 +/- 5 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (memUsed)             | 394850304 +/- 74413133 bytes |         skipped |         skipped | 129311539 +/- 18316875 bytes |         skipped |         skipped |

