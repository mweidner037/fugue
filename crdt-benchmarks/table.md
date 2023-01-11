
> crdt-benchmarks@1.0.0 table
> node bin/render-table.js benchmarks/results.json 6000 yjs ywasm automerge-wasm tree-fugue tree-fugue-simple list-fugue-simple

N = 6000 | yjs | ywasm | automerge-wasm | tree-fugue | tree-fugue-simple | list-fugue-simple|
| :- |  -: | -: | -: | -: | -: | -:  |
|Version                                                                   |         13.5.12 |           0.9.3 |           0.1.3 |         skipped |         skipped |         skipped |
|Bundle size                                                               |    120421 bytes |    677653 bytes |    900030 bytes |         skipped |         skipped |         skipped |
|Bundle size (gzipped)                                                     |     36457 bytes |    213833 bytes |    321760 bytes |         skipped |         skipped |         skipped |
|[B1.1] Append N characters (time)                                         |          271 ms |          166 ms |          228 ms |          134 ms |         1010 ms |          134 ms |
|[B1.1] Append N characters (avgUpdateSize)                                |        27 bytes |        27 bytes |       121 bytes |        39 bytes |       164 bytes |       197 bytes |
|[B1.1] Append N characters (encodeTime)                                   |            1 ms |            0 ms |            9 ms |            1 ms |            6 ms |            6 ms |
|[B1.1] Append N characters (docSize)                                      |      6031 bytes |      6031 bytes |      3995 bytes |      6145 bytes |    615998 bytes |   1005836 bytes |
|[B1.1] Append N characters (memUsed)                                      |             0 B |             0 B |             0 B |             0 B |            2 MB |        663.6 kB |
|[B1.1] Append N characters (parseTime)                                    |           83 ms |           59 ms |          119 ms |           69 ms |           97 ms |           79 ms |
|[B1.2] Insert string of length N (time)                                   |            2 ms |            0 ms |           19 ms |            3 ms |          808 ms |           53 ms |
|[B1.2] Insert string of length N (avgUpdateSize)                          |      6031 bytes |      6031 bytes |      6201 bytes |      6049 bytes |    819682 bytes |   1017682 bytes |
|[B1.2] Insert string of length N (encodeTime)                             |            1 ms |            0 ms |            2 ms |            0 ms |            6 ms |            8 ms |
|[B1.2] Insert string of length N (docSize)                                |      6031 bytes |      6031 bytes |      3977 bytes |      6143 bytes |    615996 bytes |   1005834 bytes |
|[B1.2] Insert string of length N (memUsed)                                |             0 B |           416 B |             0 B |          9.5 kB |          1.9 MB |        751.2 kB |
|[B1.2] Insert string of length N (parseTime)                              |           83 ms |           57 ms |           72 ms |           66 ms |          101 ms |           75 ms |
|[B1.3] Prepend N characters (time)                                        |          204 ms |           23 ms |           80 ms |          457 ms |          623 ms |           91 ms |
|[B1.3] Prepend N characters (avgUpdateSize)                               |        27 bytes |        27 bytes |       116 bytes |        46 bytes |       164 bytes |       197 bytes |
|[B1.3] Prepend N characters (encodeTime)                                  |            6 ms |            0 ms |           11 ms |            9 ms |            4 ms |            6 ms |
|[B1.3] Prepend N characters (docSize)                                     |      6041 bytes |      6041 bytes |      3991 bytes |     65766 bytes |    615998 bytes |   1005836 bytes |
|[B1.3] Prepend N characters (memUsed)                                     |        747.6 kB |             0 B |             0 B |          1.6 MB |          2.3 MB |        670.2 kB |
|[B1.3] Prepend N characters (parseTime)                                   |          100 ms |           62 ms |          188 ms |           82 ms |           83 ms |           76 ms |
|[B1.4] Insert N characters at random positions (time)                     |          226 ms |          114 ms |          494 ms |           94 ms |          101 ms |          154 ms |
|[B1.4] Insert N characters at random positions (avgUpdateSize)            |        29 bytes |        29 bytes |       121 bytes |        42 bytes |       163 bytes |       209 bytes |
|[B1.4] Insert N characters at random positions (encodeTime)               |           16 ms |            0 ms |           13 ms |            5 ms |            4 ms |            6 ms |
|[B1.4] Insert N characters at random positions (docSize)                  |     29554 bytes |     29554 bytes |     24746 bytes |     35494 bytes |    599394 bytes |   1078069 bytes |
|[B1.4] Insert N characters at random positions (memUsed)                  |        540.6 kB |             0 B |             0 B |        681.2 kB |            2 MB |        656.3 kB |
|[B1.4] Insert N characters at random positions (parseTime)                |          135 ms |           61 ms |          193 ms |           74 ms |           95 ms |           73 ms |
|[B1.5] Insert N words at random positions (time)                          |          278 ms |          385 ms |          878 ms |           94 ms |          334 ms |         1907 ms |
|[B1.5] Insert N words at random positions (avgUpdateSize)                 |        36 bytes |        36 bytes |       131 bytes |        50 bytes |       864 bytes |      1143 bytes |
|[B1.5] Insert N words at random positions (encodeTime)                    |           21 ms |            1 ms |           36 ms |           10 ms |           27 ms |           38 ms |
|[B1.5] Insert N words at random positions (docSize)                       |     87924 bytes |     87924 bytes |     96206 bytes |     91193 bytes |   3656379 bytes |   6604366 bytes |
|[B1.5] Insert N words at random positions (memUsed)                       |          2.2 MB |             0 B |             0 B |          1.2 MB |         12.7 MB |          4.7 MB |
|[B1.5] Insert N words at random positions (parseTime)                     |          144 ms |           65 ms |          339 ms |           87 ms |          209 ms |          143 ms |
|[B1.6] Insert string, then delete it (time)                               |            6 ms |            1 ms |           42 ms |           50 ms |         1109 ms |          128 ms |
|[B1.6] Insert string, then delete it (avgUpdateSize)                      |      6053 bytes |      6053 bytes |      6338 bytes |     71836 bytes |   1208487 bytes |   1406487 bytes |
|[B1.6] Insert string, then delete it (encodeTime)                         |            0 ms |            0 ms |            5 ms |            2 ms |            5 ms |            6 ms |
|[B1.6] Insert string, then delete it (docSize)                            |        38 bytes |        38 bytes |      3996 bytes |       137 bytes |    599100 bytes |   1005834 bytes |
|[B1.6] Insert string, then delete it (memUsed)                            |             0 B |           728 B |           440 B |             0 B |            2 MB |        717.4 kB |
|[B1.6] Insert string, then delete it (parseTime)                          |           85 ms |           61 ms |          182 ms |           65 ms |          103 ms |           81 ms |
|[B1.7] Insert/Delete strings at random positions (time)                   |          292 ms |          119 ms |          921 ms |          139 ms |          301 ms |          903 ms |
|[B1.7] Insert/Delete strings at random positions (avgUpdateSize)          |        31 bytes |        31 bytes |       135 bytes |        67 bytes |       603 bytes |       740 bytes |
|[B1.7] Insert/Delete strings at random positions (encodeTime)             |           23 ms |            0 ms |           30 ms |            3 ms |           11 ms |           20 ms |
|[B1.7] Insert/Delete strings at random positions (docSize)                |     28377 bytes |     28377 bytes |     59284 bytes |     29957 bytes |   1784311 bytes |   3228806 bytes |
|[B1.7] Insert/Delete strings at random positions (memUsed)                |        638.3 kB |             0 B |             0 B |        459.8 kB |          6.1 MB |          2.2 MB |
|[B1.7] Insert/Delete strings at random positions (parseTime)              |          145 ms |           64 ms |          296 ms |           71 ms |          128 ms |          103 ms |
|[B1.8] Append N numbers (time)                                            |          279 ms |           32 ms |          328 ms |           98 ms |          860 ms |           91 ms |
|[B1.8] Append N numbers (avgUpdateSize)                                   |        32 bytes |        32 bytes |       125 bytes |        45 bytes |       171 bytes |       204 bytes |
|[B1.8] Append N numbers (encodeTime)                                      |            6 ms |            0 ms |           16 ms |            5 ms |            5 ms |           13 ms |
|[B1.8] Append N numbers (docSize)                                         |     35634 bytes |     35634 bytes |     26988 bytes |     47751 bytes |    654817 bytes |   1044655 bytes |
|[B1.8] Append N numbers (memUsed)                                         |             0 B |             0 B |             0 B |         51.7 kB |          2.3 MB |        694.3 kB |
|[B1.8] Append N numbers (parseTime)                                       |           90 ms |           64 ms |          203 ms |           83 ms |           97 ms |           83 ms |
|[B1.9] Insert Array of N numbers (time)                                   |            4 ms |            3 ms |           30 ms |           27 ms |          622 ms |           40 ms |
|[B1.9] Insert Array of N numbers (avgUpdateSize)                          |     35657 bytes |     35657 bytes |     31199 bytes |     47678 bytes |    858656 bytes |   1056656 bytes |
|[B1.9] Insert Array of N numbers (encodeTime)                             |            1 ms |            0 ms |            4 ms |            8 ms |            5 ms |            6 ms |
|[B1.9] Insert Array of N numbers (docSize)                                |     35657 bytes |     35657 bytes |     26956 bytes |     47772 bytes |    654969 bytes |   1044807 bytes |
|[B1.9] Insert Array of N numbers (memUsed)                                |        231.3 kB |           560 B |           640 B |         12.8 kB |          2.1 MB |          602 kB |
|[B1.9] Insert Array of N numbers (parseTime)                              |           86 ms |           70 ms |          152 ms |           79 ms |           81 ms |           73 ms |
|[B1.10] Prepend N numbers (time)                                          |          201 ms |           30 ms |          477 ms |          420 ms |          437 ms |           74 ms |
|[B1.10] Prepend N numbers (avgUpdateSize)                                 |        32 bytes |        36 bytes |       120 bytes |        52 bytes |       171 bytes |       204 bytes |
|[B1.10] Prepend N numbers (encodeTime)                                    |           14 ms |            1 ms |           16 ms |           13 ms |            4 ms |            6 ms |
|[B1.10] Prepend N numbers (docSize)                                       |     35665 bytes |     65658 bytes |     26990 bytes |    107390 bytes |    654884 bytes |   1044722 bytes |
|[B1.10] Prepend N numbers (memUsed)                                       |          1.9 MB |             0 B |             0 B |          2.1 MB |          1.8 MB |          485 kB |
|[B1.10] Prepend N numbers (parseTime)                                     |          123 ms |           68 ms |          189 ms |           95 ms |           78 ms |           77 ms |
|[B1.11] Insert N numbers at random positions (time)                       |          263 ms |          123 ms |          507 ms |           91 ms |           86 ms |          148 ms |
|[B1.11] Insert N numbers at random positions (avgUpdateSize)              |        34 bytes |        34 bytes |       125 bytes |        48 bytes |       171 bytes |       216 bytes |
|[B1.11] Insert N numbers at random positions (encodeTime)                 |           19 ms |            1 ms |           15 ms |            4 ms |            4 ms |            6 ms |
|[B1.11] Insert N numbers at random positions (docSize)                    |     59137 bytes |     59152 bytes |     47749 bytes |     77385 bytes |    638196 bytes |   1116861 bytes |
|[B1.11] Insert N numbers at random positions (memUsed)                    |          1.8 MB |             0 B |             0 B |             0 B |            2 MB |          673 kB |
|[B1.11] Insert N numbers at random positions (parseTime)                  |          131 ms |           69 ms |          196 ms |           96 ms |           82 ms |           79 ms |
|[B2.1] Concurrently insert string of length N at index 0 (time)           |            5 ms |            0 ms |          101 ms |            7 ms |         1338 ms |          282 ms |
|[B2.1] Concurrently insert string of length N at index 0 (updateSize)     |      6094 bytes |      6094 bytes |      9499 bytes |      6136 bytes |    826516 bytes |   1092156 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (encodeTime)     |            1 ms |            0 ms |            5 ms |            1 ms |            8 ms |           12 ms |
|[B2.1] Concurrently insert string of length N at index 0 (docSize)        |     12152 bytes |     12152 bytes |      8014 bytes |     12289 bytes |   1241904 bytes |   2160409 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (memUsed)        |             0 B |           112 B |             0 B |             0 B |          4.2 MB |          1.5 MB |
|[B2.1] Concurrently insert string of length N at index 0 (parseTime)      |           87 ms |           69 ms |          168 ms |           65 ms |           96 ms |           93 ms |
|[B2.2] Concurrently insert N characters at random positions (time)        |          138 ms |          322 ms |         1290 ms |          135 ms |          182 ms |          637 ms |
|[B2.2] Concurrently insert N characters at random positions (updateSize)  |     33444 bytes |    177007 bytes |   1093293 bytes |    104977 bytes |    825600 bytes |   1099004 bytes |
|[B2.2] Concurrently insert N characters at random positions (encodeTime)  |            3 ms |            1 ms |           27 ms |           12 ms |            9 ms |           12 ms |
|[B2.2] Concurrently insert N characters at random positions (docSize)     |     66860 bytes |     66860 bytes |     50706 bytes |     72341 bytes |   1208756 bytes |   2174106 bytes |
|[B2.2] Concurrently insert N characters at random positions (memUsed)     |          2.5 MB |             0 B |             0 B |          1.6 MB |          4.2 MB |          1.5 MB |
|[B2.2] Concurrently insert N characters at random positions (parseTime)   |          157 ms |           77 ms |          275 ms |           85 ms |          105 ms |           88 ms |
|[B2.3] Concurrently insert N words at random positions (time)             |          219 ms |          898 ms |         2500 ms |          156 ms |          857 ms |        13477 ms |
|[B2.3] Concurrently insert N words at random positions (updateSize)       |     88994 bytes |    215213 bytes |   1185202 bytes |    149822 bytes |   4980784 bytes |   6638148 bytes |
|[B2.3] Concurrently insert N words at random positions (encodeTime)       |            7 ms |            3 ms |           71 ms |           24 ms |           54 ms |           92 ms |
|[B2.3] Concurrently insert N words at random positions (docSize)          |    178130 bytes |    178130 bytes |    191501 bytes |    182584 bytes |   7248094 bytes |  13094218 bytes |
|[B2.3] Concurrently insert N words at random positions (memUsed)          |          5.2 MB |             0 B |             0 B |          3.2 MB |         25.2 MB |          9.4 MB |
|[B2.3] Concurrently insert N words at random positions (parseTime)        |          183 ms |          114 ms |          512 ms |          105 ms |          266 ms |          247 ms |
|[B2.4] Concurrently insert & delete (time)                                |          457 ms |         2396 ms |         5080 ms |          408 ms |         1578 ms |        70914 ms |
|[B2.4] Concurrently insert & delete (updateSize)                          |    139517 bytes |    398881 bytes |   2395876 bytes |    398559 bytes |   8495206 bytes |  10999960 bytes |
|[B2.4] Concurrently insert & delete (encodeTime)                          |           32 ms |            4 ms |          142 ms |           49 ms |           87 ms |          206 ms |
|[B2.4] Concurrently insert & delete (docSize)                             |    279172 bytes |    279166 bytes |    307363 bytes |    252660 bytes |  10883165 bytes |  19713932 bytes |
|[B2.4] Concurrently insert & delete (memUsed)                             |          8.5 MB |             0 B |             0 B |          4.7 MB |         37.9 MB |         14.1 MB |
|[B2.4] Concurrently insert & delete (parseTime)                           |          297 ms |          127 ms |          968 ms |          125 ms |          538 ms |          424 ms |
|[B3.1] 20√N clients concurrently set number in Map (time)                 |          128 ms |          243 ms |           38 ms |         skipped |         skipped |         skipped |
|[B3.1] 20√N clients concurrently set number in Map (updateSize)           |     49172 bytes |     49173 bytes |    283296 bytes |         skipped |         skipped |         skipped |
|[B3.1] 20√N clients concurrently set number in Map (encodeTime)           |           13 ms |            1 ms |           15 ms |         skipped |         skipped |         skipped |
|[B3.1] 20√N clients concurrently set number in Map (docSize)              |     32219 bytes |     32234 bytes |     83218 bytes |         skipped |         skipped |         skipped |
|[B3.1] 20√N clients concurrently set number in Map (memUsed)              |        533.6 kB |            72 B |             0 B |         skipped |         skipped |         skipped |
|[B3.1] 20√N clients concurrently set number in Map (parseTime)            |          132 ms |          117 ms |          157 ms |         skipped |         skipped |         skipped |
|[B3.2] 20√N clients concurrently set Object in Map (time)                 |          125 ms |          249 ms |           48 ms |         skipped |         skipped |         skipped |
|[B3.2] 20√N clients concurrently set Object in Map (updateSize)           |     85090 bytes |     85087 bytes |    325370 bytes |         skipped |         skipped |         skipped |
|[B3.2] 20√N clients concurrently set Object in Map (encodeTime)           |           12 ms |            1 ms |           19 ms |         skipped |         skipped |         skipped |
|[B3.2] 20√N clients concurrently set Object in Map (docSize)              |     32268 bytes |     32257 bytes |     90437 bytes |         skipped |         skipped |         skipped |
|[B3.2] 20√N clients concurrently set Object in Map (memUsed)              |             0 B |             0 B |             0 B |         skipped |         skipped |         skipped |
|[B3.2] 20√N clients concurrently set Object in Map (parseTime)            |          126 ms |          112 ms |          148 ms |         skipped |         skipped |         skipped |
|[B3.3] 20√N clients concurrently set String in Map (time)                 |          239 ms |          312 ms |          129 ms |         skipped |         skipped |         skipped |
|[B3.3] 20√N clients concurrently set String in Map (updateSize)           |   7826224 bytes |   7826234 bytes |   8063440 bytes |         skipped |         skipped |         skipped |
|[B3.3] 20√N clients concurrently set String in Map (encodeTime)           |            7 ms |            3 ms |           50 ms |         skipped |         skipped |         skipped |
|[B3.3] 20√N clients concurrently set String in Map (docSize)              |     36822 bytes |     38386 bytes |     95056 bytes |         skipped |         skipped |         skipped |
|[B3.3] 20√N clients concurrently set String in Map (memUsed)              |        330.6 kB |             0 B |             0 B |         skipped |         skipped |         skipped |
|[B3.3] 20√N clients concurrently set String in Map (parseTime)            |          128 ms |          175 ms |          213 ms |         skipped |         skipped |         skipped |
|[B3.4] 20√N clients concurrently insert text in Array (time)              |           97 ms |          327 ms |           48 ms |           27 ms |           51 ms |           41 ms |
|[B3.4] 20√N clients concurrently insert text in Array (updateSize)        |     52736 bytes |     52742 bytes |    285330 bytes |     77430 bytes |    229890 bytes |    282250 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (encodeTime)        |            4 ms |            1 ms |           14 ms |           27 ms |           15 ms |           11 ms |
|[B3.4] 20√N clients concurrently insert text in Array (docSize)           |     26581 bytes |     26587 bytes |     83577 bytes |     86647 bytes |    203895 bytes |    280751 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (memUsed)           |        677.4 kB |             0 B |             0 B |        887.9 kB |        453.9 kB |        497.9 kB |
|[B3.4] 20√N clients concurrently insert text in Array (parseTime)         |          118 ms |          148 ms |          177 ms |           99 ms |          159 ms |          116 ms |
|[B4] Apply real-world editing dataset (time)                              |         1938 ms |        53190 ms |        13954 ms |         1500 ms |        13245 ms |        84528 ms |
|[B4] Apply real-world editing dataset (encodeTime)                        |           29 ms |            5 ms |          251 ms |           12 ms |          131 ms |          252 ms |
|[B4] Apply real-world editing dataset (docSize)                           |    159929 bytes |    159929 bytes |    129098 bytes |    167873 bytes |  18726204 bytes |  33750684 bytes |
|[B4] Apply real-world editing dataset (parseTime)                         |           87 ms |           13 ms |         1204 ms |           15 ms |          240 ms |          477 ms |
|[B4] Apply real-world editing dataset (memUsed)                           |            3 MB |           848 B |             0 B |          1.5 MB |         64.2 MB |           24 MB |
|[B4x100] Apply real-world editing dataset 100 times (time)                |       209907 ms |      3299520 ms |         skipped |       251581 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (encodeTime)          |          705 ms |          202 ms |         skipped |         1657 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (docSize)             |  15989245 bytes |  15989245 bytes |         skipped |  17844936 bytes |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (parseTime)           |         2223 ms |         1455 ms |         skipped |          692 ms |         skipped |         skipped |
|[B4x100] Apply real-world editing dataset 100 times (memUsed)             |        266.8 MB |           120 B |         skipped |        175.8 MB |         skipped |         skipped |

