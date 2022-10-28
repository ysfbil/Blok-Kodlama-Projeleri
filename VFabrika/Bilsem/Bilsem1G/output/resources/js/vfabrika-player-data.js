var vFabrikaPlayerData_Bilsem1G = {
  "isLooping": false,
  "isAutoPlay": true,
  "stageWidth": 1000,
  "stageHeight": 625,
  "frameCount": 31,
  "framesPerSecond": 24.0,
  "omitConsoleMessages": false,
  "layers": [
    {
      "uniqueId": "05d52559-2c6a-42e2-9aac-8c0f17a9777a",
      "name": "kod",
      "underscoredName": "kod",
      "keyframes": [
        {
          "uniqueId": "d59ac512-c425-4acf-86aa-570b6910b1c4",
          "frameIndex": 0,
          "frameCount": 30,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "timerDesignObject",
              "type": "timer",
              "id": "timer1",
              "uniqueId": "85b7969c-b4cf-45d4-9178-680075c96326",
              "enabled": false,
              "tag": "",
              "location": {
                "x": -152,
                "y": 309
              },
              "x": -152,
              "y": 309,
              "width": 48,
              "height": 48,
              "groupName": "timer",
              "groupOrder": 1,
              "interval": 2000,
              "isAutoStart": false
            },
            {
              "typeName": "soundDesignObject",
              "type": "sound",
              "id": "SDogru",
              "uniqueId": "d68ca121-31ed-4199-ad3f-bcfe4dfffafe",
              "enabled": false,
              "tag": "",
              "location": {
                "x": -152,
                "y": 422
              },
              "x": -152,
              "y": 422,
              "width": 48,
              "height": 48,
              "groupName": "SDogru",
              "groupOrder": 0,
              "soundUrl": "dogru",
              "soundFileName": "dogru",
              "soundPath": "resources/sound/",
              "isAutoPlay": false,
              "isLooped": false
            },
            {
              "typeName": "soundDesignObject",
              "type": "sound",
              "id": "SHata",
              "uniqueId": "2a5e8746-9285-4420-9f58-bbfd75d94149",
              "enabled": false,
              "tag": "",
              "location": {
                "x": -152,
                "y": 505
              },
              "x": -152,
              "y": 505,
              "width": 48,
              "height": 48,
              "groupName": "SHata",
              "groupOrder": 0,
              "soundUrl": "hata",
              "soundFileName": "hata",
              "soundPath": "resources/sound/",
              "isAutoPlay": false,
              "isLooped": false
            },
            {
              "typeName": "delayDesignObject",
              "type": "delay",
              "id": "delay1",
              "uniqueId": "867c4911-0e5a-44d1-a011-eedd2eeb8323",
              "enabled": false,
              "tag": "süre=12000ms",
              "location": {
                "x": -152,
                "y": 184
              },
              "x": -152,
              "y": 184,
              "width": 48,
              "height": 48,
              "groupName": "delay",
              "groupOrder": 1,
              "interval": 20000,
              "isAutoStart": false
            },
            {
              "typeName": "delayDesignObject",
              "type": "delay",
              "id": "delay2",
              "uniqueId": "18e3bd0d-4550-44d4-8e37-745f23d2890d",
              "enabled": false,
              "tag": "süre=12000ms",
              "location": {
                "x": -152,
                "y": 49
              },
              "x": -152,
              "y": 49,
              "width": 48,
              "height": 48,
              "groupName": "delay",
              "groupOrder": 2,
              "interval": 20000,
              "isAutoStart": false
            }
          ],
          "blocks": [
            {
              "uniqueId": "1ce86ea0-6921-451f-be15-b5178b35d4e8",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "comment",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "cevaplar"
                    }
                  ],
                  "block": {
                    "uniqueId": "023dc933-3bf3-4b2a-b7b8-ba7483136b47",
                    "type": "textValue",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "value",
                            "type": "textbox",
                            "value": "10,a,10,c,15,a,m20,c,a,d,20,d,20,a,10,d,b,c,a,b,c,c,d,d,m40,c,d,b,a"
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "696aabe9-f362-4041-8e9d-4a2ad63c9cbd",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "gorunumBelirle"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "483632e5-2938-4c62-88ff-5cdc22c8a5fd",
                    "type": "controlIfThen",
                    "inputs": [
                      {
                        "name": "if",
                        "type": "pin",
                        "items": [
                          {
                            "name": "mutator",
                            "type": "button"
                          }
                        ],
                        "block": {
                          "uniqueId": "9b4b8c59-a7b9-473b-ad82-ec6e1cc3d041",
                          "type": "mathEquality",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "containerA",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "e306313c-0cb7-4edd-93ea-3cbdefa59c01",
                                    "type": "variableGetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "cevap"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                },
                                {
                                  "name": "criteria",
                                  "type": "dropdown",
                                  "value": "greater"
                                },
                                {
                                  "name": "containerB",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "bfcefe3f-5ff4-4add-b66d-cd6a6bc9f0e2",
                                    "type": "mathValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "numeric",
                                            "value": 0
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "name": "then",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "1b9079b1-e818-4c4b-86ea-734a21d49bb1",
                          "type": "procedureCall",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "sabit_gorsel"
                                }
                              ]
                            },
                            {
                              "name": "input0",
                              "type": "pin",
                              "items": [],
                              "block": {
                                "uniqueId": "4b05496d-3ad7-4455-9173-4a284cf2eec0",
                                "type": "mathMultiply",
                                "inputs": [
                                  {
                                    "name": "value",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "mutator",
                                        "type": "button"
                                      },
                                      {
                                        "name": "853329f1-a728-42b7-a39c-1d0bf8a5b6cb",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "8e84a83a-8291-4793-a171-143f626a40b8",
                                          "type": "variableGetValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "name",
                                                  "type": "dropdown",
                                                  "value": "cevap"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "mutatorItemUniqueId": "853329f1-a728-42b7-a39c-1d0bf8a5b6cb",
                                        "mutatorName": "container"
                                      },
                                      {
                                        "name": "cdf08450-360d-4fe8-9e59-a8c3832668cb",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "055be200-2974-4ed9-83fd-aa36e7e550da",
                                          "type": "mathValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "value",
                                                  "type": "numeric",
                                                  "value": 1000
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "mutatorItemUniqueId": "cdf08450-360d-4fe8-9e59-a8c3832668cb",
                                        "mutatorName": "container"
                                      }
                                    ]
                                  }
                                ],
                                "mutatorItems": [
                                  {
                                    "uniqueId": "853329f1-a728-42b7-a39c-1d0bf8a5b6cb",
                                    "name": "operation",
                                    "allowOnlyOnce": false,
                                    "defaultValue": "×"
                                  },
                                  {
                                    "uniqueId": "cdf08450-360d-4fe8-9e59-a8c3832668cb",
                                    "name": "operation",
                                    "allowOnlyOnce": false,
                                    "defaultValue": "×"
                                  }
                                ]
                              },
                              "mutatorItemUniqueId": "33eb05f3-fe45-4c85-8fe4-11255a9ac888"
                            }
                          ],
                          "mutatorItems": [
                            {
                              "uniqueId": "33eb05f3-fe45-4c85-8fe4-11255a9ac888",
                              "name": "input",
                              "allowOnlyOnce": false,
                              "defaultValue": "sure"
                            }
                          ],
                          "flowBlock": {
                            "uniqueId": "79304015-a4eb-4ada-b1a0-c0741c1f29f7",
                            "type": "variableSetValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "sabitGorsel"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "7c7e7203-1b6c-41ee-b097-9c3ab009c58d",
                                  "type": "logicValue",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "none",
                                      "items": [
                                        {
                                          "name": "value",
                                          "type": "dropdown",
                                          "value": true
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      },
                      {
                        "name": "elseIf0",
                        "type": "pin",
                        "items": [],
                        "block": {
                          "uniqueId": "53371efb-663f-47d8-8546-57dc5a8c74b4",
                          "type": "textContains",
                          "inputs": [
                            {
                              "name": "textA",
                              "type": "pin",
                              "items": [],
                              "block": {
                                "uniqueId": "84d1b72e-c2fc-449a-b01f-06d75c811885",
                                "type": "variableGetValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "name",
                                        "type": "dropdown",
                                        "value": "cevap"
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            {
                              "name": "textB",
                              "type": "pin",
                              "items": [],
                              "block": {
                                "uniqueId": "ff26d885-33a9-4e59-83d0-cc0efaa5e384",
                                "type": "textValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "textbox",
                                        "value": "m"
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "mutatorItemUniqueId": "9e94c225-8bfc-472a-8a88-60271654d846",
                        "mutatorName": "elseIf"
                      },
                      {
                        "name": "elseIf1",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "d1a64248-4b10-4947-b6bc-ddcdfa4751f2",
                          "type": "procedureCall",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "metin_sorusu"
                                }
                              ]
                            },
                            {
                              "name": "input0",
                              "type": "pin",
                              "items": [],
                              "block": {
                                "uniqueId": "4ad452f1-e5e8-4f57-a7a4-c61e8f098d1b",
                                "type": "mathMultiply",
                                "inputs": [
                                  {
                                    "name": "value",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "mutator",
                                        "type": "button"
                                      },
                                      {
                                        "name": "853329f1-a728-42b7-a39c-1d0bf8a5b6cb",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "19f570d3-3c65-40bf-9339-973358e4a816",
                                          "type": "listGetItemAt",
                                          "inputs": [
                                            {
                                              "name": "list",
                                              "type": "pin",
                                              "items": [],
                                              "block": {
                                                "uniqueId": "10784503-5c19-42cc-912d-44cd494e7c29",
                                                "type": "textSplit",
                                                "inputs": [
                                                  {
                                                    "name": "textA",
                                                    "type": "pin",
                                                    "items": [],
                                                    "block": {
                                                      "uniqueId": "06a70454-2b75-476b-a200-7ff35e76c630",
                                                      "type": "variableGetValue",
                                                      "inputs": [
                                                        {
                                                          "name": "default",
                                                          "type": "none",
                                                          "items": [
                                                            {
                                                              "name": "name",
                                                              "type": "dropdown",
                                                              "value": "cevap"
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  },
                                                  {
                                                    "name": "textB",
                                                    "type": "pin",
                                                    "items": [],
                                                    "block": {
                                                      "uniqueId": "e343cff7-0e98-4d8e-a37c-f9b49eecb99c",
                                                      "type": "textValue",
                                                      "inputs": [
                                                        {
                                                          "name": "default",
                                                          "type": "none",
                                                          "items": [
                                                            {
                                                              "name": "value",
                                                              "type": "textbox",
                                                              "value": "m"
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  }
                                                ]
                                              }
                                            },
                                            {
                                              "name": "index",
                                              "type": "pin",
                                              "items": [],
                                              "block": {
                                                "uniqueId": "0340af8b-1b12-4b58-91cd-991e2b8ec6cc",
                                                "type": "mathValue",
                                                "inputs": [
                                                  {
                                                    "name": "default",
                                                    "type": "none",
                                                    "items": [
                                                      {
                                                        "name": "value",
                                                        "type": "numeric",
                                                        "value": 1
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        },
                                        "mutatorItemUniqueId": "853329f1-a728-42b7-a39c-1d0bf8a5b6cb",
                                        "mutatorName": "container"
                                      },
                                      {
                                        "name": "cdf08450-360d-4fe8-9e59-a8c3832668cb",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "055be200-2974-4ed9-83fd-aa36e7e550da",
                                          "type": "mathValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "value",
                                                  "type": "numeric",
                                                  "value": 1000
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "mutatorItemUniqueId": "cdf08450-360d-4fe8-9e59-a8c3832668cb",
                                        "mutatorName": "container"
                                      }
                                    ]
                                  }
                                ],
                                "mutatorItems": [
                                  {
                                    "uniqueId": "853329f1-a728-42b7-a39c-1d0bf8a5b6cb",
                                    "name": "operation",
                                    "allowOnlyOnce": false,
                                    "defaultValue": "×"
                                  },
                                  {
                                    "uniqueId": "cdf08450-360d-4fe8-9e59-a8c3832668cb",
                                    "name": "operation",
                                    "allowOnlyOnce": false,
                                    "defaultValue": "×"
                                  }
                                ]
                              },
                              "mutatorItemUniqueId": "33eb05f3-fe45-4c85-8fe4-11255a9ac888"
                            }
                          ],
                          "mutatorItems": [
                            {
                              "uniqueId": "33eb05f3-fe45-4c85-8fe4-11255a9ac888",
                              "name": "input",
                              "allowOnlyOnce": false,
                              "defaultValue": "sure"
                            }
                          ],
                          "flowBlock": {
                            "uniqueId": "79304015-a4eb-4ada-b1a0-c0741c1f29f7",
                            "type": "variableSetValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "sabitGorsel"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "7c7e7203-1b6c-41ee-b097-9c3ab009c58d",
                                  "type": "logicValue",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "none",
                                      "items": [
                                        {
                                          "name": "value",
                                          "type": "dropdown",
                                          "value": true
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        "mutatorItemUniqueId": "9e94c225-8bfc-472a-8a88-60271654d846",
                        "mutatorName": "then"
                      },
                      {
                        "name": "else0",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "44769a48-789b-447d-aa99-adcce39cc41f",
                          "type": "variableSetValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "sabitGorsel"
                                }
                              ],
                              "block": {
                                "uniqueId": "7c7e7203-1b6c-41ee-b097-9c3ab009c58d",
                                "type": "logicValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "dropdown",
                                        "value": false
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "mutatorItemUniqueId": "f8b94c1f-1ae4-410d-aa1f-c52668105434",
                        "mutatorName": "else"
                      }
                    ],
                    "mutatorItems": [
                      {
                        "uniqueId": "9e94c225-8bfc-472a-8a88-60271654d846",
                        "name": "elseIf",
                        "allowOnlyOnce": false,
                        "defaultValue": ""
                      },
                      {
                        "uniqueId": "f8b94c1f-1ae4-410d-aa1f-c52668105434",
                        "name": "else",
                        "allowOnlyOnce": true,
                        "defaultValue": ""
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "ec3aa145-b423-4e4d-9ca2-fa092f14bcf3",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "comment",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "rectBoyutGuncelle"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "93f325af-d87c-4047-8d69-7bbe4d32d728",
                    "type": "primitiveDesignObjectSetProperty",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "rectangle7"
                          },
                          {
                            "name": "propertyName",
                            "type": "dropdown",
                            "value": "width"
                          }
                        ],
                        "block": {
                          "uniqueId": "2a9f40ec-9297-4507-bbfd-83e78d07cae8",
                          "type": "primitiveDesignObjectGetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "rectangle7"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "width"
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "645205ec-6b7e-43d0-8166-df1608b8f440",
                      "type": "primitiveDesignObjectSetProperty",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "id",
                              "type": "dropdown",
                              "value": "rectangle7"
                            },
                            {
                              "name": "propertyName",
                              "type": "dropdown",
                              "value": "height"
                            }
                          ],
                          "block": {
                            "uniqueId": "2a9f40ec-9297-4507-bbfd-83e78d07cae8",
                            "type": "primitiveDesignObjectGetProperty",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "id",
                                    "type": "dropdown",
                                    "value": "rectangle7"
                                  },
                                  {
                                    "name": "propertyName",
                                    "type": "dropdown",
                                    "value": "height"
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "01d7c53a-412a-41e9-9bfd-b51792ab57dc",
                        "type": "primitiveDesignObjectSetProperty",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "rectangle4"
                              },
                              {
                                "name": "propertyName",
                                "type": "dropdown",
                                "value": "width"
                              }
                            ],
                            "block": {
                              "uniqueId": "2a9f40ec-9297-4507-bbfd-83e78d07cae8",
                              "type": "primitiveDesignObjectGetProperty",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "rectangle7"
                                    },
                                    {
                                      "name": "propertyName",
                                      "type": "dropdown",
                                      "value": "width"
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "645205ec-6b7e-43d0-8166-df1608b8f440",
                          "type": "primitiveDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "rectangle4"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "height"
                                }
                              ],
                              "block": {
                                "uniqueId": "2a9f40ec-9297-4507-bbfd-83e78d07cae8",
                                "type": "primitiveDesignObjectGetProperty",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "id",
                                        "type": "dropdown",
                                        "value": "rectangle7"
                                      },
                                      {
                                        "name": "propertyName",
                                        "type": "dropdown",
                                        "value": "height"
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "flowBlock": {
                            "uniqueId": "fa125bbb-a0f4-4cfa-af75-c81f3e686394",
                            "type": "primitiveDesignObjectSetProperty",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "id",
                                    "type": "dropdown",
                                    "value": "rectangle5"
                                  },
                                  {
                                    "name": "propertyName",
                                    "type": "dropdown",
                                    "value": "width"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "2a9f40ec-9297-4507-bbfd-83e78d07cae8",
                                  "type": "primitiveDesignObjectGetProperty",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "none",
                                      "items": [
                                        {
                                          "name": "id",
                                          "type": "dropdown",
                                          "value": "rectangle7"
                                        },
                                        {
                                          "name": "propertyName",
                                          "type": "dropdown",
                                          "value": "width"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ],
                            "flowBlock": {
                              "uniqueId": "645205ec-6b7e-43d0-8166-df1608b8f440",
                              "type": "primitiveDesignObjectSetProperty",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "rectangle5"
                                    },
                                    {
                                      "name": "propertyName",
                                      "type": "dropdown",
                                      "value": "height"
                                    }
                                  ],
                                  "block": {
                                    "uniqueId": "2a9f40ec-9297-4507-bbfd-83e78d07cae8",
                                    "type": "primitiveDesignObjectGetProperty",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "id",
                                            "type": "dropdown",
                                            "value": "rectangle7"
                                          },
                                          {
                                            "name": "propertyName",
                                            "type": "dropdown",
                                            "value": "height"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                }
                              ],
                              "flowBlock": {
                                "uniqueId": "e6237950-9141-44fe-81c8-08d20d4c56a9",
                                "type": "primitiveDesignObjectSetProperty",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "pin",
                                    "items": [
                                      {
                                        "name": "id",
                                        "type": "dropdown",
                                        "value": "rectangle6"
                                      },
                                      {
                                        "name": "propertyName",
                                        "type": "dropdown",
                                        "value": "width"
                                      }
                                    ],
                                    "block": {
                                      "uniqueId": "2a9f40ec-9297-4507-bbfd-83e78d07cae8",
                                      "type": "primitiveDesignObjectGetProperty",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "id",
                                              "type": "dropdown",
                                              "value": "rectangle7"
                                            },
                                            {
                                              "name": "propertyName",
                                              "type": "dropdown",
                                              "value": "width"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ],
                                "flowBlock": {
                                  "uniqueId": "645205ec-6b7e-43d0-8166-df1608b8f440",
                                  "type": "primitiveDesignObjectSetProperty",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "pin",
                                      "items": [
                                        {
                                          "name": "id",
                                          "type": "dropdown",
                                          "value": "rectangle6"
                                        },
                                        {
                                          "name": "propertyName",
                                          "type": "dropdown",
                                          "value": "height"
                                        }
                                      ],
                                      "block": {
                                        "uniqueId": "2a9f40ec-9297-4507-bbfd-83e78d07cae8",
                                        "type": "primitiveDesignObjectGetProperty",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "id",
                                                "type": "dropdown",
                                                "value": "rectangle7"
                                              },
                                              {
                                                "name": "propertyName",
                                                "type": "dropdown",
                                                "value": "height"
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "9d033c8e-3439-48dd-833f-fb5b7d8ea10f",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "sonFrameGorunumu"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "5088f4a3-d983-4825-b279-92b2a32e2722",
                    "type": "controlIfThen",
                    "inputs": [
                      {
                        "name": "if",
                        "type": "pin",
                        "items": [
                          {
                            "name": "mutator",
                            "type": "button"
                          },
                          {
                            "name": "comment",
                            "type": "button"
                          }
                        ],
                        "block": {
                          "uniqueId": "956ab657-e457-42ee-8354-b7c616c35092",
                          "type": "mathEquality",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "containerA",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "e9edd3c5-3b50-4dbe-b7d8-c090929db329",
                                    "type": "timelineGetFrameIndex",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": []
                                      }
                                    ]
                                  }
                                },
                                {
                                  "name": "criteria",
                                  "type": "dropdown",
                                  "value": "equal"
                                },
                                {
                                  "name": "containerB",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "67d713fd-4d23-4142-91a1-e189f926ef02",
                                    "type": "mathSum",
                                    "inputs": [
                                      {
                                        "name": "value",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "mutator",
                                            "type": "button"
                                          },
                                          {
                                            "name": "c7493a50-0305-4311-ac8b-1412a60a75d3",
                                            "type": "container",
                                            "block": {
                                              "uniqueId": "1e35b153-39e8-41f9-9c99-f876b8feafd4",
                                              "type": "variableGetValue",
                                              "inputs": [
                                                {
                                                  "name": "default",
                                                  "type": "none",
                                                  "items": [
                                                    {
                                                      "name": "name",
                                                      "type": "dropdown",
                                                      "value": "soruSay"
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            "mutatorItemUniqueId": "c7493a50-0305-4311-ac8b-1412a60a75d3",
                                            "mutatorName": "container"
                                          },
                                          {
                                            "name": "2951dc2a-77ec-4ff2-98ca-00a2daeb36b8",
                                            "type": "container",
                                            "block": {
                                              "uniqueId": "61d150fb-b83b-4a55-83b3-188b0b620997",
                                              "type": "mathValue",
                                              "inputs": [
                                                {
                                                  "name": "default",
                                                  "type": "none",
                                                  "items": [
                                                    {
                                                      "name": "value",
                                                      "type": "numeric",
                                                      "value": 1
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            "mutatorItemUniqueId": "2951dc2a-77ec-4ff2-98ca-00a2daeb36b8",
                                            "mutatorName": "container"
                                          }
                                        ]
                                      }
                                    ],
                                    "mutatorItems": [
                                      {
                                        "uniqueId": "c7493a50-0305-4311-ac8b-1412a60a75d3",
                                        "name": "operation",
                                        "allowOnlyOnce": false,
                                        "defaultValue": "+"
                                      },
                                      {
                                        "uniqueId": "2951dc2a-77ec-4ff2-98ca-00a2daeb36b8",
                                        "name": "operation",
                                        "allowOnlyOnce": false,
                                        "defaultValue": "+"
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "name": "then",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "830b62ea-6316-443e-b445-9de42d7d8a37",
                          "type": "variableSetValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "sabitGorsel"
                                }
                              ],
                              "block": {
                                "uniqueId": "7c7e7203-1b6c-41ee-b097-9c3ab009c58d",
                                "type": "logicValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "dropdown",
                                        "value": true
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "6598837b-cdc7-4385-be07-4606d3ddef24",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "SoruSayısıBelirle"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "57f1f6c4-421e-459d-ab31-266c022f33ad",
                    "type": "controlIfThen",
                    "inputs": [
                      {
                        "name": "if",
                        "type": "pin",
                        "items": [
                          {
                            "name": "mutator",
                            "type": "button"
                          }
                        ],
                        "block": {
                          "uniqueId": "956ab657-e457-42ee-8354-b7c616c35092",
                          "type": "mathEquality",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "containerA",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "1e35b153-39e8-41f9-9c99-f876b8feafd4",
                                    "type": "variableGetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "soruSay"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                },
                                {
                                  "name": "criteria",
                                  "type": "dropdown",
                                  "value": "equal"
                                },
                                {
                                  "name": "containerB",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "bfcefe3f-5ff4-4add-b66d-cd6a6bc9f0e2",
                                    "type": "mathValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "numeric",
                                            "value": -1
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "name": "then",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "ebf5fce7-6c3a-4400-b988-736c12267a25",
                          "type": "variableSetValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "soruSay"
                                }
                              ],
                              "block": {
                                "uniqueId": "811f8cfb-7f25-4d62-8765-674d8b22a5a7",
                                "type": "listLength",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "pin",
                                    "items": [],
                                    "block": {
                                      "uniqueId": "cbd49866-729d-4339-9e29-fb866a12fbf2",
                                      "type": "listCreateFromCommaText",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "pin",
                                          "items": [],
                                          "block": {
                                            "uniqueId": "f3c54b3d-6e37-4142-bcff-95a00664a904",
                                            "type": "variableGetValue",
                                            "inputs": [
                                              {
                                                "name": "default",
                                                "type": "none",
                                                "items": [
                                                  {
                                                    "name": "name",
                                                    "type": "dropdown",
                                                    "value": "cevaplar"
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "1953c000-ea07-452a-914c-ca2e94f12e71",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "mevcutCevapAl"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "ebf5fce7-6c3a-4400-b988-736c12267a25",
                    "type": "variableSetValue",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "cevap"
                          }
                        ],
                        "block": {
                          "uniqueId": "71cbec62-1042-40f4-a012-36ecdf0739ee",
                          "type": "listGetItemAt",
                          "inputs": [
                            {
                              "name": "list",
                              "type": "pin",
                              "items": [],
                              "block": {
                                "uniqueId": "63d353f2-262b-43f6-909a-0b99d16fb661",
                                "type": "listCreateFromCommaText",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "pin",
                                    "items": [],
                                    "block": {
                                      "uniqueId": "f3c54b3d-6e37-4142-bcff-95a00664a904",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "cevaplar"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              "name": "index",
                              "type": "pin",
                              "items": [],
                              "block": {
                                "uniqueId": "02f7eab6-8f49-4b80-8448-f36036dfc845",
                                "type": "mathSubtract",
                                "inputs": [
                                  {
                                    "name": "value",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "containerA",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "79881e3d-b982-48e8-8768-338cbc11478a",
                                          "type": "timelineGetFrameIndex",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": []
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "name": "containerB",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "a50a1762-b439-4283-82b4-1e1cfb82df41",
                                          "type": "mathValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "value",
                                                  "type": "numeric",
                                                  "value": 1
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "cdc0e0f8-4725-4176-9b39-0c1be2cd4180",
              "type": "onTimelineEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "onFrameChange"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "33f5880a-be17-4a5c-8ce3-43f3b46a0000",
                    "type": "procedureCall",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "SoruSayısıBelirle"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "9eb7ba5d-98a8-4657-b3b7-a87a6c52c744",
                      "type": "procedureCall",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "none",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "mevcutCevapAl"
                            }
                          ]
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "3a5a63bc-4093-4b64-a115-5c17bbd44779",
                        "type": "procedureCall",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "none",
                            "items": [
                              {
                                "name": "name",
                                "type": "dropdown",
                                "value": "gorunumBelirle"
                              }
                            ]
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "7c596e15-5b9b-4dfa-99a7-515037df9369",
                          "type": "procedureCall",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "rectBoyutGuncelle"
                                }
                              ]
                            }
                          ],
                          "flowBlock": {
                            "uniqueId": "e91a5b2e-052c-43a7-ab57-c560f81ab3ad",
                            "type": "procedureCall",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "sonFrameGorunumu"
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "eb1ac15c-5899-4022-b20c-c89f2eca2fc7",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "sabitGorsel"
                    }
                  ],
                  "block": {
                    "uniqueId": "10e365bf-472e-4e86-ae6e-6648af57c54d",
                    "type": "logicValue",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "value",
                            "type": "dropdown",
                            "value": false
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "399ea42d-1c82-4385-82fb-ffdf99424473",
              "type": "timerDesignObjectEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "timer1"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "tick"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "d9490641-5fea-4e0b-9883-d6e5ef49981c",
                    "type": "procedureCall",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "sonrakiSoru"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "0a331397-efef-4a2a-a5d9-5b9ed8f22a8c",
                      "type": "imageDesignObjectSetProperty",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "id",
                              "type": "dropdown",
                              "value": "yanlis"
                            },
                            {
                              "name": "propertyName",
                              "type": "dropdown",
                              "value": "visible"
                            }
                          ],
                          "block": {
                            "uniqueId": "642a14ef-81ff-450e-bb09-666f380277de",
                            "type": "logicValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "value",
                                    "type": "dropdown",
                                    "value": false
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "919404f3-a68e-42f8-8c6b-b9a475df4d82",
                        "type": "imageDesignObjectSetProperty",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "dogru"
                              },
                              {
                                "name": "propertyName",
                                "type": "dropdown",
                                "value": "visible"
                              }
                            ],
                            "block": {
                              "uniqueId": "642a14ef-81ff-450e-bb09-666f380277de",
                              "type": "logicValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "value",
                                      "type": "dropdown",
                                      "value": false
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "559512f9-6d1b-4079-b18f-88b94d8be614",
                          "type": "controlIfThen",
                          "inputs": [
                            {
                              "name": "if",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "mutator",
                                  "type": "button"
                                }
                              ],
                              "block": {
                                "uniqueId": "956ab657-e457-42ee-8354-b7c616c35092",
                                "type": "mathEquality",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "containerA",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "1e35b153-39e8-41f9-9c99-f876b8feafd4",
                                          "type": "variableGetValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "name",
                                                  "type": "dropdown",
                                                  "value": "sabitGorsel"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "name": "criteria",
                                        "type": "dropdown",
                                        "value": "notEqual"
                                      },
                                      {
                                        "name": "containerB",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "17a4ee2d-6ad3-46de-ad89-90ef668fa0d8",
                                          "type": "logicValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "value",
                                                  "type": "dropdown",
                                                  "value": true
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            {
                              "name": "then",
                              "type": "container",
                              "items": [],
                              "flowBlock": {
                                "uniqueId": "2cb0a3e1-094c-4329-bbe6-85e62c7378aa",
                                "type": "procedureCall",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "name",
                                        "type": "dropdown",
                                        "value": "tumContGoster"
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "flowBlock": {
                            "uniqueId": "77c01354-79fa-4664-9608-128f94c7eff0",
                            "type": "timerDesignObjectControl",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "id",
                                    "type": "dropdown",
                                    "value": "timer1"
                                  },
                                  {
                                    "name": "command",
                                    "type": "dropdown",
                                    "value": "stop"
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "ae084604-5105-47f9-895b-b1c6c270480f",
              "type": "delayDesignObjectEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "delay2"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "complete"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "a730dabe-5786-4d49-9d85-8e14e0b20dbe",
                    "type": "inputButtonDesignObjectSetProperty",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "butDevam"
                          },
                          {
                            "name": "propertyName",
                            "type": "dropdown",
                            "value": "visible"
                          }
                        ],
                        "block": {
                          "uniqueId": "90943ace-8617-4277-8339-5c93aed0b9ce",
                          "type": "logicValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "value",
                                  "type": "dropdown",
                                  "value": true
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "43994ff0-cf7f-4934-96c3-ec593193fc5f",
              "type": "inputButtonDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "butDevam"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "click"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "34fe3ec3-d73d-4a46-a092-4582650a280b",
                    "type": "inputButtonDesignObjectSetProperty",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "butDevam"
                          },
                          {
                            "name": "propertyName",
                            "type": "dropdown",
                            "value": "visible"
                          }
                        ],
                        "block": {
                          "uniqueId": "7c37a01f-2dfd-4534-ac32-e36670765a63",
                          "type": "logicValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "value",
                                  "type": "dropdown",
                                  "value": false
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "22530aff-521d-4d6f-b369-3f95f7a3dca6",
                      "type": "procedureCall",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "none",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "tumContGoster"
                            }
                          ]
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "7586dd8f-ebbf-4474-8c91-3588b1399976",
                        "type": "procedureCall",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "none",
                            "items": [
                              {
                                "name": "name",
                                "type": "dropdown",
                                "value": "sonrakiSoru"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "1c3fa512-33fc-44ba-8c19-c52c62a5bd66",
              "type": "contentDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "content7"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "click"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "5631506a-53fd-4923-b48d-a0f4ab1da0b2",
                    "type": "procedureCall",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "tumRectGizle"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "e05d05bc-a9d1-4d9a-8990-30d2099c369b",
                      "type": "variableSetValue",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "dogru"
                            }
                          ],
                          "block": {
                            "uniqueId": "f7317dca-dfa6-4156-9c10-442ee83938a1",
                            "type": "mathEquality",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "containerA",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "03cc6f27-534e-4a31-881f-90fb1f28383f",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "cevap"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "criteria",
                                    "type": "dropdown",
                                    "value": "equal"
                                  },
                                  {
                                    "name": "containerB",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "5a011b62-76c8-4a53-a4aa-ccb1954f59b9",
                                      "type": "contentDesignObjectGetProperty",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "id",
                                              "type": "dropdown",
                                              "value": "content7"
                                            },
                                            {
                                              "name": "propertyName",
                                              "type": "dropdown",
                                              "value": "tag"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "f09d94da-f2fc-4a10-853a-71de0151cba2",
                        "type": "primitiveDesignObjectSetProperty",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "rectangle7"
                              },
                              {
                                "name": "propertyName",
                                "type": "dropdown",
                                "value": "visible"
                              }
                            ],
                            "block": {
                              "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                              "type": "logicValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "value",
                                      "type": "dropdown",
                                      "value": true
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "0f38e84a-ac6a-493f-8298-d5e41cb289a6",
                          "type": "inputButtonDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "butSiradaki"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "90943ace-8617-4277-8339-5c93aed0b9ce",
                                "type": "logicValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "dropdown",
                                        "value": true
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "18000450-5f78-4735-a907-818904330d40",
              "type": "contentDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "content6"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "click"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "5631506a-53fd-4923-b48d-a0f4ab1da0b2",
                    "type": "procedureCall",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "tumRectGizle"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "e05d05bc-a9d1-4d9a-8990-30d2099c369b",
                      "type": "variableSetValue",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "dogru"
                            }
                          ],
                          "block": {
                            "uniqueId": "7832ea3b-5e2a-4cbd-829b-6df37d565d3e",
                            "type": "mathEquality",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "containerA",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "03cc6f27-534e-4a31-881f-90fb1f28383f",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "cevap"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "criteria",
                                    "type": "dropdown",
                                    "value": "equal"
                                  },
                                  {
                                    "name": "containerB",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "5a011b62-76c8-4a53-a4aa-ccb1954f59b9",
                                      "type": "contentDesignObjectGetProperty",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "id",
                                              "type": "dropdown",
                                              "value": "content6"
                                            },
                                            {
                                              "name": "propertyName",
                                              "type": "dropdown",
                                              "value": "tag"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "f09d94da-f2fc-4a10-853a-71de0151cba2",
                        "type": "primitiveDesignObjectSetProperty",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "rectangle6"
                              },
                              {
                                "name": "propertyName",
                                "type": "dropdown",
                                "value": "visible"
                              }
                            ],
                            "block": {
                              "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                              "type": "logicValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "value",
                                      "type": "dropdown",
                                      "value": true
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "0f38e84a-ac6a-493f-8298-d5e41cb289a6",
                          "type": "inputButtonDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "butSiradaki"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "90943ace-8617-4277-8339-5c93aed0b9ce",
                                "type": "logicValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "dropdown",
                                        "value": true
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "51bf7711-650c-4003-8fd7-6527fbc6beaa",
              "type": "contentDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "content5"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "click"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "5631506a-53fd-4923-b48d-a0f4ab1da0b2",
                    "type": "procedureCall",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "tumRectGizle"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "e05d05bc-a9d1-4d9a-8990-30d2099c369b",
                      "type": "variableSetValue",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "dogru"
                            }
                          ],
                          "block": {
                            "uniqueId": "0e430f12-2a6e-4aa3-a060-601d0ee2cf46",
                            "type": "mathEquality",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "containerA",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "03cc6f27-534e-4a31-881f-90fb1f28383f",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "cevap"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "criteria",
                                    "type": "dropdown",
                                    "value": "equal"
                                  },
                                  {
                                    "name": "containerB",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "5a011b62-76c8-4a53-a4aa-ccb1954f59b9",
                                      "type": "contentDesignObjectGetProperty",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "id",
                                              "type": "dropdown",
                                              "value": "content5"
                                            },
                                            {
                                              "name": "propertyName",
                                              "type": "dropdown",
                                              "value": "tag"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "f09d94da-f2fc-4a10-853a-71de0151cba2",
                        "type": "primitiveDesignObjectSetProperty",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "rectangle5"
                              },
                              {
                                "name": "propertyName",
                                "type": "dropdown",
                                "value": "visible"
                              }
                            ],
                            "block": {
                              "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                              "type": "logicValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "value",
                                      "type": "dropdown",
                                      "value": true
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "0f38e84a-ac6a-493f-8298-d5e41cb289a6",
                          "type": "inputButtonDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "butSiradaki"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "90943ace-8617-4277-8339-5c93aed0b9ce",
                                "type": "logicValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "dropdown",
                                        "value": true
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "00602e41-4d12-4a80-8740-3b32f6dc4257",
              "type": "contentDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "content4"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "click"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "5631506a-53fd-4923-b48d-a0f4ab1da0b2",
                    "type": "procedureCall",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "tumRectGizle"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "e05d05bc-a9d1-4d9a-8990-30d2099c369b",
                      "type": "variableSetValue",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "dogru"
                            }
                          ],
                          "block": {
                            "uniqueId": "4298c760-8d64-4158-b69e-6cea32ae27a4",
                            "type": "mathEquality",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "containerA",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "03cc6f27-534e-4a31-881f-90fb1f28383f",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "cevap"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "criteria",
                                    "type": "dropdown",
                                    "value": "equal"
                                  },
                                  {
                                    "name": "containerB",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "5a011b62-76c8-4a53-a4aa-ccb1954f59b9",
                                      "type": "contentDesignObjectGetProperty",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "id",
                                              "type": "dropdown",
                                              "value": "content4"
                                            },
                                            {
                                              "name": "propertyName",
                                              "type": "dropdown",
                                              "value": "tag"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "f09d94da-f2fc-4a10-853a-71de0151cba2",
                        "type": "primitiveDesignObjectSetProperty",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "rectangle4"
                              },
                              {
                                "name": "propertyName",
                                "type": "dropdown",
                                "value": "visible"
                              }
                            ],
                            "block": {
                              "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                              "type": "logicValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "value",
                                      "type": "dropdown",
                                      "value": true
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "0f38e84a-ac6a-493f-8298-d5e41cb289a6",
                          "type": "inputButtonDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "butSiradaki"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "dfb13ae3-508c-47b8-a582-2a8e6921c3d1",
                                "type": "logicValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "dropdown",
                                        "value": true
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "e7f65ce3-4f11-4e8f-9924-d80f4a4052dd",
              "type": "onTimelineEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "onInitialized"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "fb9da3c0-46b7-48f1-a09d-7d0a92bd7cbc",
                    "type": "timelinePlayerControl",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "command",
                            "type": "dropdown",
                            "value": "stop"
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "cfc52971-1b64-4391-a525-963080736acf",
              "type": "inputButtonDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "btnBasla"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "click"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "0d40d0de-eebd-4edf-ab94-5274fdec94ec",
                    "type": "procedureCall",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "sonrakiSoru"
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "255f75ab-c2dc-41a4-8957-7a0e05d95a46",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "sonrakiSoru"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "cd308f2c-86ab-4be4-8aa4-a7b9e9ac08a0",
                    "type": "timelinePlayerControlGoTo",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "frameIndex",
                            "type": "container",
                            "block": {
                              "uniqueId": "a1195dcd-024a-4a2b-bad7-c92defc4b785",
                              "type": "variableGetValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "name",
                                      "type": "dropdown",
                                      "value": "slaytNo"
                                    }
                                  ]
                                }
                              ]
                            }
                          },
                          {
                            "name": "command",
                            "type": "dropdown",
                            "value": "stop"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "2ba8a14a-9500-41cc-abe4-6460de6c7114",
                      "type": "variableSetValue",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "slaytNo"
                            }
                          ],
                          "block": {
                            "uniqueId": "5e09c912-7f07-45dc-9bb7-8947cc27b6a7",
                            "type": "mathSum",
                            "inputs": [
                              {
                                "name": "value",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "mutator",
                                    "type": "button"
                                  },
                                  {
                                    "name": "07e8e528-b9de-4641-b39a-09dd87853492",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "e3a8d62f-00d9-4d3c-9339-4911b2ce2433",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "slaytNo"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "mutatorItemUniqueId": "07e8e528-b9de-4641-b39a-09dd87853492",
                                    "mutatorName": "container"
                                  },
                                  {
                                    "name": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "80ba8cf9-ae0f-4f1f-ba9e-209912037167",
                                      "type": "mathValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "value",
                                              "type": "numeric",
                                              "value": 1
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "mutatorItemUniqueId": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22",
                                    "mutatorName": "container"
                                  }
                                ]
                              }
                            ],
                            "mutatorItems": [
                              {
                                "uniqueId": "07e8e528-b9de-4641-b39a-09dd87853492",
                                "name": "operation",
                                "allowOnlyOnce": false,
                                "defaultValue": "+"
                              },
                              {
                                "uniqueId": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22",
                                "name": "operation",
                                "allowOnlyOnce": false,
                                "defaultValue": "+"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "90d1b64f-5047-4e2e-93f9-044f9c094f9c",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "sabit_gorsel"
                    },
                    {
                      "name": "33eb05f3-fe45-4c85-8fe4-11255a9ac888",
                      "type": "textbox",
                      "value": "sure",
                      "mutatorItemUniqueId": "33eb05f3-fe45-4c85-8fe4-11255a9ac888",
                      "mutatorName": "input"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "c3bd0af6-31cf-4733-a251-d1dc1e1d803d",
                    "type": "procedureCall",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "tumRectGizle"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "1b4e7087-6ba4-45b3-b89a-0cb7a8f93f42",
                      "type": "procedureCall",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "none",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "tumContGizle"
                            }
                          ]
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "5c441a6c-11be-41dc-b410-b156f818d22b",
                        "type": "delayDesignObjectSetProperty",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "delay1"
                              },
                              {
                                "name": "propertyName",
                                "type": "dropdown",
                                "value": "interval"
                              }
                            ],
                            "block": {
                              "uniqueId": "91630751-b226-4968-90aa-86a59eb68f0f",
                              "type": "mathToNumeric",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [],
                                  "block": {
                                    "uniqueId": "37cf0372-4a00-4ab8-84e9-da65935c3502",
                                    "type": "variableGetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "sure"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "1fccbf88-5d26-4c98-a210-f223b3581cca",
                          "type": "delayDesignObjectControl",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "delay1"
                                },
                                {
                                  "name": "command",
                                  "type": "dropdown",
                                  "value": "start"
                                }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ],
              "mutatorItems": [
                {
                  "uniqueId": "33eb05f3-fe45-4c85-8fe4-11255a9ac888",
                  "name": "input",
                  "allowOnlyOnce": false,
                  "defaultValue": "sure"
                }
              ]
            },
            {
              "uniqueId": "f01c60b0-de6c-4071-9eaf-2b2ff045a47e",
              "type": "delayDesignObjectEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "delay1"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "complete"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "83f6107e-5e83-41b6-9f65-425ab17766f7",
                    "type": "procedureCall",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "sonrakiSoru"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "f7dc3c47-9733-4919-b0d4-b9cd1a6c9ec3",
                      "type": "procedureCall",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "none",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "tumContGoster"
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "b069c874-433a-4b0b-a22a-7d2e59ce1be1",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "metin_sorusu"
                    },
                    {
                      "name": "33eb05f3-fe45-4c85-8fe4-11255a9ac888",
                      "type": "textbox",
                      "value": "sure",
                      "mutatorItemUniqueId": "33eb05f3-fe45-4c85-8fe4-11255a9ac888",
                      "mutatorName": "input"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "c3bd0af6-31cf-4733-a251-d1dc1e1d803d",
                    "type": "procedureCall",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "tumRectGizle"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "1b4e7087-6ba4-45b3-b89a-0cb7a8f93f42",
                      "type": "procedureCall",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "none",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "tumContGizle"
                            }
                          ]
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "5c441a6c-11be-41dc-b410-b156f818d22b",
                        "type": "delayDesignObjectSetProperty",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "delay2"
                              },
                              {
                                "name": "propertyName",
                                "type": "dropdown",
                                "value": "interval"
                              }
                            ],
                            "block": {
                              "uniqueId": "91630751-b226-4968-90aa-86a59eb68f0f",
                              "type": "mathToNumeric",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [],
                                  "block": {
                                    "uniqueId": "37cf0372-4a00-4ab8-84e9-da65935c3502",
                                    "type": "variableGetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "sure"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "1fccbf88-5d26-4c98-a210-f223b3581cca",
                          "type": "delayDesignObjectControl",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "delay2"
                                },
                                {
                                  "name": "command",
                                  "type": "dropdown",
                                  "value": "start"
                                }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ],
              "mutatorItems": [
                {
                  "uniqueId": "33eb05f3-fe45-4c85-8fe4-11255a9ac888",
                  "name": "input",
                  "allowOnlyOnce": false,
                  "defaultValue": "sure"
                }
              ]
            },
            {
              "uniqueId": "39aa7621-6a8a-4e32-a3cb-7be73716d2d2",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "slaytNo"
                    }
                  ],
                  "block": {
                    "uniqueId": "80ba8cf9-ae0f-4f1f-ba9e-209912037167",
                    "type": "mathValue",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "value",
                            "type": "numeric",
                            "value": 1
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "20b1e80c-0f1b-4315-ade2-189af0ffb86c",
              "type": "inputButtonDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "butSiradaki"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "click"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "0f38e84a-ac6a-493f-8298-d5e41cb289a6",
                    "type": "inputButtonDesignObjectSetProperty",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "butSiradaki"
                          },
                          {
                            "name": "propertyName",
                            "type": "dropdown",
                            "value": "visible"
                          }
                        ],
                        "block": {
                          "uniqueId": "90943ace-8617-4277-8339-5c93aed0b9ce",
                          "type": "logicValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "value",
                                  "type": "dropdown",
                                  "value": false
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "08718442-6ceb-4cc0-ab52-b2c8a3f4942f",
                      "type": "procedureCall",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "none",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "tumRectGizle"
                            }
                          ]
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "e7fdedcc-10c2-4796-b73b-fa7babdcd32f",
                        "type": "procedureCall",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "none",
                            "items": [
                              {
                                "name": "name",
                                "type": "dropdown",
                                "value": "tumContGizle"
                              }
                            ]
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "e0df0eb3-d99e-445d-b9be-22fff5f6e53b",
                          "type": "controlIfThen",
                          "inputs": [
                            {
                              "name": "if",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "mutator",
                                  "type": "button"
                                }
                              ],
                              "block": {
                                "uniqueId": "1791b966-80b0-446d-a8cd-8c2d12281d7f",
                                "type": "mathEquality",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "containerA",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "1e35b153-39e8-41f9-9c99-f876b8feafd4",
                                          "type": "variableGetValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "name",
                                                  "type": "dropdown",
                                                  "value": "dogru"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      },
                                      {
                                        "name": "criteria",
                                        "type": "dropdown",
                                        "value": "equal"
                                      },
                                      {
                                        "name": "containerB",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "17a4ee2d-6ad3-46de-ad89-90ef668fa0d8",
                                          "type": "logicValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "value",
                                                  "type": "dropdown",
                                                  "value": true
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            {
                              "name": "then",
                              "type": "container",
                              "items": [],
                              "flowBlock": {
                                "uniqueId": "7bc48850-3f50-4f6a-b35f-deb21fdf83b0",
                                "type": "procedureCall",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "name",
                                        "type": "dropdown",
                                        "value": "puanArttir"
                                      }
                                    ]
                                  }
                                ],
                                "flowBlock": {
                                  "uniqueId": "78541cbf-4ab5-41be-a5f2-f63df1394925",
                                  "type": "imageDesignObjectSetProperty",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "pin",
                                      "items": [
                                        {
                                          "name": "id",
                                          "type": "dropdown",
                                          "value": "dogru"
                                        },
                                        {
                                          "name": "propertyName",
                                          "type": "dropdown",
                                          "value": "visible"
                                        }
                                      ],
                                      "block": {
                                        "uniqueId": "642a14ef-81ff-450e-bb09-666f380277de",
                                        "type": "logicValue",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "value",
                                                "type": "dropdown",
                                                "value": true
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    }
                                  ],
                                  "flowBlock": {
                                    "uniqueId": "a470945d-5e2a-4f35-b30d-128427f5300c",
                                    "type": "soundDesignObjectPlayerControl",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "id",
                                            "type": "dropdown",
                                            "value": "SDogru"
                                          },
                                          {
                                            "name": "command",
                                            "type": "dropdown",
                                            "value": "play"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                }
                              }
                            },
                            {
                              "name": "else0",
                              "type": "container",
                              "items": [],
                              "flowBlock": {
                                "uniqueId": "2e8678d1-210f-4988-b4dd-b03a0304a14a",
                                "type": "imageDesignObjectSetProperty",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "pin",
                                    "items": [
                                      {
                                        "name": "id",
                                        "type": "dropdown",
                                        "value": "yanlis"
                                      },
                                      {
                                        "name": "propertyName",
                                        "type": "dropdown",
                                        "value": "visible"
                                      }
                                    ],
                                    "block": {
                                      "uniqueId": "642a14ef-81ff-450e-bb09-666f380277de",
                                      "type": "logicValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "value",
                                              "type": "dropdown",
                                              "value": true
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ],
                                "flowBlock": {
                                  "uniqueId": "5425268c-74af-4eb9-a2dc-144652e90ceb",
                                  "type": "soundDesignObjectPlayerControl",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "none",
                                      "items": [
                                        {
                                          "name": "id",
                                          "type": "dropdown",
                                          "value": "SHata"
                                        },
                                        {
                                          "name": "command",
                                          "type": "dropdown",
                                          "value": "play"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              },
                              "mutatorItemUniqueId": "2f81ce48-38bb-4f89-909b-2ed07d56ba4c",
                              "mutatorName": "else"
                            }
                          ],
                          "mutatorItems": [
                            {
                              "uniqueId": "2f81ce48-38bb-4f89-909b-2ed07d56ba4c",
                              "name": "else",
                              "allowOnlyOnce": true,
                              "defaultValue": ""
                            }
                          ],
                          "flowBlock": {
                            "uniqueId": "84c8c4b7-07b2-4fea-a07e-992eed53a731",
                            "type": "variableSetValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "dogru"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "485c2e2a-a3a3-4535-9e38-80278e2d8a2a",
                                  "type": "logicValue",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "none",
                                      "items": [
                                        {
                                          "name": "value",
                                          "type": "dropdown",
                                          "value": false
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ],
                            "flowBlock": {
                              "uniqueId": "db6a014c-b998-4635-839b-e63985d702c3",
                              "type": "timerDesignObjectControl",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "timer1"
                                    },
                                    {
                                      "name": "command",
                                      "type": "dropdown",
                                      "value": "start"
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "cb1a86b1-b114-4188-9990-10ea6aa644a8",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "comment",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "cevap"
                    }
                  ],
                  "block": {
                    "uniqueId": "023dc933-3bf3-4b2a-b7b8-ba7483136b47",
                    "type": "textValue",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "value",
                            "type": "textbox",
                            "value": "-1"
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "f2c7ac49-084a-4b5d-b5ee-87b9178c4c05",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "puan"
                    }
                  ],
                  "block": {
                    "uniqueId": "80ba8cf9-ae0f-4f1f-ba9e-209912037167",
                    "type": "mathValue",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "value",
                            "type": "numeric",
                            "value": 0
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "b9aa4b69-6d65-41c7-8ac3-22b0a54e738e",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "soruSay"
                    }
                  ],
                  "block": {
                    "uniqueId": "80ba8cf9-ae0f-4f1f-ba9e-209912037167",
                    "type": "mathValue",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "value",
                            "type": "numeric",
                            "value": -1
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "08029cb8-383b-425a-b40a-46588557a964",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "dogru"
                    }
                  ],
                  "block": {
                    "uniqueId": "10e365bf-472e-4e86-ae6e-6648af57c54d",
                    "type": "logicValue",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "value",
                            "type": "dropdown",
                            "value": false
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "f48494d3-1d4e-4235-a641-07abc03fd65b",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "tumContGoster"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "f95e7daf-3773-4ab2-8ec5-74ee71725a0f",
                    "type": "contentDesignObjectSetProperty",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "content4"
                          },
                          {
                            "name": "propertyName",
                            "type": "dropdown",
                            "value": "visible"
                          }
                        ],
                        "block": {
                          "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                          "type": "logicValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "value",
                                  "type": "dropdown",
                                  "value": true
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "d4a111ad-a7ed-4861-a1ac-5d37b673c99e",
                      "type": "contentDesignObjectSetProperty",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "id",
                              "type": "dropdown",
                              "value": "content5"
                            },
                            {
                              "name": "propertyName",
                              "type": "dropdown",
                              "value": "visible"
                            }
                          ],
                          "block": {
                            "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                            "type": "logicValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "value",
                                    "type": "dropdown",
                                    "value": true
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "e8278171-f1ab-4208-a865-2ea585792d46",
                        "type": "contentDesignObjectSetProperty",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "content6"
                              },
                              {
                                "name": "propertyName",
                                "type": "dropdown",
                                "value": "visible"
                              }
                            ],
                            "block": {
                              "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                              "type": "logicValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "value",
                                      "type": "dropdown",
                                      "value": true
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "d4a111ad-a7ed-4861-a1ac-5d37b673c99e",
                          "type": "contentDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "content7"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                                "type": "logicValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "dropdown",
                                        "value": true
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "16d3ca07-9567-40d7-8697-e991693cd791",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "tumContGizle"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "f95e7daf-3773-4ab2-8ec5-74ee71725a0f",
                    "type": "contentDesignObjectSetProperty",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "content4"
                          },
                          {
                            "name": "propertyName",
                            "type": "dropdown",
                            "value": "visible"
                          }
                        ],
                        "block": {
                          "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                          "type": "logicValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "value",
                                  "type": "dropdown",
                                  "value": false
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "d4a111ad-a7ed-4861-a1ac-5d37b673c99e",
                      "type": "contentDesignObjectSetProperty",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "id",
                              "type": "dropdown",
                              "value": "content5"
                            },
                            {
                              "name": "propertyName",
                              "type": "dropdown",
                              "value": "visible"
                            }
                          ],
                          "block": {
                            "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                            "type": "logicValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "value",
                                    "type": "dropdown",
                                    "value": false
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "e8278171-f1ab-4208-a865-2ea585792d46",
                        "type": "contentDesignObjectSetProperty",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "content6"
                              },
                              {
                                "name": "propertyName",
                                "type": "dropdown",
                                "value": "visible"
                              }
                            ],
                            "block": {
                              "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                              "type": "logicValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "value",
                                      "type": "dropdown",
                                      "value": false
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "d4a111ad-a7ed-4861-a1ac-5d37b673c99e",
                          "type": "contentDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "content7"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                                "type": "logicValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "dropdown",
                                        "value": false
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "2cbe8042-7618-4258-88d6-b29a79d6f1f1",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "tumRectGizle"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "494c5b48-8dcc-494c-b447-421a5c34bb5f",
                    "type": "primitiveDesignObjectSetProperty",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "rectangle4"
                          },
                          {
                            "name": "propertyName",
                            "type": "dropdown",
                            "value": "visible"
                          }
                        ],
                        "block": {
                          "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                          "type": "logicValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "value",
                                  "type": "dropdown",
                                  "value": false
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "e0b48c5c-8eaa-4306-a582-88fdc0cf5e1f",
                      "type": "primitiveDesignObjectSetProperty",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "id",
                              "type": "dropdown",
                              "value": "rectangle5"
                            },
                            {
                              "name": "propertyName",
                              "type": "dropdown",
                              "value": "visible"
                            }
                          ],
                          "block": {
                            "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                            "type": "logicValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "value",
                                    "type": "dropdown",
                                    "value": false
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "0ead76e7-9889-418d-a9e0-2f2ed4ac3045",
                        "type": "primitiveDesignObjectSetProperty",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "rectangle6"
                              },
                              {
                                "name": "propertyName",
                                "type": "dropdown",
                                "value": "visible"
                              }
                            ],
                            "block": {
                              "uniqueId": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
                              "type": "logicValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "value",
                                      "type": "dropdown",
                                      "value": false
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "294d1128-2770-4094-93a0-f85750fd25a9",
                          "type": "primitiveDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "rectangle7"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "9bdfd929-0a04-4d7a-87bc-dae82ea9c022",
                                "type": "logicValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "dropdown",
                                        "value": false
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "15d1639e-4a38-48e1-ae65-718c6d84d934",
              "type": "procedure",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "mutator",
                      "type": "button"
                    },
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "puanArttir"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "2ba8a14a-9500-41cc-abe4-6460de6c7114",
                    "type": "variableSetValue",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "puan"
                          }
                        ],
                        "block": {
                          "uniqueId": "5e09c912-7f07-45dc-9bb7-8947cc27b6a7",
                          "type": "mathSum",
                          "inputs": [
                            {
                              "name": "value",
                              "type": "none",
                              "items": [
                                {
                                  "name": "mutator",
                                  "type": "button"
                                },
                                {
                                  "name": "07e8e528-b9de-4641-b39a-09dd87853492",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "e3a8d62f-00d9-4d3c-9339-4911b2ce2433",
                                    "type": "variableGetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "puan"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "mutatorItemUniqueId": "07e8e528-b9de-4641-b39a-09dd87853492",
                                  "mutatorName": "container"
                                },
                                {
                                  "name": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "80ba8cf9-ae0f-4f1f-ba9e-209912037167",
                                    "type": "mathValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "numeric",
                                            "value": 1
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "mutatorItemUniqueId": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22",
                                  "mutatorName": "container"
                                }
                              ]
                            }
                          ],
                          "mutatorItems": [
                            {
                              "uniqueId": "07e8e528-b9de-4641-b39a-09dd87853492",
                              "name": "operation",
                              "allowOnlyOnce": false,
                              "defaultValue": "+"
                            },
                            {
                              "uniqueId": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22",
                              "name": "operation",
                              "allowOnlyOnce": false,
                              "defaultValue": "+"
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "uniqueId": "597dad56-9ae6-4842-91b0-46cbc168ea98",
          "frameIndex": 30,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [],
          "blocks": [
            {
              "uniqueId": "cdc0e0f8-4725-4176-9b39-0c1be2cd4180",
              "type": "onTimelineEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "onFrameChange"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "d49089b6-56c3-4aba-ba54-cb7e07617615",
                    "type": "textDesignObjectSetProperty",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "textSonuc"
                          },
                          {
                            "name": "propertyName",
                            "type": "dropdown",
                            "value": "text"
                          }
                        ],
                        "block": {
                          "uniqueId": "3aab6377-2d38-4fca-95d7-7396c609edc0",
                          "type": "variableGetValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "puan"
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "uniqueId": "6c6dab0b-860c-4e10-80c0-5c4735bab783",
      "name": "sabitler",
      "underscoredName": "sabitler",
      "keyframes": [
        {
          "uniqueId": "5fed0202-5dc7-4e8c-9574-0c3a28db99ff",
          "frameIndex": 0,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [],
          "blocks": []
        },
        {
          "uniqueId": "b67e3793-dfb0-4ba5-bb4e-cd9b76dedb1c",
          "frameIndex": 1,
          "frameCount": 29,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "butSiradaki",
              "uniqueId": "15036bf7-6311-413f-ac8a-fcb23116802c",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 394,
                "y": 537
              },
              "size": {
                "width": 223,
                "height": 55
              },
              "x": 394,
              "y": 537,
              "width": 223,
              "height": 55,
              "groupName": "butSiradaki",
              "groupOrder": 0,
              "pivotX": 112,
              "pivotY": 26,
              "alpha": 100,
              "visible": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 112,
                "y": 26
              },
              "currentPivotLocation": {
                "x": 112,
                "y": 26
              },
              "styles": [
                {
                  "name": "font-size",
                  "value": "16px"
                }
              ],
              "isVisual": true,
              "value": "Sıradaki Soru"
            },
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "dogru",
              "uniqueId": "5d06c611-960b-476a-ab36-49ad438ec854",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 466,
                "y": 11
              },
              "size": {
                "width": 69,
                "height": 69
              },
              "x": 466,
              "y": 11,
              "width": 69,
              "height": 69,
              "groupName": "dogru",
              "groupOrder": 0,
              "pivotX": 35,
              "pivotY": 35,
              "alpha": 100,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 35,
                "y": 35
              },
              "currentPivotLocation": {
                "x": 35,
                "y": 35
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/dogru.png",
              "imageName": "dogru",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 312,
              "spriteHeight": 312,
              "highlightWidth": 51,
              "highlightHeight": 51,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            },
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "yanlis",
              "uniqueId": "3cda0863-eff6-41e3-ad7a-117a0412a60e",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 466,
                "y": 11
              },
              "size": {
                "width": 68,
                "height": 68
              },
              "x": 466,
              "y": 11,
              "width": 68,
              "height": 68,
              "groupName": "yanlis",
              "groupOrder": 0,
              "pivotX": 34,
              "pivotY": 34,
              "alpha": 100,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 34,
                "y": 34
              },
              "currentPivotLocation": {
                "x": 34,
                "y": 34
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/yanlis.png",
              "imageName": "yanlis",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 720,
              "spriteHeight": 720,
              "highlightWidth": 51,
              "highlightHeight": 51,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            },
            {
              "typeName": "textDesignObject",
              "type": "text",
              "id": "text2",
              "uniqueId": "cc025f59-ea2d-4c4e-a54e-8780b9e3e9df",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 21,
                "y": 20
              },
              "size": {
                "width": 240,
                "height": 89
              },
              "x": 21,
              "y": 20,
              "width": 240,
              "height": 89,
              "groupName": "text",
              "groupOrder": 2,
              "pivotX": 120,
              "pivotY": 45,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 120,
                "y": 45
              },
              "currentPivotLocation": {
                "x": 120,
                "y": 45
              },
              "isVisual": true,
              "highlightBehavior": false,
              "clippingBehavior": "clip",
              "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs95E872D0{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.csC0303025{color:#000000;background-color:transparent;font-family:Calibri;font-size:15px;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs95E872D0\"><span class=\"csC0303025\">&nbsp;</span></p></body>\r\n</html>",
              "text": "",
              "highlightWidth": 180,
              "highlightHeight": 66
            },
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "butDevam",
              "uniqueId": "69167456-8326-4ebc-af6e-ddc1c4b42d01",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 399,
                "y": 541
              },
              "size": {
                "width": 223,
                "height": 55
              },
              "x": 399,
              "y": 541,
              "width": 223,
              "height": 55,
              "groupName": "butDevam",
              "groupOrder": 0,
              "pivotX": 112,
              "pivotY": 26,
              "alpha": 100,
              "visible": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 112,
                "y": 26
              },
              "currentPivotLocation": {
                "x": 112,
                "y": 26
              },
              "styles": [
                {
                  "name": "font-size",
                  "value": "16px"
                }
              ],
              "isVisual": true,
              "value": "Sorulara Geç"
            }
          ],
          "blocks": []
        }
      ]
    },
    {
      "uniqueId": "52635f93-4032-433c-a041-2f6eeba96efe",
      "name": "secenekler",
      "underscoredName": "secenekler",
      "keyframes": [
        {
          "uniqueId": "a60c72b6-79bf-430b-8b43-ce697b4db7a8",
          "frameIndex": 0,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [],
          "blocks": []
        },
        {
          "uniqueId": "32d9f23b-538e-4b68-bd69-345a6692020e",
          "frameIndex": 1,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 135,
                "y": 382
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 135,
              "y": 382,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 135,
                "y": 391
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 135,
              "y": 391,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 348,
                "y": 389
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 348,
              "y": 389,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 345,
                "y": 381
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 345,
              "y": 381,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 552,
                "y": 394
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 552,
              "y": 394,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 552,
                "y": 384
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 552,
              "y": 384,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 763,
                "y": 391
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 763,
              "y": 391,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 763,
                "y": 382
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 763,
              "y": 382,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "fad1d13e-2424-4202-b501-3c6ddc364175",
          "frameIndex": 2,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 246,
                "y": 332
              },
              "size": {
                "width": 238,
                "height": 85
              },
              "x": 246,
              "y": 332,
              "width": 238,
              "height": 85,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 74,
              "pivotY": 73,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 74,
                "y": 73
              },
              "currentPivotLocation": {
                "x": 74,
                "y": 73
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 178,
              "highlightHeight": 63
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 246,
                "y": 332
              },
              "size": {
                "width": 238,
                "height": 85
              },
              "x": 246,
              "y": 332,
              "width": 238,
              "height": 85,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 81,
              "pivotY": 30,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 111,
                "y": 18
              },
              "currentPivotLocation": {
                "x": 81,
                "y": 30
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 178,
              "highlightHeight": 63
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 535,
                "y": 332
              },
              "size": {
                "width": 238,
                "height": 85
              },
              "x": 535,
              "y": 332,
              "width": 238,
              "height": 85,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 81,
                "y": 30
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 178,
              "highlightHeight": 63
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 535,
                "y": 332
              },
              "size": {
                "width": 238,
                "height": 85
              },
              "x": 535,
              "y": 332,
              "width": 238,
              "height": 85,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 48
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 178,
              "highlightHeight": 63
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 246,
                "y": 455
              },
              "size": {
                "width": 238,
                "height": 85
              },
              "x": 246,
              "y": 455,
              "width": 238,
              "height": 85,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 81,
                "y": 30
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 178,
              "highlightHeight": 63
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 246,
                "y": 455
              },
              "size": {
                "width": 238,
                "height": 85
              },
              "x": 246,
              "y": 455,
              "width": 238,
              "height": 85,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 178,
              "highlightHeight": 63
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 535,
                "y": 455
              },
              "size": {
                "width": 238,
                "height": 85
              },
              "x": 535,
              "y": 455,
              "width": 238,
              "height": 85,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 81,
                "y": 30
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 178,
              "highlightHeight": 63
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 535,
                "y": 455
              },
              "size": {
                "width": 238,
                "height": 85
              },
              "x": 535,
              "y": 455,
              "width": 238,
              "height": 85,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 178,
              "highlightHeight": 63
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "95c93735-1bf7-4a0e-b3ec-e1973fb3cc23",
          "frameIndex": 3,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 135,
                "y": 387
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 135,
              "y": 387,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 135,
                "y": 396
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 135,
              "y": 396,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 348,
                "y": 394
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 348,
              "y": 394,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 345,
                "y": 386
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 345,
              "y": 386,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 552,
                "y": 399
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 552,
              "y": 399,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 552,
                "y": 389
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 552,
              "y": 389,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 763,
                "y": 396
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 763,
              "y": 396,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 763,
                "y": 387
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 763,
              "y": 387,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "df3faa62-f7e2-4173-88ec-ffbb63bf0a8b",
          "frameIndex": 4,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 197,
                "y": 328
              },
              "size": {
                "width": 265,
                "height": 82
              },
              "x": 197,
              "y": 328,
              "width": 265,
              "height": 82,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 198,
              "highlightHeight": 61
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 197,
                "y": 328
              },
              "size": {
                "width": 265,
                "height": 82
              },
              "x": 197,
              "y": 328,
              "width": 265,
              "height": 82,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 133,
              "pivotY": 41,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 352,
                "y": 34
              },
              "currentPivotLocation": {
                "x": 133,
                "y": 41
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 198,
              "highlightHeight": 61
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 561,
                "y": 328
              },
              "size": {
                "width": 265,
                "height": 82
              },
              "x": 561,
              "y": 328,
              "width": 265,
              "height": 82,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 133,
                "y": 41
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 198,
              "highlightHeight": 61
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 561,
                "y": 328
              },
              "size": {
                "width": 265,
                "height": 82
              },
              "x": 561,
              "y": 328,
              "width": 265,
              "height": 82,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 198,
              "highlightHeight": 61
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 197,
                "y": 455
              },
              "size": {
                "width": 265,
                "height": 82
              },
              "x": 197,
              "y": 455,
              "width": 265,
              "height": 82,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 133,
                "y": 41
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 198,
              "highlightHeight": 61
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 197,
                "y": 455
              },
              "size": {
                "width": 265,
                "height": 82
              },
              "x": 197,
              "y": 455,
              "width": 265,
              "height": 82,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 198,
              "highlightHeight": 61
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 561,
                "y": 455
              },
              "size": {
                "width": 265,
                "height": 82
              },
              "x": 561,
              "y": 455,
              "width": 265,
              "height": 82,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 133,
                "y": 41
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 198,
              "highlightHeight": 61
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 561,
                "y": 455
              },
              "size": {
                "width": 265,
                "height": 82
              },
              "x": 561,
              "y": 455,
              "width": 265,
              "height": 82,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 198,
              "highlightHeight": 61
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "ec7dd594-0b73-4b2c-960f-4fec3126f1ee",
          "frameIndex": 5,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 131,
                "y": 355
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 131,
              "y": 355,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 131,
                "y": 363
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 131,
              "y": 363,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 345,
                "y": 361
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 345,
              "y": 361,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 341,
                "y": 353
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 341,
              "y": 353,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 548,
                "y": 364
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 548,
              "y": 364,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 548,
                "y": 355
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 548,
              "y": 355,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 755,
                "y": 363
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 755,
              "y": 363,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 755,
                "y": 355
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 755,
              "y": 355,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "1baa573b-be62-458f-8381-39f11125189a",
          "frameIndex": 6,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 245,
                "y": 340
              },
              "size": {
                "width": 176,
                "height": 87
              },
              "x": 245,
              "y": 340,
              "width": 176,
              "height": 87,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 132,
              "highlightHeight": 65
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 245,
                "y": 340
              },
              "size": {
                "width": 176,
                "height": 87
              },
              "x": 245,
              "y": 340,
              "width": 176,
              "height": 87,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 88,
              "pivotY": 44,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 155,
                "y": 38
              },
              "currentPivotLocation": {
                "x": 88,
                "y": 44
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 132,
              "highlightHeight": 65
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 617,
                "y": 340
              },
              "size": {
                "width": 176,
                "height": 87
              },
              "x": 617,
              "y": 340,
              "width": 176,
              "height": 87,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 88,
                "y": 44
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 132,
              "highlightHeight": 65
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 617,
                "y": 340
              },
              "size": {
                "width": 176,
                "height": 87
              },
              "x": 617,
              "y": 340,
              "width": 176,
              "height": 87,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 51
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 132,
              "highlightHeight": 65
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 245,
                "y": 451
              },
              "size": {
                "width": 176,
                "height": 87
              },
              "x": 245,
              "y": 451,
              "width": 176,
              "height": 87,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 88,
                "y": 44
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 132,
              "highlightHeight": 65
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 245,
                "y": 451
              },
              "size": {
                "width": 176,
                "height": 87
              },
              "x": 245,
              "y": 451,
              "width": 176,
              "height": 87,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 132,
              "highlightHeight": 65
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 617,
                "y": 451
              },
              "size": {
                "width": 176,
                "height": 87
              },
              "x": 617,
              "y": 451,
              "width": 176,
              "height": 87,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 88,
                "y": 44
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 132,
              "highlightHeight": 65
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 617,
                "y": 451
              },
              "size": {
                "width": 176,
                "height": 87
              },
              "x": 617,
              "y": 451,
              "width": 176,
              "height": 87,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 132,
              "highlightHeight": 65
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "7352a77d-e9d5-4176-9822-b0d3963901aa",
          "frameIndex": 7,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 143,
                "y": 392
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 143,
              "y": 392,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 143,
                "y": 401
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 143,
              "y": 401,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 356,
                "y": 399
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 356,
              "y": 399,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 353,
                "y": 391
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 353,
              "y": 391,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 556,
                "y": 402
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 556,
              "y": 402,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 556,
                "y": 392
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 556,
              "y": 392,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 760,
                "y": 399
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 760,
              "y": 399,
              "width": 100,
              "height": 100,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 760,
                "y": 391
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 760,
              "y": 391,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 75
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "8043db05-77ae-4207-b3de-82c1511fc0d2",
          "frameIndex": 8,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 128,
                "y": 353
              },
              "size": {
                "width": 134,
                "height": 174
              },
              "x": 128,
              "y": 353,
              "width": 134,
              "height": 174,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 67,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 67,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 67,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 100,
              "highlightHeight": 130
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 128,
                "y": 353
              },
              "size": {
                "width": 134,
                "height": 174
              },
              "x": 128,
              "y": 353,
              "width": 134,
              "height": 174,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 52
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 100,
              "highlightHeight": 130
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 353
              },
              "size": {
                "width": 134,
                "height": 174
              },
              "x": 328,
              "y": 353,
              "width": 134,
              "height": 174,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 100,
              "highlightHeight": 130
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 353
              },
              "size": {
                "width": 134,
                "height": 174
              },
              "x": 328,
              "y": 353,
              "width": 134,
              "height": 174,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 100,
              "highlightHeight": 130
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 530,
                "y": 353
              },
              "size": {
                "width": 134,
                "height": 174
              },
              "x": 530,
              "y": 353,
              "width": 134,
              "height": 174,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 100,
              "highlightHeight": 130
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 530,
                "y": 353
              },
              "size": {
                "width": 134,
                "height": 174
              },
              "x": 530,
              "y": 353,
              "width": 134,
              "height": 174,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 100,
              "highlightHeight": 130
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 734,
                "y": 353
              },
              "size": {
                "width": 134,
                "height": 174
              },
              "x": 734,
              "y": 353,
              "width": 134,
              "height": 174,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 100,
              "highlightHeight": 130
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 734,
                "y": 353
              },
              "size": {
                "width": 134,
                "height": 174
              },
              "x": 734,
              "y": 353,
              "width": 134,
              "height": 174,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 100,
              "highlightHeight": 130
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "51be51f9-77c2-4d13-8e9a-d45576a6a981",
          "frameIndex": 9,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "15bb850b-5bc3-461f-a511-4aa28ea477b6",
          "frameIndex": 10,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 345
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 345,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 345
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 345,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 345
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 345,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 345
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 345,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 345
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 345,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 345
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 345,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 345
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 345,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 345
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 345,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "9edb9fe4-bd8c-4484-a211-6da57464094e",
          "frameIndex": 11,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "f44fd7dd-7b9a-4bb1-aac5-155b432ed829",
          "frameIndex": 12,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 117,
                "y": 338
              },
              "size": {
                "width": 261,
                "height": 87
              },
              "x": 117,
              "y": 338,
              "width": 261,
              "height": 87,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 195,
              "highlightHeight": 65
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 117,
                "y": 338
              },
              "size": {
                "width": 261,
                "height": 87
              },
              "x": 117,
              "y": 338,
              "width": 261,
              "height": 87,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 131,
              "pivotY": 44,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 250,
                "y": 22
              },
              "currentPivotLocation": {
                "x": 131,
                "y": 44
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 195,
              "highlightHeight": 65
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 612,
                "y": 338
              },
              "size": {
                "width": 261,
                "height": 87
              },
              "x": 612,
              "y": 338,
              "width": 261,
              "height": 87,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 131,
                "y": 44
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 195,
              "highlightHeight": 65
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 612,
                "y": 338
              },
              "size": {
                "width": 261,
                "height": 87
              },
              "x": 612,
              "y": 338,
              "width": 261,
              "height": 87,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 195,
              "highlightHeight": 65
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 117,
                "y": 453
              },
              "size": {
                "width": 261,
                "height": 87
              },
              "x": 117,
              "y": 453,
              "width": 261,
              "height": 87,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 131,
                "y": 44
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 195,
              "highlightHeight": 65
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 117,
                "y": 453
              },
              "size": {
                "width": 261,
                "height": 87
              },
              "x": 117,
              "y": 453,
              "width": 261,
              "height": 87,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 195,
              "highlightHeight": 65
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 612,
                "y": 453
              },
              "size": {
                "width": 261,
                "height": 87
              },
              "x": 612,
              "y": 453,
              "width": 261,
              "height": 87,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 131,
                "y": 44
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 195,
              "highlightHeight": 65
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 612,
                "y": 453
              },
              "size": {
                "width": 261,
                "height": 87
              },
              "x": 612,
              "y": 453,
              "width": 261,
              "height": 87,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 195,
              "highlightHeight": 65
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "93cdecc7-5d20-4108-8c4a-d5b7ba607406",
          "frameIndex": 13,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "763de2e4-48fe-4e06-b752-d87498626dbc",
          "frameIndex": 14,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "966753a1-c9d4-4f0b-9987-febab5c39e0d",
          "frameIndex": 15,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "da43ce21-ab27-4f22-b534-cc5ad8e477d1",
          "frameIndex": 16,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 195,
                "y": 340
              },
              "size": {
                "width": 302,
                "height": 73
              },
              "x": 195,
              "y": 340,
              "width": 302,
              "height": 73,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 226,
              "highlightHeight": 54
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 195,
                "y": 340
              },
              "size": {
                "width": 302,
                "height": 73
              },
              "x": 195,
              "y": 340,
              "width": 302,
              "height": 73,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 152,
              "pivotY": 37,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 152,
                "y": 37
              },
              "currentPivotLocation": {
                "x": 152,
                "y": 37
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 226,
              "highlightHeight": 54
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 520,
                "y": 340
              },
              "size": {
                "width": 302,
                "height": 73
              },
              "x": 520,
              "y": 340,
              "width": 302,
              "height": 73,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 226,
              "highlightHeight": 54
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 520,
                "y": 340
              },
              "size": {
                "width": 302,
                "height": 73
              },
              "x": 520,
              "y": 340,
              "width": 302,
              "height": 73,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 226,
              "highlightHeight": 54
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 195,
                "y": 463
              },
              "size": {
                "width": 302,
                "height": 73
              },
              "x": 195,
              "y": 463,
              "width": 302,
              "height": 73,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 226,
              "highlightHeight": 54
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 195,
                "y": 463
              },
              "size": {
                "width": 302,
                "height": 73
              },
              "x": 195,
              "y": 463,
              "width": 302,
              "height": 73,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 226,
              "highlightHeight": 54
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 520,
                "y": 463
              },
              "size": {
                "width": 302,
                "height": 73
              },
              "x": 520,
              "y": 463,
              "width": 302,
              "height": 73,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 226,
              "highlightHeight": 54
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 520,
                "y": 463
              },
              "size": {
                "width": 302,
                "height": 73
              },
              "x": 520,
              "y": 463,
              "width": 302,
              "height": 73,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 226,
              "highlightHeight": 54
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "02957492-a8df-4c62-a258-e6b0b16c71b3",
          "frameIndex": 17,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "af59a764-435e-49c6-a4ed-2aed54e66c42",
          "frameIndex": 18,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "28268bcf-0d95-4012-8dc5-7f77831a324b",
          "frameIndex": 19,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "4c1fcc16-3f81-41db-93ec-8414cde588a0",
          "frameIndex": 20,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "98e6e7f2-0a75-4187-93df-b287cb1ec972",
          "frameIndex": 21,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "4ef407da-4cc2-4650-ba15-200e49a619a1",
          "frameIndex": 22,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "368eee74-0969-4862-858e-d474de7cc264",
          "frameIndex": 23,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "40eb2fa0-c5e6-4f05-a77c-9e91e01d7921",
          "frameIndex": 24,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "f506e122-8508-4ed4-b148-d1a583c369e0",
          "frameIndex": 25,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 126,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 126,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 328,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 328,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 739,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 739,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "4e538e4b-7a46-49fe-abfa-30c79c1cd295",
          "frameIndex": 26,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 130,
                "y": 374
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 130,
              "y": 374,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 130,
                "y": 374
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 130,
              "y": 374,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 333,
                "y": 374
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 333,
              "y": 374,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 333,
                "y": 374
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 333,
              "y": 374,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 374
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 374,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 374
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 374,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 730,
                "y": 374
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 730,
              "y": 374,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 730,
                "y": 374
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 730,
              "y": 374,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "262e3d1c-e605-461a-a5fd-a07b6bf7f56e",
          "frameIndex": 27,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 131,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 131,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 131,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 131,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 333,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 333,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 333,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 333,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 729,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 729,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 729,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 729,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "41b7a3ef-3636-4332-8f40-45d2aeb47315",
          "frameIndex": 28,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 131,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 131,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 131,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 131,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 335,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 335,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 335,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 335,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 729,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 729,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 729,
                "y": 363
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 729,
              "y": 363,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "0cb23a1c-aa06-4a15-90c1-03fe0ad87b13",
          "frameIndex": 29,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content4",
              "uniqueId": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
              "enabled": true,
              "tag": "a",
              "location": {
                "x": 133,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 133,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 133,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 133,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 335,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 335,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 335,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 335,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 533,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 533,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 50
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 732,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 732,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "rectangle",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 732,
                "y": 364
              },
              "size": {
                "width": 137,
                "height": 176
              },
              "x": 732,
              "y": 364,
              "width": 137,
              "height": 176,
              "groupName": "content",
              "groupOrder": 7,
              "pivotX": 69,
              "pivotY": 88,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 69,
                "y": 88
              },
              "currentPivotLocation": {
                "x": 69,
                "y": 88
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 102,
              "highlightHeight": 132
            }
          ],
          "blocks": []
        }
      ]
    },
    {
      "uniqueId": "6c2197ab-cbeb-43fd-a683-cbb3d26821a4",
      "name": "sorular",
      "underscoredName": "sorular",
      "keyframes": [
        {
          "uniqueId": "45e4a47c-2757-4c9f-b40b-e535444c16f5",
          "frameIndex": 0,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image1",
              "uniqueId": "cd2cbd70-80c6-4482-8f48-49c045834c57",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 284,
                "y": 27
              },
              "size": {
                "width": 432,
                "height": 417
              },
              "x": 284,
              "y": 27,
              "width": 432,
              "height": 417,
              "groupName": "image",
              "groupOrder": 1,
              "pivotX": 216,
              "pivotY": 209,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 216,
                "y": 209
              },
              "currentPivotLocation": {
                "x": 216,
                "y": 209
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/000.png",
              "imageName": "000",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 2743,
              "spriteHeight": 2646,
              "highlightWidth": 324,
              "highlightHeight": 312,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            },
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "btnBasla",
              "uniqueId": "192f881f-c3f0-433a-a52c-184155c56fdf",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 284,
                "y": 480
              },
              "size": {
                "width": 432,
                "height": 111
              },
              "x": 284,
              "y": 480,
              "width": 432,
              "height": 111,
              "groupName": "btnBasla",
              "groupOrder": 0,
              "attributes": [
                {
                  "name": "font-size",
                  "value": "large"
                }
              ],
              "pivotX": 207,
              "pivotY": 53,
              "alpha": 100,
              "visible": true,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 216,
                "y": 53
              },
              "currentPivotLocation": {
                "x": 207,
                "y": 53
              },
              "styles": [
                {
                  "name": "font-size",
                  "value": "20px"
                }
              ],
              "isVisual": true,
              "value": "SINAVA BAŞLA"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "5773752f-7ea3-4a60-9dbd-2d2ec48f047d",
          "frameIndex": 1,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image2",
              "uniqueId": "117fe6ef-eab5-4e92-8347-1ae9d6e3658e",
              "enabled": true,
              "tag": "sabit",
              "location": {
                "x": 94,
                "y": 46
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 46,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 2,
              "pivotX": 498,
              "pivotY": 311,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 498,
                "y": 311
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/001.png",
              "imageName": "001",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "3381bca5-5fa9-4c03-8d92-ee21c64954f7",
          "frameIndex": 2,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image4",
              "uniqueId": "a4f2785b-805d-4e60-9d69-507803c8bcd9",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 44
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 44,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 4,
              "pivotX": 406,
              "pivotY": 254,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 406,
                "y": 254
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/002.png",
              "imageName": "002",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "1dced7a0-7ccc-453d-a4d3-a593e3d7d0dc",
          "frameIndex": 3,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image3",
              "uniqueId": "709c7e1d-0e9f-49fd-8ce2-901e49d14705",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 42
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 42,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 3,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/003.png",
              "imageName": "003",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "395f5b8b-dfe4-4dcd-9f4c-2427e0b210f4",
          "frameIndex": 4,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image5",
              "uniqueId": "622394af-2988-4d15-af7f-761ceee42ab8",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 42
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 42,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 5,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/004.png",
              "imageName": "004",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "92742356-6e39-49f1-86bd-d3af0191984f",
          "frameIndex": 5,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image6",
              "uniqueId": "2b78eb36-c00c-44d6-843e-ee262db49a38",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 37
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 37,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 6,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/005.png",
              "imageName": "005",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "bfe6c35e-4828-4827-aa4a-b8de47c141fb",
          "frameIndex": 6,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image7",
              "uniqueId": "010682cb-50dc-401f-b9e3-8e04d7c2fe58",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 48
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 48,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 7,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/006.png",
              "imageName": "006",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "5e15ac66-9726-4873-beb2-2739f5772452",
          "frameIndex": 7,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image8",
              "uniqueId": "ce006853-5bf4-4a2a-a4da-5ee8de810455",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 64
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 64,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 8,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/007.png",
              "imageName": "007",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "bca50789-5284-4548-916a-58af9df192e2",
          "frameIndex": 8,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image9",
              "uniqueId": "bddcbb52-65b3-4102-9496-013473fec783",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 47
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 47,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 9,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/008.png",
              "imageName": "008",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "e6525610-da9b-4048-9a64-f5c16b8217c5",
          "frameIndex": 9,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image10",
              "uniqueId": "b3e60e2d-8bec-4abf-a60c-3df5d7d90e29",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 56
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 56,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 10,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/009.png",
              "imageName": "009",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "8f50e417-bcb0-4354-8ee1-274959d85b00",
          "frameIndex": 10,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image11",
              "uniqueId": "d6798dca-8267-4848-a32e-3e075ce9dc23",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 38
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 38,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 11,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/010.png",
              "imageName": "010",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "b4773486-0278-4703-b386-bde7d7506c04",
          "frameIndex": 11,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image23",
              "uniqueId": "240680e1-fc81-4e8c-91f9-17fddb8a7978",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 54
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 54,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 23,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/011.png",
              "imageName": "011",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "2613bad7-eee7-4811-913f-39b97986619d",
          "frameIndex": 12,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image12",
              "uniqueId": "3fc6c2e1-e0ba-4290-9f26-2c05a47eec36",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 46
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 46,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 12,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/012.png",
              "imageName": "012",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "502819f9-e4e2-4448-88e4-4acfec4aded1",
          "frameIndex": 13,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image13",
              "uniqueId": "6f76a7f2-fa82-426e-aec9-8bb2e7077a95",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 46
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 46,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 13,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/013.png",
              "imageName": "013",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "b48c62ed-92d9-4aa6-8cc4-e729c08237c6",
          "frameIndex": 14,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image14",
              "uniqueId": "5d015ad9-98d6-4023-8393-29250888ecfa",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 52
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 52,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 14,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/014.png",
              "imageName": "014",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "eb75a80d-37c6-4273-a369-13864ebee5db",
          "frameIndex": 15,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image15",
              "uniqueId": "e4569c5c-43e0-4f33-b787-ba8a1a55f413",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 46
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 46,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 15,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/015.png",
              "imageName": "015",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "337b1711-90ff-4289-992d-0fce38380985",
          "frameIndex": 16,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image16",
              "uniqueId": "9720e6ea-6bc5-4446-9fc5-0ec210728bd2",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 45
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 45,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 16,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/016.png",
              "imageName": "016",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "87734b7e-b117-42f1-8d7f-d41f14ab627f",
          "frameIndex": 17,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image17",
              "uniqueId": "b482d700-24fa-4631-bd30-0263a1ac039f",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 45
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 45,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 17,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/017.png",
              "imageName": "017",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "143c8144-eb03-4f75-b7df-2b3f04475968",
          "frameIndex": 18,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image18",
              "uniqueId": "79158b42-bb2d-40a1-8b42-fb4d512b5e38",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 41
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 41,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 18,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/018.png",
              "imageName": "018",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "e2ef1624-5234-46de-b36e-a93aafacc5bd",
          "frameIndex": 19,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image19",
              "uniqueId": "e73be10e-305c-408d-a0eb-885856e85696",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 42
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 42,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 19,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/019.png",
              "imageName": "019",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "f7b783b3-50c7-4173-9193-775de5a3c5e4",
          "frameIndex": 20,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image20",
              "uniqueId": "73405d82-faab-4137-9cb2-1d6124eb56f1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 46
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 46,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 20,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/020.png",
              "imageName": "020",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "a73ea564-8b55-48fd-b2fe-0dc72526d266",
          "frameIndex": 21,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image21",
              "uniqueId": "cd2e352c-c8ac-4631-908f-a4b67aac1f5c",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 44
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 44,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 21,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/021.png",
              "imageName": "021",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "543362c6-1846-40e4-aa2c-5524af085f5d",
          "frameIndex": 22,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image22",
              "uniqueId": "3c910541-8d78-43b1-a9fc-a4b9e8d09bbd",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 37
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 37,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 22,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/022.png",
              "imageName": "022",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "18dd14c8-4f34-4f6a-aaa2-ed8a9d502ddf",
          "frameIndex": 23,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image24",
              "uniqueId": "bf3773d9-8c75-451d-8a74-5aec0e9e1a38",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 44
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 44,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 24,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/023.png",
              "imageName": "023",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "2dd09dbd-f88a-4c7a-a94f-9791d7e65746",
          "frameIndex": 24,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image25",
              "uniqueId": "df97fe5b-3c99-4f02-89aa-7fea1ce3e132",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 43
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 43,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 25,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/024.png",
              "imageName": "024",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "bb6e1a9c-ddaf-488d-a709-ecbb9cac7a99",
          "frameIndex": 25,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image26",
              "uniqueId": "4f7a0ee8-75e6-40df-8cb5-fcc3e7e03c1f",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 44
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 44,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 26,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/025.png",
              "imageName": "025",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "c14ce1cd-ba3a-4485-8664-2e486e2bae0f",
          "frameIndex": 26,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image27",
              "uniqueId": "aceb1f9b-1cc8-4086-ab1d-f74c46dfec41",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 43
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 43,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 27,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/026.png",
              "imageName": "026",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "80635a5d-a11c-421f-bd15-74e59ed53bab",
          "frameIndex": 27,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image28",
              "uniqueId": "a927e630-9caf-4a2d-87b7-a99ef64c70d5",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 46
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 46,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 28,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/027.png",
              "imageName": "027",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "202994b5-b87a-4d23-b966-964e8fb5ab03",
          "frameIndex": 28,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image29",
              "uniqueId": "92f90b3d-377e-47f9-9be3-c1a6b27f367d",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 46
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 46,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 29,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/028.png",
              "imageName": "028",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "595a9431-9fd0-4874-a92c-c36d62046bf0",
          "frameIndex": 29,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image30",
              "uniqueId": "c7c28e12-7d3f-444b-941f-d533def19d6c",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 94,
                "y": 42
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 94,
              "y": 42,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 30,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 406,
                "y": 254
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/029.png",
              "imageName": "029",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 1920,
              "spriteHeight": 1200,
              "highlightWidth": 609,
              "highlightHeight": 380,
              "isSprite": false,
              "spriteFrameCount": 0,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": false,
              "isSpriteLooping": false,
              "keepAspectRatio": false,
              "resizingType": "scale",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "45c8c9f2-49c0-4102-b021-1bbb20354fd6",
          "frameIndex": 30,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "textDesignObject",
              "type": "text",
              "id": "text1",
              "uniqueId": "e9547784-257e-477d-939b-2718255b4e30",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 202,
                "y": 120
              },
              "size": {
                "width": 600,
                "height": 158
              },
              "x": 202,
              "y": 120,
              "width": 600,
              "height": 158,
              "groupName": "text",
              "groupOrder": 1,
              "pivotX": 300,
              "pivotY": 79,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 300,
                "y": 79
              },
              "currentPivotLocation": {
                "x": 300,
                "y": 79
              },
              "isVisual": true,
              "highlightBehavior": false,
              "clippingBehavior": "clip",
              "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs4F8A2B7E{color:#000000;background-color:transparent;font-family:Calibri;font-size:36px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs4F8A2B7E\">TEBRİKLER SINAVI TAMAMLADINIZ</span></p><p class=\"cs2E86D3A6\"><span class=\"cs4F8A2B7E\">DOĞRU SAYINIZ</span></p></body>\r\n</html>",
              "text": "TEBRİKLER SINAVI TAMAMLADINIZ\r\nDOĞRU SAYINIZ",
              "highlightWidth": 450,
              "highlightHeight": 118
            },
            {
              "typeName": "textDesignObject",
              "type": "text",
              "id": "textSonuc",
              "uniqueId": "8d8fd2c1-c1cb-4cc2-83d4-99425b976759",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 202,
                "y": 228
              },
              "size": {
                "width": 601,
                "height": 159
              },
              "x": 202,
              "y": 228,
              "width": 601,
              "height": 159,
              "groupName": "textSonuc",
              "groupOrder": 0,
              "pivotX": 300,
              "pivotY": 79,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 301,
                "y": 80
              },
              "currentPivotLocation": {
                "x": 300,
                "y": 79
              },
              "styles": [
                {
                  "name": "font-size",
                  "value": "32px"
                },
                {
                  "name": "text-align",
                  "value": "center"
                }
              ],
              "isVisual": true,
              "highlightBehavior": false,
              "clippingBehavior": "clip",
              "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.csF14F9441{color:#000000;background-color:transparent;font-family:Calibri;font-size:48px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"csF14F9441\">.</span></p></body>\r\n</html>",
              "text": ".",
              "highlightWidth": 450,
              "highlightHeight": 119
            }
          ],
          "blocks": []
        }
      ]
    }
  ]
};
