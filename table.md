
> benchmarks@1.0.0 table
> node bin/render-table.js benchmarks/results.json 6000 yjs ywasm automerge-wasm fugue

N = 6000 | yjs | ywasm | automerge-wasm | fugue|
| :- |  -: | -: | -: | -:  |
|Version                                                                   |         13.5.12 |           0.9.3 |           0.1.3 |         skipped |
|Bundle size                                                               |     80413 bytes |    799327 bytes |    880281 bytes |         skipped |
|Bundle size (gzipped)                                                     |     23571 bytes |    232727 bytes |    312499 bytes |         skipped |
|[B1.1] Append N characters (time)                                         |          179 ms |          169 ms |          164 ms |          150 ms |
|[B1.1] Append N characters (avgUpdateSize)                                |        27 bytes |        27 bytes |       121 bytes |        39 bytes |
|[B1.1] Append N characters (encodeTime)                                   |            1 ms |            0 ms |           10 ms |            1 ms |
|[B1.1] Append N characters (docSize)                                      |      6031 bytes |      6031 bytes |      3995 bytes |      6160 bytes |
|[B1.1] Append N characters (memUsed)                                      |             0 B |             0 B |             0 B |             0 B |
|[B1.1] Append N characters (parseTime)                                    |           44 ms |           40 ms |           98 ms |           78 ms |
|[B1.2] Insert string of length N (time)                                   |            1 ms |            0 ms |           23 ms |            2 ms |
|[B1.2] Insert string of length N (avgUpdateSize)                          |      6031 bytes |      6031 bytes |      6201 bytes |      6049 bytes |
|[B1.2] Insert string of length N (encodeTime)                             |            1 ms |            0 ms |            2 ms |            0 ms |
|[B1.2] Insert string of length N (docSize)                                |      6031 bytes |      6031 bytes |      3977 bytes |      6158 bytes |
|[B1.2] Insert string of length N (memUsed)                                |             0 B |           224 B |           704 B |         10.7 kB |
|[B1.2] Insert string of length N (parseTime)                              |           42 ms |           38 ms |           60 ms |           73 ms |
|[B1.3] Prepend N characters (time)                                        |          151 ms |           26 ms |           88 ms |          563 ms |
|[B1.3] Prepend N characters (avgUpdateSize)                               |        27 bytes |        27 bytes |       116 bytes |        46 bytes |
|[B1.3] Prepend N characters (encodeTime)                                  |            4 ms |            0 ms |           10 ms |           10 ms |
|[B1.3] Prepend N characters (docSize)                                     |      6041 bytes |      6041 bytes |      3991 bytes |     65781 bytes |
|[B1.3] Prepend N characters (memUsed)                                     |        831.3 kB |             0 B |             0 B |          1.6 MB |
|[B1.3] Prepend N characters (parseTime)                                   |           75 ms |           39 ms |          110 ms |           87 ms |
|[B1.4] Insert N characters at random positions (time)                     |          169 ms |          143 ms |          539 ms |          110 ms |
|[B1.4] Insert N characters at random positions (avgUpdateSize)            |        29 bytes |        29 bytes |       121 bytes |        42 bytes |
|[B1.4] Insert N characters at random positions (encodeTime)               |            8 ms |            0 ms |           12 ms |            6 ms |
|[B1.4] Insert N characters at random positions (docSize)                  |     29554 bytes |     29554 bytes |     24746 bytes |     35509 bytes |
|[B1.4] Insert N characters at random positions (memUsed)                  |        896.6 kB |             0 B |             0 B |        676.6 kB |
|[B1.4] Insert N characters at random positions (parseTime)                |           92 ms |           44 ms |          136 ms |           89 ms |
|[B1.5] Insert N words at random positions (time)                          |          180 ms |          472 ms |         1456 ms |          116 ms |
|[B1.5] Insert N words at random positions (avgUpdateSize)                 |        36 bytes |        36 bytes |       131 bytes |        50 bytes |
|[B1.5] Insert N words at random positions (encodeTime)                    |           14 ms |            1 ms |           30 ms |           13 ms |
|[B1.5] Insert N words at random positions (docSize)                       |     87924 bytes |     87924 bytes |     96206 bytes |     91208 bytes |
|[B1.5] Insert N words at random positions (memUsed)                       |          2.1 MB |             0 B |             0 B |            1 MB |
|[B1.5] Insert N words at random positions (parseTime)                     |           82 ms |           47 ms |          288 ms |          110 ms |
|[B1.6] Insert string, then delete it (time)                               |           10 ms |            1 ms |           50 ms |           61 ms |
|[B1.6] Insert string, then delete it (avgUpdateSize)                      |      6053 bytes |      6053 bytes |      6338 bytes |     71836 bytes |
|[B1.6] Insert string, then delete it (encodeTime)                         |            0 ms |            0 ms |            4 ms |            3 ms |
|[B1.6] Insert string, then delete it (docSize)                            |        38 bytes |        38 bytes |      3996 bytes |       152 bytes |
|[B1.6] Insert string, then delete it (memUsed)                            |        203.3 kB |           696 B |             0 B |         33.4 kB |
|[B1.6] Insert string, then delete it (parseTime)                          |           40 ms |           42 ms |           86 ms |           84 ms |
|[B1.7] Insert/Delete strings at random positions (time)                   |          203 ms |          154 ms |         1228 ms |          180 ms |
|[B1.7] Insert/Delete strings at random positions (avgUpdateSize)          |        31 bytes |        31 bytes |       135 bytes |        67 bytes |
|[B1.7] Insert/Delete strings at random positions (encodeTime)             |           10 ms |            1 ms |           24 ms |            4 ms |
|[B1.7] Insert/Delete strings at random positions (docSize)                |     28377 bytes |     28377 bytes |     59284 bytes |     29972 bytes |
|[B1.7] Insert/Delete strings at random positions (memUsed)                |        929.3 kB |             0 B |             0 B |        463.4 kB |
|[B1.7] Insert/Delete strings at random positions (parseTime)              |           82 ms |           46 ms |          205 ms |           95 ms |
|[B1.8] Append N numbers (time)                                            |          177 ms |           37 ms |          320 ms |          127 ms |
|[B1.8] Append N numbers (avgUpdateSize)                                   |        32 bytes |        32 bytes |       125 bytes |        45 bytes |
|[B1.8] Append N numbers (encodeTime)                                      |            4 ms |            0 ms |           14 ms |            6 ms |
|[B1.8] Append N numbers (docSize)                                         |     35634 bytes |     35634 bytes |     26988 bytes |     47766 bytes |
|[B1.8] Append N numbers (memUsed)                                         |             0 B |             0 B |             0 B |        117.9 kB |
|[B1.8] Append N numbers (parseTime)                                       |           67 ms |           38 ms |          166 ms |          101 ms |
|[B1.9] Insert Array of N numbers (time)                                   |            2 ms |            4 ms |           49 ms |           35 ms |
|[B1.9] Insert Array of N numbers (avgUpdateSize)                          |     35657 bytes |     35656 bytes |     31199 bytes |     47678 bytes |
|[B1.9] Insert Array of N numbers (encodeTime)                             |            1 ms |            0 ms |            3 ms |            9 ms |
|[B1.9] Insert Array of N numbers (docSize)                                |     35657 bytes |     35656 bytes |     26956 bytes |     47787 bytes |
|[B1.9] Insert Array of N numbers (memUsed)                                |             0 B |           192 B |             0 B |         95.1 kB |
|[B1.9] Insert Array of N numbers (parseTime)                              |           37 ms |           45 ms |           81 ms |           97 ms |
|[B1.10] Prepend N numbers (time)                                          |          150 ms |           34 ms |          662 ms |          572 ms |
|[B1.10] Prepend N numbers (avgUpdateSize)                                 |        32 bytes |        36 bytes |       120 bytes |        52 bytes |
|[B1.10] Prepend N numbers (encodeTime)                                    |            6 ms |            1 ms |           14 ms |           16 ms |
|[B1.10] Prepend N numbers (docSize)                                       |     35665 bytes |     65658 bytes |     26990 bytes |    107405 bytes |
|[B1.10] Prepend N numbers (memUsed)                                       |          1.9 MB |         98.3 kB |             0 B |          1.9 MB |
|[B1.10] Prepend N numbers (parseTime)                                     |           76 ms |           38 ms |          144 ms |          115 ms |
|[B1.11] Insert N numbers at random positions (time)                       |          168 ms |          157 ms |          704 ms |          126 ms |
|[B1.11] Insert N numbers at random positions (avgUpdateSize)              |        34 bytes |        34 bytes |       125 bytes |        48 bytes |
|[B1.11] Insert N numbers at random positions (encodeTime)                 |           13 ms |            1 ms |           15 ms |           13 ms |
|[B1.11] Insert N numbers at random positions (docSize)                    |     59137 bytes |     59152 bytes |     47749 bytes |     77400 bytes |
|[B1.11] Insert N numbers at random positions (memUsed)                    |            2 MB |             0 B |             0 B |             0 B |
|[B1.11] Insert N numbers at random positions (parseTime)                  |           65 ms |           45 ms |          139 ms |          117 ms |
|[B2.1] Concurrently insert string of length N at index 0 (time)           |            3 ms |            0 ms |          159 ms |            6 ms |
|[B2.1] Concurrently insert string of length N at index 0 (updateSize)     |      6094 bytes |      6094 bytes |      9499 bytes |      6136 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (encodeTime)     |            1 ms |            0 ms |            5 ms |            1 ms |
|[B2.1] Concurrently insert string of length N at index 0 (docSize)        |     12151 bytes |     12151 bytes |      8014 bytes |     12304 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (memUsed)        |             0 B |           304 B |             0 B |             0 B |
|[B2.1] Concurrently insert string of length N at index 0 (parseTime)      |           43 ms |           42 ms |          128 ms |           86 ms |
|[B2.2] Concurrently insert N characters at random positions (time)        |          105 ms |          409 ms |         1863 ms |          170 ms |
|[B2.2] Concurrently insert N characters at random positions (updateSize)  |     33444 bytes |    177007 bytes |   1093293 bytes |    104977 bytes |
|[B2.2] Concurrently insert N characters at random positions (encodeTime)  |            3 ms |            1 ms |           23 ms |           16 ms |
|[B2.2] Concurrently insert N characters at random positions (docSize)     |     66852 bytes |     66860 bytes |     50707 bytes |     72356 bytes |
|[B2.2] Concurrently insert N characters at random positions (memUsed)     |          2.3 MB |             0 B |             0 B |          1.5 MB |
|[B2.2] Concurrently insert N characters at random positions (parseTime)   |           89 ms |           45 ms |          227 ms |          105 ms |
|[B2.3] Concurrently insert N words at random positions (time)             |          160 ms |         1079 ms |         4012 ms |          194 ms |
|[B2.3] Concurrently insert N words at random positions (updateSize)       |     88994 bytes |    215213 bytes |   1185202 bytes |    149822 bytes |
|[B2.3] Concurrently insert N words at random positions (encodeTime)       |            7 ms |            4 ms |           65 ms |           31 ms |
|[B2.3] Concurrently insert N words at random positions (docSize)          |    178137 bytes |    178130 bytes |    191500 bytes |    182599 bytes |
|[B2.3] Concurrently insert N words at random positions (memUsed)          |          5.2 MB |             0 B |             0 B |          3.2 MB |
|[B2.3] Concurrently insert N words at random positions (parseTime)        |          117 ms |           72 ms |          541 ms |          142 ms |
|[B2.4] Concurrently insert & delete (time)                                |          319 ms |         2795 ms |         8107 ms |          492 ms |
|[B2.4] Concurrently insert & delete (updateSize)                          |    139517 bytes |    398881 bytes |   2395876 bytes |    398559 bytes |
|[B2.4] Concurrently insert & delete (encodeTime)                          |           37 ms |            6 ms |          119 ms |           55 ms |
|[B2.4] Concurrently insert & delete (docSize)                             |    279172 bytes |    279172 bytes |    307365 bytes |    252675 bytes |
|[B2.4] Concurrently insert & delete (memUsed)                             |            9 MB |           464 B |             0 B |          4.7 MB |
|[B2.4] Concurrently insert & delete (parseTime)                           |          198 ms |           79 ms |          777 ms |          150 ms |
|[B3.1] 20√N clients concurrently set number in Map (time)                 |           95 ms |          280 ms |           39 ms |           90 ms |
|[B3.1] 20√N clients concurrently set number in Map (updateSize)           |     49157 bytes |     49167 bytes |    283296 bytes |     75396 bytes |
|[B3.1] 20√N clients concurrently set number in Map (encodeTime)           |            8 ms |            1 ms |           15 ms |           29 ms |
|[B3.1] 20√N clients concurrently set number in Map (docSize)              |     32193 bytes |     32192 bytes |     83099 bytes |     89379 bytes |
|[B3.1] 20√N clients concurrently set number in Map (memUsed)              |        562.8 kB |             0 B |             0 B |        595.1 kB |
|[B3.1] 20√N clients concurrently set number in Map (parseTime)            |           75 ms |           73 ms |          100 ms |          128 ms |
|[B3.2] 20√N clients concurrently set Object in Map (time)                 |           94 ms |          293 ms |           46 ms |          101 ms |
|[B3.2] 20√N clients concurrently set Object in Map (updateSize)           |     85080 bytes |     85071 bytes |    325370 bytes |    126710 bytes |
|[B3.2] 20√N clients concurrently set Object in Map (encodeTime)           |            4 ms |            2 ms |           22 ms |           10 ms |
|[B3.2] 20√N clients concurrently set Object in Map (docSize)              |     32220 bytes |     32215 bytes |     90427 bytes |    140693 bytes |
|[B3.2] 20√N clients concurrently set Object in Map (memUsed)              |         27.4 kB |             0 B |             0 B |        507.3 kB |
|[B3.2] 20√N clients concurrently set Object in Map (parseTime)            |          102 ms |           73 ms |          109 ms |          153 ms |
|[B3.3] 20√N clients concurrently set String in Map (time)                 |          205 ms |          290 ms |          239 ms |          196 ms |
|[B3.3] 20√N clients concurrently set String in Map (updateSize)           |   7826240 bytes |   7826228 bytes |   8063440 bytes |   7858620 bytes |
|[B3.3] 20√N clients concurrently set String in Map (encodeTime)           |            4 ms |            4 ms |           51 ms |           28 ms |
|[B3.3] 20√N clients concurrently set String in Map (docSize)              |     36851 bytes |     36831 bytes |     95041 bytes |   7869530 bytes |
|[B3.3] 20√N clients concurrently set String in Map (memUsed)              |        378.3 kB |             0 B |             0 B |            8 MB |
|[B3.3] 20√N clients concurrently set String in Map (parseTime)            |           84 ms |          100 ms |          145 ms |          260 ms |
|[B3.4] 20√N clients concurrently insert text in Array (time)              |           78 ms |          285 ms |           46 ms |           38 ms |
|[B3.4] 20√N clients concurrently insert text in Array (updateSize)        |     52749 bytes |     52752 bytes |    285330 bytes |     77430 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (encodeTime)        |            3 ms |            1 ms |           16 ms |           16 ms |
|[B3.4] 20√N clients concurrently insert text in Array (docSize)           |     26594 bytes |     26597 bytes |     83588 bytes |     86662 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (memUsed)           |        731.5 kB |             0 B |             0 B |        975.6 kB |
|[B3.4] 20√N clients concurrently insert text in Array (parseTime)         |           55 ms |           81 ms |           91 ms |          205 ms |
|[B4] Apply real-world editing dataset (time)                              |         2142 ms |        52650 ms |         2074 ms |         1866 ms |
|[B4] Apply real-world editing dataset (encodeTime)                        |           22 ms |            3 ms |          205 ms |           11 ms |
|[B4] Apply real-world editing dataset (docSize)                           |    159929 bytes |    159929 bytes |    129098 bytes |    167888 bytes |
|[B4] Apply real-world editing dataset (parseTime)                         |           46 ms |           16 ms |         1108 ms |           16 ms |
|[B4] Apply real-world editing dataset (memUsed)                           |          2.4 MB |           176 B |             0 B |          1.5 MB |
|[B4x100] Apply real-world editing dataset 100 times (time)                |       210514 ms |      3299520 ms |         skipped |       244638 ms |
|[B4x100] Apply real-world editing dataset 100 times (encodeTime)          |          998 ms |          202 ms |         skipped |         1725 ms |
|[B4x100] Apply real-world editing dataset 100 times (docSize)             |  15989245 bytes |  15989245 bytes |         skipped |  17844951 bytes |
|[B4x100] Apply real-world editing dataset 100 times (parseTime)           |         1900 ms |         1455 ms |         skipped |          698 ms |
|[B4x100] Apply real-world editing dataset 100 times (memUsed)             |        266.9 MB |           120 B |         skipped |        175.8 MB |

