
> crdt-benchmarks@1.0.0 table
> node bin/render-table.js benchmarks/results.json 6000 yjs ywasm automerge-wasm tree-fugue tree-fugue-simple list-fugue-simple

sqrtN = 1540
Format: mean +/- stddev; 10 measured trials, 5 warmup trials.

N = 6000 | yjs | ywasm | automerge-wasm | tree-fugue | tree-fugue-simple | list-fugue-simple|
| :- |  -: | -: | -: | -: | -: | -:  |
|[B1.1] Append N characters (time)                                         |   224 +/- 10 ms |    159 +/- 3 ms |     90 +/- 3 ms |     86 +/- 1 ms |   494 +/- 10 ms |     89 +/- 2 ms |
|[B1.1] Append N characters (avgUpdateSize)                                |  27 +/- 0 bytes |  27 +/- 0 bytes | 121 +/- 0 bytes |  39 +/- 0 bytes | 164 +/- 0 bytes | 197 +/- 0 bytes |
|[B1.1] Append N characters (encodeTime)                                   |      1 +/- 0 ms |      0 +/- 0 ms |     10 +/- 0 ms |      0 +/- 0 ms |      4 +/- 0 ms |      7 +/- 0 ms |
|[B1.1] Append N characters (docSize)                                      | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 3990 +/- 0 bytes | 6145 +/- 0 bytes | 615998 +/- 0 bytes | 1005836 +/- 0 bytes |
|[B1.1] Append N characters (memUsed)                                      | -122669 +/- 12146 bytes | -6634 +/- 7236 bytes | -6257 +/- 7296 bytes | -2346 +/- 8765 bytes | 2137998 +/- 106970 bytes | 766830 +/- 5060 bytes |
|[B1.1] Append N characters (parseTime)                                    |    159 +/- 7 ms |    156 +/- 9 ms |    187 +/- 6 ms |   187 +/- 11 ms |   325 +/- 51 ms |   245 +/- 26 ms |
|[B1.2] Insert string of length N (time)                                   |      1 +/- 1 ms |      0 +/- 0 ms |     18 +/- 2 ms |      0 +/- 0 ms |   456 +/- 17 ms |     45 +/- 1 ms |
|[B1.2] Insert string of length N (avgUpdateSize)                          | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 6196 +/- 0 bytes | 6049 +/- 0 bytes | 819682 +/- 0 bytes | 1017682 +/- 0 bytes |
|[B1.2] Insert string of length N (encodeTime)                             |      1 +/- 1 ms |      0 +/- 0 ms |      2 +/- 0 ms |      0 +/- 0 ms |      5 +/- 0 ms |      7 +/- 0 ms |
|[B1.2] Insert string of length N (docSize)                                | 6031 +/- 0 bytes | 6031 +/- 0 bytes | 3972 +/- 0 bytes | 6143 +/- 0 bytes | 615996 +/- 0 bytes | 1005834 +/- 0 bytes |
|[B1.2] Insert string of length N (memUsed)                                | -17989 +/- 123801 bytes | 240 +/- 0 bytes | 520 +/- 0 bytes | 9200 +/- 0 bytes | 1900559 +/- 112456 bytes | 548162 +/- 100147 bytes |
|[B1.2] Insert string of length N (parseTime)                              |    148 +/- 6 ms |    183 +/- 1 ms |    139 +/- 8 ms |    144 +/- 1 ms |   281 +/- 36 ms |   208 +/- 15 ms |
|[B1.3] Prepend N characters (time)                                        |    193 +/- 9 ms |     29 +/- 1 ms |     70 +/- 2 ms |    481 +/- 4 ms |   459 +/- 18 ms |     91 +/- 2 ms |
|[B1.3] Prepend N characters (avgUpdateSize)                               |  27 +/- 0 bytes |  27 +/- 0 bytes | 116 +/- 0 bytes |  46 +/- 0 bytes | 164 +/- 0 bytes | 197 +/- 0 bytes |
|[B1.3] Prepend N characters (encodeTime)                                  |      6 +/- 1 ms |      0 +/- 1 ms |     10 +/- 0 ms |     10 +/- 1 ms |      4 +/- 0 ms |      6 +/- 0 ms |
|[B1.3] Prepend N characters (docSize)                                     | 6041 +/- 0 bytes | 6041 +/- 0 bytes | 3986 +/- 0 bytes | 65766 +/- 0 bytes | 615998 +/- 0 bytes | 1005836 +/- 0 bytes |
|[B1.3] Prepend N characters (memUsed)                                     | 1126932 +/- 191116 bytes | -6714 +/- 7097 bytes | -6328 +/- 7218 bytes | 1588036 +/- 216134 bytes | 2104154 +/- 3647 bytes | 764990 +/- 3317 bytes |
|[B1.3] Prepend N characters (parseTime)                                   |    177 +/- 6 ms |    216 +/- 9 ms |    186 +/- 1 ms |   316 +/- 47 ms |   317 +/- 48 ms |   247 +/- 26 ms |
|[B1.4] Insert N characters at random positions (time)                     |    212 +/- 5 ms |   163 +/- 13 ms |     78 +/- 1 ms |     99 +/- 2 ms |     97 +/- 3 ms |    181 +/- 3 ms |
|[B1.4] Insert N characters at random positions (avgUpdateSize)            |  29 +/- 0 bytes |  29 +/- 0 bytes | 121 +/- 0 bytes |  42 +/- 0 bytes | 163 +/- 0 bytes | 209 +/- 0 bytes |
|[B1.4] Insert N characters at random positions (encodeTime)               |     15 +/- 1 ms |      3 +/- 1 ms |     11 +/- 0 ms |      7 +/- 1 ms |      5 +/- 0 ms |      7 +/- 0 ms |
|[B1.4] Insert N characters at random positions (docSize)                  | 29554 +/- 0 bytes | 29554 +/- 0 bytes | 24743 +/- 0 bytes | 35494 +/- 0 bytes | 599394 +/- 0 bytes | 1078069 +/- 0 bytes |
|[B1.4] Insert N characters at random positions (memUsed)                  | 981858 +/- 175781 bytes | -7413 +/- 6731 bytes | -6328 +/- 7218 bytes | 882674 +/- 97331 bytes | 2105250 +/- 5361 bytes | 766282 +/- 5453 bytes |
|[B1.4] Insert N characters at random positions (parseTime)                |    193 +/- 8 ms |   351 +/- 46 ms |    194 +/- 2 ms |   279 +/- 31 ms |   352 +/- 54 ms |   243 +/- 27 ms |
|[B1.5] Insert N words at random positions (time)                          |    242 +/- 5 ms |    548 +/- 7 ms |    188 +/- 1 ms |    107 +/- 2 ms |   307 +/- 13 ms |  2319 +/- 87 ms |
|[B1.5] Insert N words at random positions (avgUpdateSize)                 |  36 +/- 0 bytes |  36 +/- 0 bytes | 131 +/- 0 bytes |  50 +/- 0 bytes | 864 +/- 0 bytes | 1143 +/- 0 bytes |
|[B1.5] Insert N words at random positions (encodeTime)                    |     16 +/- 2 ms |      3 +/- 2 ms |     31 +/- 0 ms |     12 +/- 1 ms |     27 +/- 1 ms |     39 +/- 1 ms |
|[B1.5] Insert N words at random positions (docSize)                       | 87924 +/- 0 bytes | 87924 +/- 0 bytes | 96199 +/- 0 bytes | 91193 +/- 0 bytes | 3656379 +/- 0 bytes | 6604366 +/- 0 bytes |
|[B1.5] Insert N words at random positions (memUsed)                       | 2534497 +/- 330801 bytes | -6704 +/- 6984 bytes | -6328 +/- 7218 bytes | 1593549 +/- 125179 bytes | 12730947 +/- 3714 bytes | 4744337 +/- 2373 bytes |
|[B1.5] Insert N words at random positions (parseTime)                     |    218 +/- 4 ms |   479 +/- 19 ms |    309 +/- 2 ms |   363 +/- 52 ms | 1211 +/- 287 ms |  596 +/- 117 ms |
|[B1.6] Insert string, then delete it (time)                               |      2 +/- 3 ms |      0 +/- 0 ms |     28 +/- 0 ms |     45 +/- 4 ms |   796 +/- 30 ms |    138 +/- 3 ms |
|[B1.6] Insert string, then delete it (avgUpdateSize)                      | 6053 +/- 0 bytes | 6053 +/- 0 bytes | 6333 +/- 0 bytes | 71836 +/- 0 bytes | 1208487 +/- 0 bytes | 1406487 +/- 0 bytes |
|[B1.6] Insert string, then delete it (encodeTime)                         |      0 +/- 0 ms |      0 +/- 0 ms |      3 +/- 0 ms |      1 +/- 1 ms |      4 +/- 0 ms |      6 +/- 0 ms |
|[B1.6] Insert string, then delete it (docSize)                            |  38 +/- 0 bytes |  38 +/- 0 bytes | 3991 +/- 0 bytes | 137 +/- 0 bytes | 599100 +/- 0 bytes | 1005834 +/- 0 bytes |
|[B1.6] Insert string, then delete it (memUsed)                            | 122018 +/- 183306 bytes | 240 +/- 0 bytes | -40588 +/- 129995 bytes | 34556 +/- 88720 bytes | 2114920 +/- 0 bytes | 775952 +/- 0 bytes |
|[B1.6] Insert string, then delete it (parseTime)                          |    137 +/- 1 ms |    344 +/- 2 ms |    164 +/- 2 ms |    152 +/- 1 ms |   280 +/- 36 ms |   208 +/- 17 ms |
|[B1.7] Insert/Delete strings at random positions (time)                   |    271 +/- 4 ms |    188 +/- 6 ms |    136 +/- 1 ms |    157 +/- 2 ms |   296 +/- 16 ms |  1035 +/- 28 ms |
|[B1.7] Insert/Delete strings at random positions (avgUpdateSize)          |  31 +/- 0 bytes |  31 +/- 0 bytes | 135 +/- 0 bytes |  67 +/- 0 bytes | 603 +/- 0 bytes | 740 +/- 0 bytes |
|[B1.7] Insert/Delete strings at random positions (encodeTime)             |     20 +/- 1 ms |      4 +/- 1 ms |     26 +/- 2 ms |      6 +/- 1 ms |     11 +/- 0 ms |     18 +/- 0 ms |
|[B1.7] Insert/Delete strings at random positions (docSize)                | 28377 +/- 0 bytes | 28377 +/- 0 bytes | 59280 +/- 0 bytes | 29957 +/- 0 bytes | 1784311 +/- 0 bytes | 3228806 +/- 0 bytes |
|[B1.7] Insert/Delete strings at random positions (memUsed)                | 1483882 +/- 211158 bytes | -6750 +/- 7084 bytes | -6328 +/- 7218 bytes | 807966 +/- 159301 bytes | 6283398 +/- 158273 bytes | 2305035 +/- 955 bytes |
|[B1.7] Insert/Delete strings at random positions (parseTime)              |    203 +/- 2 ms |   520 +/- 18 ms |    285 +/- 2 ms |   272 +/- 32 ms |  640 +/- 146 ms |   381 +/- 61 ms |
|[B1.8] Append N numbers (time)                                            |    222 +/- 2 ms |     34 +/- 1 ms |     84 +/- 1 ms |     98 +/- 3 ms |   485 +/- 23 ms |     88 +/- 3 ms |
|[B1.8] Append N numbers (avgUpdateSize)                                   |  32 +/- 0 bytes |  32 +/- 0 bytes | 125 +/- 0 bytes |  45 +/- 0 bytes | 171 +/- 0 bytes | 204 +/- 0 bytes |
|[B1.8] Append N numbers (encodeTime)                                      |      5 +/- 2 ms |      3 +/- 0 ms |     11 +/- 0 ms |      3 +/- 1 ms |      4 +/- 0 ms |      7 +/- 0 ms |
|[B1.8] Append N numbers (docSize)                                         | 35634 +/- 0 bytes | 35634 +/- 0 bytes | 26982 +/- 0 bytes | 47751 +/- 0 bytes | 654817 +/- 0 bytes | 1044655 +/- 0 bytes |
|[B1.8] Append N numbers (memUsed)                                         | -31911 +/- 255850 bytes | -6774 +/- 7058 bytes | -6328 +/- 7218 bytes | 259378 +/- 100044 bytes | 2104319 +/- 3504 bytes | 768681 +/- 1094 bytes |
|[B1.8] Append N numbers (parseTime)                                       |    155 +/- 2 ms |   527 +/- 13 ms |    193 +/- 2 ms |   211 +/- 11 ms |   323 +/- 58 ms |   246 +/- 25 ms |
|[B1.9] Insert Array of N numbers (time)                                   |      5 +/- 2 ms |     10 +/- 2 ms |     19 +/- 1 ms |     30 +/- 0 ms |   439 +/- 26 ms |     45 +/- 1 ms |
|[B1.9] Insert Array of N numbers (avgUpdateSize)                          | 35657 +/- 0 bytes | 35657 +/- 0 bytes | 31194 +/- 0 bytes | 47678 +/- 0 bytes | 858656 +/- 0 bytes | 1056656 +/- 0 bytes |
|[B1.9] Insert Array of N numbers (encodeTime)                             |      2 +/- 2 ms |      2 +/- 0 ms |      3 +/- 0 ms |      8 +/- 1 ms |      5 +/- 0 ms |      7 +/- 0 ms |
|[B1.9] Insert Array of N numbers (docSize)                                | 35657 +/- 0 bytes | 35657 +/- 0 bytes | 26951 +/- 0 bytes | 47772 +/- 0 bytes | 654969 +/- 0 bytes | 1044807 +/- 0 bytes |
|[B1.9] Insert Array of N numbers (memUsed)                                | 116485 +/- 150722 bytes | 240 +/- 0 bytes | 520 +/- 0 bytes | 138797 +/- 127157 bytes | 1971155 +/- 43968 bytes | 574201 +/- 56102 bytes |
|[B1.9] Insert Array of N numbers (parseTime)                              |    145 +/- 2 ms |    544 +/- 3 ms |    150 +/- 1 ms |    166 +/- 2 ms |   275 +/- 40 ms |   208 +/- 16 ms |
|[B1.10] Prepend N numbers (time)                                          |    184 +/- 4 ms |     49 +/- 3 ms |     71 +/- 1 ms |   493 +/- 11 ms |   437 +/- 27 ms |     88 +/- 1 ms |
|[B1.10] Prepend N numbers (avgUpdateSize)                                 |  32 +/- 0 bytes |  32 +/- 0 bytes | 120 +/- 0 bytes |  52 +/- 0 bytes | 171 +/- 0 bytes | 204 +/- 0 bytes |
|[B1.10] Prepend N numbers (encodeTime)                                    |     14 +/- 2 ms |      3 +/- 0 ms |     11 +/- 0 ms |     14 +/- 0 ms |      4 +/- 0 ms |      7 +/- 1 ms |
|[B1.10] Prepend N numbers (docSize)                                       | 35665 +/- 0 bytes | 35665 +/- 0 bytes | 26985 +/- 0 bytes | 107390 +/- 0 bytes | 654884 +/- 0 bytes | 1044722 +/- 0 bytes |
|[B1.10] Prepend N numbers (memUsed)                                       | 2116487 +/- 260094 bytes | -6681 +/- 7009 bytes | -6328 +/- 7218 bytes | 2056355 +/- 158831 bytes | 2104019 +/- 3681 bytes | 768681 +/- 1094 bytes |
|[B1.10] Prepend N numbers (parseTime)                                     |    180 +/- 5 ms |   696 +/- 16 ms |    187 +/- 1 ms |   365 +/- 57 ms |   307 +/- 60 ms |   245 +/- 25 ms |
|[B1.11] Insert N numbers at random positions (time)                       |    219 +/- 4 ms |    225 +/- 3 ms |     79 +/- 1 ms |    110 +/- 7 ms |     94 +/- 2 ms |    176 +/- 5 ms |
|[B1.11] Insert N numbers at random positions (avgUpdateSize)              |  34 +/- 0 bytes |  34 +/- 0 bytes | 125 +/- 0 bytes |  48 +/- 0 bytes | 171 +/- 0 bytes | 216 +/- 0 bytes |
|[B1.11] Insert N numbers at random positions (encodeTime)                 |     15 +/- 2 ms |      5 +/- 2 ms |     12 +/- 0 ms |     11 +/- 3 ms |      5 +/- 0 ms |      7 +/- 0 ms |
|[B1.11] Insert N numbers at random positions (docSize)                    | 59137 +/- 0 bytes | 59137 +/- 0 bytes | 47744 +/- 0 bytes | 77385 +/- 0 bytes | 638196 +/- 0 bytes | 1116861 +/- 0 bytes |
|[B1.11] Insert N numbers at random positions (memUsed)                    | 1998059 +/- 169901 bytes | -7343 +/- 6739 bytes | -6328 +/- 7218 bytes | 1118110 +/- 211861 bytes | 2104184 +/- 3546 bytes | 768681 +/- 1094 bytes |
|[B1.11] Insert N numbers at random positions (parseTime)                  |    198 +/- 5 ms |   726 +/- 15 ms |    194 +/- 1 ms |   341 +/- 42 ms |   352 +/- 56 ms |   240 +/- 25 ms |
|[B2.1] Concurrently insert string of length N at index 0 (time)           |      3 +/- 3 ms |      2 +/- 5 ms |     71 +/- 0 ms |      0 +/- 0 ms |  1091 +/- 41 ms |    325 +/- 9 ms |
|[B2.1] Concurrently insert string of length N at index 0 (updateSize)     | 6094 +/- 0 bytes | 6094 +/- 0 bytes | 9494 +/- 0 bytes | 6136 +/- 0 bytes | 826516 +/- 0 bytes | 1092156 +/- 0 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (encodeTime)     |      0 +/- 0 ms |      3 +/- 5 ms |      4 +/- 0 ms |      0 +/- 0 ms |      8 +/- 0 ms |     13 +/- 1 ms |
|[B2.1] Concurrently insert string of length N at index 0 (docSize)        | 12151 +/- 1 bytes | 12152 +/- 1 bytes | 8009 +/- 0 bytes | 12289 +/- 0 bytes | 1241904 +/- 0 bytes | 2160409 +/- 0 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (memUsed)        | 132754 +/- 153463 bytes | 214 +/- 71 bytes | 530 +/- 30 bytes | 16170 +/- 30 bytes | 4262178 +/- 30 bytes | 1561346 +/- 30 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (parseTime)      |    137 +/- 2 ms |   614 +/- 67 ms |    169 +/- 0 ms |    148 +/- 3 ms |   440 +/- 83 ms |   277 +/- 34 ms |
|[B2.2] Concurrently insert N characters at random positions (time)        |   126 +/- 11 ms |    591 +/- 5 ms |    333 +/- 2 ms |    154 +/- 3 ms |    193 +/- 2 ms |   726 +/- 20 ms |
|[B2.2] Concurrently insert N characters at random positions (updateSize)  | 33444 +/- 0 bytes | 177007 +/- 0 bytes | 1093282 +/- 0 bytes | 104977 +/- 0 bytes | 825600 +/- 0 bytes | 1099004 +/- 0 bytes |
|[B2.2] Concurrently insert N characters at random positions (encodeTime)  |      3 +/- 1 ms |      4 +/- 1 ms |     23 +/- 1 ms |     16 +/- 1 ms |      9 +/- 0 ms |     11 +/- 0 ms |
|[B2.2] Concurrently insert N characters at random positions (docSize)     | 66853 +/- 3 bytes | 66855 +/- 4 bytes | 50699 +/- 0 bytes | 72341 +/- 0 bytes | 1208756 +/- 0 bytes | 2174106 +/- 0 bytes |
|[B2.2] Concurrently insert N characters at random positions (memUsed)     | 2715852 +/- 110744 bytes | -6744 +/- 5393 bytes | -6290 +/- 54 bytes | 1779342 +/- 4223 bytes | 4262168 +/- 0 bytes | 1561336 +/- 0 bytes |
|[B2.2] Concurrently insert N characters at random positions (parseTime)   |    211 +/- 4 ms |    792 +/- 3 ms |    260 +/- 2 ms |   344 +/- 48 ms |   486 +/- 87 ms |   267 +/- 33 ms |
|[B2.3] Concurrently insert N words at random positions (time)             |    203 +/- 9 ms |   1459 +/- 4 ms |    762 +/- 4 ms |    171 +/- 3 ms |    905 +/- 9 ms | 14783 +/- 1009 ms |
|[B2.3] Concurrently insert N words at random positions (updateSize)       | 88982 +/- 38 bytes | 215213 +/- 0 bytes | 1185195 +/- 0 bytes | 149822 +/- 0 bytes | 4980784 +/- 0 bytes | 6638148 +/- 0 bytes |
|[B2.3] Concurrently insert N words at random positions (encodeTime)       |      7 +/- 0 ms |      6 +/- 1 ms |     66 +/- 2 ms |     65 +/- 1 ms |     52 +/- 1 ms |   111 +/- 40 ms |
|[B2.3] Concurrently insert N words at random positions (docSize)          | 178108 +/- 77 bytes | 178133 +/- 4 bytes | 191496 +/- 0 bytes | 182584 +/- 0 bytes | 7248094 +/- 0 bytes | 13094218 +/- 0 bytes |
|[B2.3] Concurrently insert N words at random positions (memUsed)          | 5361096 +/- 168443 bytes | -6730 +/- 5274 bytes | -6277 +/- 40 bytes | 3355782 +/- 899 bytes | 25255760 +/- 0 bytes | 9425088 +/- 0 bytes |
|[B2.3] Concurrently insert N words at random positions (parseTime)        |    250 +/- 9 ms |    742 +/- 5 ms |    494 +/- 3 ms |   498 +/- 86 ms | 2191 +/- 539 ms | 1100 +/- 237 ms |
|[B2.4] Concurrently insert & delete (time)                                |   385 +/- 28 ms |  3779 +/- 23 ms |   1412 +/- 4 ms |    469 +/- 5 ms |  1537 +/- 20 ms | 60744 +/- 12938 ms |
|[B2.4] Concurrently insert & delete (updateSize)                          | 139517 +/- 0 bytes | 398127 +/- 1915 bytes | 2395867 +/- 0 bytes | 398559 +/- 0 bytes | 8495206 +/- 0 bytes | 10999960 +/- 0 bytes |
|[B2.4] Concurrently insert & delete (encodeTime)                          |     23 +/- 3 ms |     11 +/- 4 ms |    120 +/- 0 ms |     69 +/- 1 ms |     91 +/- 3 ms |   145 +/- 17 ms |
|[B2.4] Concurrently insert & delete (docSize)                             | 279170 +/- 3 bytes | 279144 +/- 78 bytes | 307359 +/- 1 bytes | 252660 +/- 0 bytes | 10883165 +/- 0 bytes | 19713932 +/- 0 bytes |
|[B2.4] Concurrently insert & delete (memUsed)                             | 9550775 +/- 714929 bytes | -6785 +/- 5397 bytes | -6955 +/- 2186 bytes | 4940128 +/- 1297 bytes | 37906992 +/- 0 bytes | 14145128 +/- 0 bytes |
|[B2.4] Concurrently insert & delete (parseTime)                           |   369 +/- 16 ms |   759 +/- 33 ms |    825 +/- 2 ms |  661 +/- 130 ms | 4010 +/- 1024 ms | 1758 +/- 401 ms |
|[B3.4] 20√N clients concurrently insert text in Array (memUsed)           | 978442 +/- 138689 bytes | -321839 +/- 175310 bytes | -10460 +/- 32371 bytes | 1105847 +/- 187050 bytes | 363220 +/- 147744 bytes | 342843 +/- 141520 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (time)              |    105 +/- 3 ms |   356 +/- 11 ms |     41 +/- 2 ms |     33 +/- 2 ms |     32 +/- 2 ms |     35 +/- 2 ms |
|[B3.4] 20√N clients concurrently insert text in Array (updateSize)        | 52742 +/- 7 bytes | 52737 +/- 7 bytes | 277630 +/- 0 bytes | 77430 +/- 0 bytes | 229890 +/- 0 bytes | 282250 +/- 0 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (encodeTime)        |      3 +/- 0 ms |      1 +/- 0 ms |     13 +/- 0 ms |     14 +/- 3 ms |     10 +/- 0 ms |     10 +/- 0 ms |
|[B3.4] 20√N clients concurrently insert text in Array (docSize)           | 26587 +/- 7 bytes | 26582 +/- 7 bytes | 83569 +/- 7 bytes | 86647 +/- 0 bytes | 203895 +/- 0 bytes | 280751 +/- 0 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (parseTime)         |   191 +/- 10 ms |   732 +/- 23 ms |    167 +/- 2 ms |  665 +/- 139 ms |  622 +/- 131 ms |  593 +/- 127 ms |
|[B4] Apply real-world editing dataset (time)                              |  5107 +/- 49 ms | 52314 +/- 969 ms | 4019 +/- 129 ms |  1362 +/- 33 ms | 13575 +/- 524 ms | 72175 +/- 717 ms |
|[B4] Apply real-world editing dataset (memUsed)                           | 3197598 +/- 180168 bytes | -11251 +/- 2390 bytes | 36682 +/- 3670 bytes | 2360533 +/- 8056 bytes | 64925891 +/- 8014 bytes | 24079330 +/- 9147 bytes |
|[B4] Apply real-world editing dataset (updateSize)                        | 7539926 +/- 82149 bytes | 7565904 +/- 0 bytes | 58115146 +/- 0 bytes | 10224234 +/- 0 bytes | 37715931 +/- 0 bytes | 46343814 +/- 0 bytes |
|[B4] Apply real-world editing dataset (encodeTime)                        |     20 +/- 1 ms |      2 +/- 0 ms |   520 +/- 40 ms |     17 +/- 1 ms |    140 +/- 6 ms |    299 +/- 1 ms |
|[B4] Apply real-world editing dataset (docSize)                           | 159929 +/- 1 bytes | 159929 +/- 0 bytes | 142473 +/- 0 bytes | 167873 +/- 0 bytes | 18726204 +/- 0 bytes | 33750684 +/- 0 bytes |
|[B4] Apply real-world editing dataset (parseTime)                         |     79 +/- 8 ms |     13 +/- 1 ms | 3281 +/- 171 ms |     11 +/- 1 ms |   362 +/- 16 ms |    389 +/- 3 ms |
|[B4x100] Apply real-world editing dataset 100 times (time)                | 548825 +/- 4148 ms |         skipped |         skipped | 204132 +/- 2464 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (memUsed)             | 287583234 +/- 16820361 bytes |         skipped |         skipped | 223157187 +/- 81347 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (updateSize)          | 819905758 +/- 0 bytes |         skipped |         skipped | 1074335646 +/- 0 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (encodeTime)          |   374 +/- 26 ms |         skipped |         skipped | 1644 +/- 193 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (docSize)             | 15989245 +/- 0 bytes |         skipped |         skipped | 17844936 +/- 0 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (parseTime)           | 2461 +/- 664 ms |         skipped |         skipped |   695 +/- 25 ms |         skipped |         skipped |

