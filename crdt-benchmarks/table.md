
> benchmarks@1.0.0 table
> node bin/render-table.js benchmarks/results.json 6000 yjs ywasm automerge-wasm fugue

N = 6000 | yjs | ywasm | automerge-wasm | fugue|
| :- |  -: | -: | -: | -:  |
|Version                                                                   |         13.5.12 |           0.9.3 |           0.1.3 |         skipped |
|Bundle size                                                               |    120421 bytes |    677653 bytes |    900030 bytes |         skipped |
|Bundle size (gzipped)                                                     |     36457 bytes |    213833 bytes |    321760 bytes |         skipped |
|[B1.1] Append N characters (time)                                         |          271 ms |          166 ms |          228 ms |          150 ms |
|[B1.1] Append N characters (avgUpdateSize)                                |        27 bytes |        27 bytes |       121 bytes |        39 bytes |
|[B1.1] Append N characters (encodeTime)                                   |            1 ms |            0 ms |            9 ms |            1 ms |
|[B1.1] Append N characters (docSize)                                      |      6031 bytes |      6031 bytes |      3995 bytes |      6160 bytes |
|[B1.1] Append N characters (memUsed)                                      |             0 B |             0 B |             0 B |             0 B |
|[B1.1] Append N characters (parseTime)                                    |           83 ms |           59 ms |          119 ms |           78 ms |
|[B1.2] Insert string of length N (time)                                   |            2 ms |            0 ms |           19 ms |            2 ms |
|[B1.2] Insert string of length N (avgUpdateSize)                          |      6031 bytes |      6031 bytes |      6201 bytes |      6049 bytes |
|[B1.2] Insert string of length N (encodeTime)                             |            1 ms |            0 ms |            2 ms |            0 ms |
|[B1.2] Insert string of length N (docSize)                                |      6031 bytes |      6031 bytes |      3977 bytes |      6158 bytes |
|[B1.2] Insert string of length N (memUsed)                                |             0 B |           416 B |             0 B |         10.7 kB |
|[B1.2] Insert string of length N (parseTime)                              |           83 ms |           57 ms |           72 ms |           73 ms |
|[B1.3] Prepend N characters (time)                                        |          204 ms |           23 ms |           80 ms |          563 ms |
|[B1.3] Prepend N characters (avgUpdateSize)                               |        27 bytes |        27 bytes |       116 bytes |        46 bytes |
|[B1.3] Prepend N characters (encodeTime)                                  |            6 ms |            0 ms |           11 ms |           10 ms |
|[B1.3] Prepend N characters (docSize)                                     |      6041 bytes |      6041 bytes |      3991 bytes |     65781 bytes |
|[B1.3] Prepend N characters (memUsed)                                     |        747.6 kB |             0 B |             0 B |          1.6 MB |
|[B1.3] Prepend N characters (parseTime)                                   |          100 ms |           62 ms |          188 ms |           87 ms |
|[B1.4] Insert N characters at random positions (time)                     |          226 ms |          114 ms |          494 ms |          110 ms |
|[B1.4] Insert N characters at random positions (avgUpdateSize)            |        29 bytes |        29 bytes |       121 bytes |        42 bytes |
|[B1.4] Insert N characters at random positions (encodeTime)               |           16 ms |            0 ms |           13 ms |            6 ms |
|[B1.4] Insert N characters at random positions (docSize)                  |     29554 bytes |     29554 bytes |     24746 bytes |     35509 bytes |
|[B1.4] Insert N characters at random positions (memUsed)                  |        540.6 kB |             0 B |             0 B |        676.6 kB |
|[B1.4] Insert N characters at random positions (parseTime)                |          135 ms |           61 ms |          193 ms |           89 ms |
|[B1.5] Insert N words at random positions (time)                          |          278 ms |          385 ms |          878 ms |          116 ms |
|[B1.5] Insert N words at random positions (avgUpdateSize)                 |        36 bytes |        36 bytes |       131 bytes |        50 bytes |
|[B1.5] Insert N words at random positions (encodeTime)                    |           21 ms |            1 ms |           36 ms |           13 ms |
|[B1.5] Insert N words at random positions (docSize)                       |     87924 bytes |     87924 bytes |     96206 bytes |     91208 bytes |
|[B1.5] Insert N words at random positions (memUsed)                       |          2.2 MB |             0 B |             0 B |            1 MB |
|[B1.5] Insert N words at random positions (parseTime)                     |          144 ms |           65 ms |          339 ms |          110 ms |
|[B1.6] Insert string, then delete it (time)                               |            6 ms |            1 ms |           42 ms |           61 ms |
|[B1.6] Insert string, then delete it (avgUpdateSize)                      |      6053 bytes |      6053 bytes |      6338 bytes |     71836 bytes |
|[B1.6] Insert string, then delete it (encodeTime)                         |            0 ms |            0 ms |            5 ms |            3 ms |
|[B1.6] Insert string, then delete it (docSize)                            |        38 bytes |        38 bytes |      3996 bytes |       152 bytes |
|[B1.6] Insert string, then delete it (memUsed)                            |             0 B |           728 B |           440 B |         33.4 kB |
|[B1.6] Insert string, then delete it (parseTime)                          |           85 ms |           61 ms |          182 ms |           84 ms |
|[B1.7] Insert/Delete strings at random positions (time)                   |          292 ms |          119 ms |          921 ms |          180 ms |
|[B1.7] Insert/Delete strings at random positions (avgUpdateSize)          |        31 bytes |        31 bytes |       135 bytes |        67 bytes |
|[B1.7] Insert/Delete strings at random positions (encodeTime)             |           23 ms |            0 ms |           30 ms |            4 ms |
|[B1.7] Insert/Delete strings at random positions (docSize)                |     28377 bytes |     28377 bytes |     59284 bytes |     29972 bytes |
|[B1.7] Insert/Delete strings at random positions (memUsed)                |        638.3 kB |             0 B |             0 B |        463.4 kB |
|[B1.7] Insert/Delete strings at random positions (parseTime)              |          145 ms |           64 ms |          296 ms |           95 ms |
|[B1.8] Append N numbers (time)                                            |          279 ms |           32 ms |          328 ms |          127 ms |
|[B1.8] Append N numbers (avgUpdateSize)                                   |        32 bytes |        32 bytes |       125 bytes |        45 bytes |
|[B1.8] Append N numbers (encodeTime)                                      |            6 ms |            0 ms |           16 ms |            6 ms |
|[B1.8] Append N numbers (docSize)                                         |     35634 bytes |     35634 bytes |     26988 bytes |     47766 bytes |
|[B1.8] Append N numbers (memUsed)                                         |             0 B |             0 B |             0 B |        117.9 kB |
|[B1.8] Append N numbers (parseTime)                                       |           90 ms |           64 ms |          203 ms |          101 ms |
|[B1.9] Insert Array of N numbers (time)                                   |            4 ms |            3 ms |           30 ms |           35 ms |
|[B1.9] Insert Array of N numbers (avgUpdateSize)                          |     35657 bytes |     35657 bytes |     31199 bytes |     47678 bytes |
|[B1.9] Insert Array of N numbers (encodeTime)                             |            1 ms |            0 ms |            4 ms |            9 ms |
|[B1.9] Insert Array of N numbers (docSize)                                |     35657 bytes |     35657 bytes |     26956 bytes |     47787 bytes |
|[B1.9] Insert Array of N numbers (memUsed)                                |        231.3 kB |           560 B |           640 B |         95.1 kB |
|[B1.9] Insert Array of N numbers (parseTime)                              |           86 ms |           70 ms |          152 ms |           97 ms |
|[B1.10] Prepend N numbers (time)                                          |          201 ms |           30 ms |          477 ms |          572 ms |
|[B1.10] Prepend N numbers (avgUpdateSize)                                 |        32 bytes |        36 bytes |       120 bytes |        52 bytes |
|[B1.10] Prepend N numbers (encodeTime)                                    |           14 ms |            1 ms |           16 ms |           16 ms |
|[B1.10] Prepend N numbers (docSize)                                       |     35665 bytes |     65658 bytes |     26990 bytes |    107405 bytes |
|[B1.10] Prepend N numbers (memUsed)                                       |          1.9 MB |             0 B |             0 B |          1.9 MB |
|[B1.10] Prepend N numbers (parseTime)                                     |          123 ms |           68 ms |          189 ms |          115 ms |
|[B1.11] Insert N numbers at random positions (time)                       |          263 ms |          123 ms |          507 ms |          126 ms |
|[B1.11] Insert N numbers at random positions (avgUpdateSize)              |        34 bytes |        34 bytes |       125 bytes |        48 bytes |
|[B1.11] Insert N numbers at random positions (encodeTime)                 |           19 ms |            1 ms |           15 ms |           13 ms |
|[B1.11] Insert N numbers at random positions (docSize)                    |     59137 bytes |     59152 bytes |     47749 bytes |     77400 bytes |
|[B1.11] Insert N numbers at random positions (memUsed)                    |          1.8 MB |             0 B |             0 B |             0 B |
|[B1.11] Insert N numbers at random positions (parseTime)                  |          131 ms |           69 ms |          196 ms |          117 ms |
|[B2.1] Concurrently insert string of length N at index 0 (time)           |            5 ms |            0 ms |          101 ms |            6 ms |
|[B2.1] Concurrently insert string of length N at index 0 (updateSize)     |      6094 bytes |      6094 bytes |      9499 bytes |      6136 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (encodeTime)     |            1 ms |            0 ms |            5 ms |            1 ms |
|[B2.1] Concurrently insert string of length N at index 0 (docSize)        |     12152 bytes |     12152 bytes |      8014 bytes |     12304 bytes |
|[B2.1] Concurrently insert string of length N at index 0 (memUsed)        |             0 B |           112 B |             0 B |             0 B |
|[B2.1] Concurrently insert string of length N at index 0 (parseTime)      |           87 ms |           69 ms |          168 ms |           86 ms |
|[B2.2] Concurrently insert N characters at random positions (time)        |          138 ms |          322 ms |         1290 ms |          170 ms |
|[B2.2] Concurrently insert N characters at random positions (updateSize)  |     33444 bytes |    177007 bytes |   1093293 bytes |    104977 bytes |
|[B2.2] Concurrently insert N characters at random positions (encodeTime)  |            3 ms |            1 ms |           27 ms |           16 ms |
|[B2.2] Concurrently insert N characters at random positions (docSize)     |     66860 bytes |     66860 bytes |     50706 bytes |     72356 bytes |
|[B2.2] Concurrently insert N characters at random positions (memUsed)     |          2.5 MB |             0 B |             0 B |          1.5 MB |
|[B2.2] Concurrently insert N characters at random positions (parseTime)   |          157 ms |           77 ms |          275 ms |          105 ms |
|[B2.3] Concurrently insert N words at random positions (time)             |          219 ms |          898 ms |         2500 ms |          194 ms |
|[B2.3] Concurrently insert N words at random positions (updateSize)       |     88994 bytes |    215213 bytes |   1185202 bytes |    149822 bytes |
|[B2.3] Concurrently insert N words at random positions (encodeTime)       |            7 ms |            3 ms |           71 ms |           31 ms |
|[B2.3] Concurrently insert N words at random positions (docSize)          |    178130 bytes |    178130 bytes |    191501 bytes |    182599 bytes |
|[B2.3] Concurrently insert N words at random positions (memUsed)          |          5.2 MB |             0 B |             0 B |          3.2 MB |
|[B2.3] Concurrently insert N words at random positions (parseTime)        |          183 ms |          114 ms |          512 ms |          142 ms |
|[B2.4] Concurrently insert & delete (time)                                |          457 ms |         2396 ms |         5080 ms |          492 ms |
|[B2.4] Concurrently insert & delete (updateSize)                          |    139517 bytes |    398881 bytes |   2395876 bytes |    398559 bytes |
|[B2.4] Concurrently insert & delete (encodeTime)                          |           32 ms |            4 ms |          142 ms |           55 ms |
|[B2.4] Concurrently insert & delete (docSize)                             |    279172 bytes |    279166 bytes |    307363 bytes |    252675 bytes |
|[B2.4] Concurrently insert & delete (memUsed)                             |          8.5 MB |             0 B |             0 B |          4.7 MB |
|[B2.4] Concurrently insert & delete (parseTime)                           |          297 ms |          127 ms |          968 ms |          150 ms |
|[B3.1] 20√N clients concurrently set number in Map (time)                 |          128 ms |          243 ms |           38 ms |           90 ms |
|[B3.1] 20√N clients concurrently set number in Map (updateSize)           |     49172 bytes |     49173 bytes |    283296 bytes |     75396 bytes |
|[B3.1] 20√N clients concurrently set number in Map (encodeTime)           |           13 ms |            1 ms |           15 ms |           29 ms |
|[B3.1] 20√N clients concurrently set number in Map (docSize)              |     32219 bytes |     32234 bytes |     83218 bytes |     89379 bytes |
|[B3.1] 20√N clients concurrently set number in Map (memUsed)              |        533.6 kB |            72 B |             0 B |        595.1 kB |
|[B3.1] 20√N clients concurrently set number in Map (parseTime)            |          132 ms |          117 ms |          157 ms |          128 ms |
|[B3.2] 20√N clients concurrently set Object in Map (time)                 |          125 ms |          249 ms |           48 ms |          101 ms |
|[B3.2] 20√N clients concurrently set Object in Map (updateSize)           |     85090 bytes |     85087 bytes |    325370 bytes |    126710 bytes |
|[B3.2] 20√N clients concurrently set Object in Map (encodeTime)           |           12 ms |            1 ms |           19 ms |           10 ms |
|[B3.2] 20√N clients concurrently set Object in Map (docSize)              |     32268 bytes |     32257 bytes |     90437 bytes |    140693 bytes |
|[B3.2] 20√N clients concurrently set Object in Map (memUsed)              |             0 B |             0 B |             0 B |        507.3 kB |
|[B3.2] 20√N clients concurrently set Object in Map (parseTime)            |          126 ms |          112 ms |          148 ms |          153 ms |
|[B3.3] 20√N clients concurrently set String in Map (time)                 |          239 ms |          312 ms |          129 ms |          196 ms |
|[B3.3] 20√N clients concurrently set String in Map (updateSize)           |   7826224 bytes |   7826234 bytes |   8063440 bytes |   7858620 bytes |
|[B3.3] 20√N clients concurrently set String in Map (encodeTime)           |            7 ms |            3 ms |           50 ms |           28 ms |
|[B3.3] 20√N clients concurrently set String in Map (docSize)              |     36822 bytes |     38386 bytes |     95056 bytes |   7869530 bytes |
|[B3.3] 20√N clients concurrently set String in Map (memUsed)              |        330.6 kB |             0 B |             0 B |            8 MB |
|[B3.3] 20√N clients concurrently set String in Map (parseTime)            |          128 ms |          175 ms |          213 ms |          260 ms |
|[B3.4] 20√N clients concurrently insert text in Array (time)              |           97 ms |          327 ms |           48 ms |           38 ms |
|[B3.4] 20√N clients concurrently insert text in Array (updateSize)        |     52736 bytes |     52742 bytes |    285330 bytes |     77430 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (encodeTime)        |            4 ms |            1 ms |           14 ms |           16 ms |
|[B3.4] 20√N clients concurrently insert text in Array (docSize)           |     26581 bytes |     26587 bytes |     83577 bytes |     86662 bytes |
|[B3.4] 20√N clients concurrently insert text in Array (memUsed)           |        677.4 kB |             0 B |             0 B |        975.6 kB |
|[B3.4] 20√N clients concurrently insert text in Array (parseTime)         |          118 ms |          148 ms |          177 ms |          205 ms |
|[B4] Apply real-world editing dataset (time)                              |         1938 ms |        53190 ms |        13954 ms |         1866 ms |
|[B4] Apply real-world editing dataset (encodeTime)                        |           29 ms |            5 ms |          251 ms |           11 ms |
|[B4] Apply real-world editing dataset (docSize)                           |    159929 bytes |    159929 bytes |    129098 bytes |    167888 bytes |
|[B4] Apply real-world editing dataset (parseTime)                         |           87 ms |           13 ms |         1204 ms |           16 ms |
|[B4] Apply real-world editing dataset (memUsed)                           |            3 MB |           848 B |             0 B |          1.5 MB |
|[B4x100] Apply real-world editing dataset 100 times (time)                |       209907 ms |      3299520 ms |         skipped |       244638 ms |
|[B4x100] Apply real-world editing dataset 100 times (encodeTime)          |          705 ms |          202 ms |         skipped |         1725 ms |
|[B4x100] Apply real-world editing dataset 100 times (docSize)             |  15989245 bytes |  15989245 bytes |         skipped |  17844951 bytes |
|[B4x100] Apply real-world editing dataset 100 times (parseTime)           |         2223 ms |         1455 ms |         skipped |          698 ms |
|[B4x100] Apply real-world editing dataset 100 times (memUsed)             |        266.8 MB |           120 B |         skipped |        175.8 MB |

