var vFabrikaPlayerData_Bilsem1F = {
  "isLooping": false,
  "isAutoPlay": true,
  "stageWidth": 1000,
  "stageHeight": 625,
  "frameCount": 34,
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
          "frameCount": 33,
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
            }
          ],
          "blocks": [
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
                        "uniqueId": "240ea1f6-0d81-4a72-a967-b09b91d583bf",
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
                              "uniqueId": "e8f04286-c883-4a68-9900-56487b245beb",
                              "type": "listContains",
                              "inputs": [
                                {
                                  "name": "list",
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
                                                  "value": "sabit_resimler_indeksleri"
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
                                  "name": "item",
                                  "type": "pin",
                                  "items": [],
                                  "block": {
                                    "uniqueId": "36d0dcb7-ce8f-4d5e-a40b-b36e1650502f",
                                    "type": "textToText",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "pin",
                                        "items": [],
                                        "block": {
                                          "uniqueId": "0c21c701-0c2d-4124-b4f1-b44ca8c359f9",
                                          "type": "timelineGetFrameIndex",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": []
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  }
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
                            "uniqueId": "f8b94c1f-1ae4-410d-aa1f-c52668105434",
                            "name": "else",
                            "allowOnlyOnce": true,
                            "defaultValue": ""
                          }
                        ],
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
                    }
                  }
                }
              ]
            },
            {
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
            },
            {
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
            },
            {
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
                                                      "uniqueId": "3931fda4-e5a4-43bb-9d6d-1c170b5a1497",
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
                                                              "value": 2
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
              "uniqueId": "d8abf01a-f594-4a53-907c-b6a5edb6326e",
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
                      "value": "sabit_resimler_indeksleri"
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
                            "value": "27,29,31"
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
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
                            "value": "b,d,a,c,b,b,d,d,c,d,a,a,c,c,b,c,b,e,b,d,c,b,b,b,c,c,0,c,0,a,0,d"
                          }
                        ]
                      }
                    ]
                  }
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
                                      "uniqueId": "71cbec62-1042-40f4-a012-36ecdf0739ee",
                                      "type": "listGetItemAt",
                                      "inputs": [
                                        {
                                          "name": "list",
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
                                                      "uniqueId": "3931fda4-e5a4-43bb-9d6d-1c170b5a1497",
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
                                                              "value": 2
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
                                      "uniqueId": "71cbec62-1042-40f4-a012-36ecdf0739ee",
                                      "type": "listGetItemAt",
                                      "inputs": [
                                        {
                                          "name": "list",
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
                                                      "uniqueId": "3931fda4-e5a4-43bb-9d6d-1c170b5a1497",
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
                                                              "value": 2
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
                                      "uniqueId": "71cbec62-1042-40f4-a012-36ecdf0739ee",
                                      "type": "listGetItemAt",
                                      "inputs": [
                                        {
                                          "name": "list",
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
                                                      "uniqueId": "3931fda4-e5a4-43bb-9d6d-1c170b5a1497",
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
                                                              "value": 2
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
            }
          ]
        },
        {
          "uniqueId": "597dad56-9ae6-4842-91b0-46cbc168ea98",
          "frameIndex": 33,
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
          "frameCount": 30,
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
                "x": 100,
                "y": 393
              },
              "size": {
                "width": 174,
                "height": 144
              },
              "x": 100,
              "y": 393,
              "width": 174,
              "height": 144,
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
              "highlightWidth": 130,
              "highlightHeight": 108
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 100,
                "y": 393
              },
              "size": {
                "width": 174,
                "height": 144
              },
              "x": 100,
              "y": 393,
              "width": 174,
              "height": 144,
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
                "x": 59,
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
              "highlightWidth": 130,
              "highlightHeight": 108
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 305,
                "y": 384
              },
              "size": {
                "width": 174,
                "height": 144
              },
              "x": 305,
              "y": 384,
              "width": 174,
              "height": 144,
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
                "x": 59,
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
              "highlightWidth": 130,
              "highlightHeight": 108
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 305,
                "y": 384
              },
              "size": {
                "width": 174,
                "height": 144
              },
              "x": 305,
              "y": 384,
              "width": 174,
              "height": 144,
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
              "highlightWidth": 130,
              "highlightHeight": 108
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 503,
                "y": 396
              },
              "size": {
                "width": 174,
                "height": 144
              },
              "x": 503,
              "y": 396,
              "width": 174,
              "height": 144,
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
                "x": 59,
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
              "highlightWidth": 130,
              "highlightHeight": 108
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 503,
                "y": 396
              },
              "size": {
                "width": 174,
                "height": 144
              },
              "x": 503,
              "y": 396,
              "width": 174,
              "height": 144,
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
              "highlightWidth": 130,
              "highlightHeight": 108
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 709,
                "y": 386
              },
              "size": {
                "width": 174,
                "height": 144
              },
              "x": 709,
              "y": 386,
              "width": 174,
              "height": 144,
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
                "x": 59,
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
              "highlightWidth": 130,
              "highlightHeight": 108
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 709,
                "y": 386
              },
              "size": {
                "width": 174,
                "height": 144
              },
              "x": 709,
              "y": 386,
              "width": 174,
              "height": 144,
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
              "highlightWidth": 130,
              "highlightHeight": 108
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
                "x": 143,
                "y": 396
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 143,
              "y": 396,
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
                "y": 404
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 143,
              "y": 404,
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
                "y": 402
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 356,
              "y": 402,
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
                "y": 394
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 353,
              "y": 394,
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
                "x": 560,
                "y": 407
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 560,
              "y": 407,
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
                "x": 560,
                "y": 397
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 560,
              "y": 397,
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
                "x": 772,
                "y": 404
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 772,
              "y": 404,
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
                "x": 772,
                "y": 396
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 772,
              "y": 396,
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
                "x": 141,
                "y": 353
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 141,
              "y": 353,
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
                "x": 141,
                "y": 361
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 141,
              "y": 361,
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
                "x": 355,
                "y": 359
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 355,
              "y": 359,
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
                "x": 351,
                "y": 351
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 351,
              "y": 351,
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
                "x": 547,
                "y": 364
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 547,
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
                "x": 547,
                "y": 355
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 547,
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
                "y": 361
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 755,
              "y": 361,
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
                "y": 353
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 755,
              "y": 353,
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
                "x": 135,
                "y": 394
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 135,
              "y": 394,
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
                "y": 402
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 135,
              "y": 402,
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
                "y": 401
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 348,
              "y": 401,
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
                "y": 392
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 345,
              "y": 392,
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
                "y": 405
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 552,
              "y": 405,
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
                "y": 396
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 552,
              "y": 396,
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
                "y": 402
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 763,
              "y": 402,
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
                "y": 394
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 763,
              "y": 394,
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
          "uniqueId": "ce226c66-d493-48ce-b11f-63c6ee6a4952",
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
          "uniqueId": "071d60ec-b1f3-45fb-b437-e761085496cb",
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
                "y": 369
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 126,
              "y": 369,
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
                "x": 126,
                "y": 378
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 126,
              "y": 378,
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
                "x": 340,
                "y": 376
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 340,
              "y": 376,
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
                "x": 337,
                "y": 368
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 337,
              "y": 368,
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
                "x": 543,
                "y": 381
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 543,
              "y": 381,
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
                "x": 543,
                "y": 371
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 543,
              "y": 371,
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
                "y": 378
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 755,
              "y": 378,
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
                "y": 369
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 755,
              "y": 369,
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
          "uniqueId": "471f3da7-42fb-4e64-8f35-5492b97b3484",
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
          "uniqueId": "ffd2a4e9-915f-45ed-9e6b-82f090d81faa",
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
                "x": 141,
                "y": 373
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 141,
              "y": 373,
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
                "x": 141,
                "y": 381
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 141,
              "y": 381,
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
                "x": 351,
                "y": 379
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 351,
              "y": 379,
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
                "x": 348,
                "y": 371
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 348,
              "y": 371,
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
                "x": 550,
                "y": 376
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 550,
              "y": 376,
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
                "x": 550,
                "y": 366
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 550,
              "y": 366,
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
                "x": 750,
                "y": 378
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 750,
              "y": 378,
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
                "x": 750,
                "y": 369
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 750,
              "y": 369,
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
          "uniqueId": "bac15099-9626-4eee-a621-a09f967f0482",
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
                "x": 141,
                "y": 376
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 141,
              "y": 376,
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
                "x": 141,
                "y": 384
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 141,
              "y": 384,
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
                "x": 355,
                "y": 384
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 355,
              "y": 384,
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
                "x": 351,
                "y": 376
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 351,
              "y": 376,
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
                "x": 560,
                "y": 381
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 560,
              "y": 381,
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
                "x": 560,
                "y": 371
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 560,
              "y": 371,
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
                "x": 772,
                "y": 379
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 772,
              "y": 379,
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
                "x": 772,
                "y": 371
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 772,
              "y": 371,
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
          "uniqueId": "bdf623b1-582d-44ce-a177-2ec28688a202",
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
                "x": 143,
                "y": 374
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 143,
              "y": 374,
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
                "y": 382
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 143,
              "y": 382,
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
                "y": 381
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 356,
              "y": 381,
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
                "y": 373
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 353,
              "y": 373,
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
                "x": 560,
                "y": 386
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 560,
              "y": 386,
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
                "x": 560,
                "y": 376
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 560,
              "y": 376,
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
                "y": 376
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 755,
              "y": 376,
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
                "y": 368
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 755,
              "y": 368,
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
          "uniqueId": "6beda088-bb27-42df-955b-496b2dc8942f",
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
                "x": 143,
                "y": 369
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 143,
              "y": 369,
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
                "y": 378
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 143,
              "y": 378,
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
                "y": 384
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 348,
              "y": 384,
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
                "y": 376
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 345,
              "y": 376,
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
                "y": 382
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 548,
              "y": 382,
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
                "y": 373
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 548,
              "y": 373,
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
                "x": 747,
                "y": 378
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 747,
              "y": 378,
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
          "uniqueId": "f9942538-0e9b-489a-9020-e06b1a8c6a02",
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
                "x": 144,
                "y": 369
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 144,
              "y": 369,
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
                "x": 144,
                "y": 378
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 144,
              "y": 378,
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
                "x": 358,
                "y": 376
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 358,
              "y": 376,
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
                "x": 355,
                "y": 368
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 355,
              "y": 368,
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
                "x": 553,
                "y": 379
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 553,
              "y": 379,
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
                "x": 553,
                "y": 369
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 553,
              "y": 369,
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
                "x": 750,
                "y": 378
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 750,
              "y": 378,
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
                "x": 750,
                "y": 369
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 750,
              "y": 369,
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
          "uniqueId": "514264a3-6713-4730-bd64-d08c5ce7f2ec",
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
                "x": 140,
                "y": 369
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 140,
              "y": 369,
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
                "x": 140,
                "y": 378
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 140,
              "y": 378,
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
                "y": 376
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 348,
              "y": 376,
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
                "y": 368
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 345,
              "y": 368,
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
                "y": 378
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 552,
              "y": 378,
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
                "y": 368
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 552,
              "y": 368,
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
                "x": 757,
                "y": 376
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 757,
              "y": 376,
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
                "x": 757,
                "y": 368
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 757,
              "y": 368,
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
          "uniqueId": "aa515657-ca04-46c0-8746-f84db4b118e6",
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
                "x": 136,
                "y": 397
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 136,
              "y": 397,
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
                "x": 136,
                "y": 405
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 136,
              "y": 405,
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
                "x": 340,
                "y": 404
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 340,
              "y": 404,
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
                "x": 337,
                "y": 396
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 337,
              "y": 396,
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
                "x": 543,
                "y": 409
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 543,
              "y": 409,
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
                "x": 543,
                "y": 399
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 543,
              "y": 399,
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
                "y": 405
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 755,
              "y": 405,
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
                "y": 397
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 755,
              "y": 397,
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
          "uniqueId": "4dd5e614-8a32-468e-89d8-edff5e9e2b97",
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
                "x": 133,
                "y": 397
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 133,
              "y": 397,
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
                "x": 133,
                "y": 405
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 133,
              "y": 405,
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
                "x": 346,
                "y": 404
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 346,
              "y": 404,
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
                "x": 343,
                "y": 396
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 343,
              "y": 396,
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
                "x": 540,
                "y": 409
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 540,
              "y": 409,
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
                "x": 540,
                "y": 399
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 540,
              "y": 399,
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
                "x": 745,
                "y": 405
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 745,
              "y": 405,
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
                "x": 745,
                "y": 397
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 745,
              "y": 397,
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
          "uniqueId": "dcf854ae-80a6-45d8-9c5a-c3a0eea7fdcf",
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
                "x": 136,
                "y": 404
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 136,
              "y": 404,
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
                "x": 136,
                "y": 412
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 136,
              "y": 412,
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
                "x": 350,
                "y": 410
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 350,
              "y": 410,
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
                "x": 346,
                "y": 402
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 346,
              "y": 402,
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
                "x": 553,
                "y": 415
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 553,
              "y": 415,
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
                "x": 553,
                "y": 405
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 553,
              "y": 405,
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
                "x": 749,
                "y": 412
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 749,
              "y": 412,
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
                "x": 749,
                "y": 404
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 749,
              "y": 404,
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
          "uniqueId": "430ff6e8-4d27-4d19-83f1-2fed8265b581",
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
                "x": 749,
                "y": 392
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 749,
              "y": 392,
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
                "x": 749,
                "y": 384
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 749,
              "y": 384,
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
          "uniqueId": "58d2da46-f147-4202-97a5-af9e09bfd441",
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
                "x": 144,
                "y": 382
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 144,
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
                "x": 144,
                "y": 391
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 144,
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
                "x": 739,
                "y": 391
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 739,
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
                "x": 739,
                "y": 382
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 739,
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
          "uniqueId": "85dcbec7-bb6d-487f-9914-80411851972d",
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
                "x": 750,
                "y": 391
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 750,
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
                "x": 750,
                "y": 382
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 750,
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
          "uniqueId": "86f5fcad-8cc2-4066-a91a-7c7d29f0f780",
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
                "x": 163,
                "y": 386
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 163,
              "y": 386,
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
                "x": 163,
                "y": 394
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 163,
              "y": 394,
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
                "x": 358,
                "y": 401
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 358,
              "y": 401,
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
                "x": 355,
                "y": 392
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 355,
              "y": 392,
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
                "x": 542,
                "y": 397
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 542,
              "y": 397,
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
                "x": 542,
                "y": 387
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 542,
              "y": 387,
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
                "x": 732,
                "y": 397
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 732,
              "y": 397,
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
                "x": 732,
                "y": 389
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 732,
              "y": 389,
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
          "uniqueId": "484256bd-80d2-4320-b1c7-cada3f6289e3",
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
                "x": 166,
                "y": 394
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 166,
              "y": 394,
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
                "x": 166,
                "y": 402
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 166,
              "y": 402,
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
                "x": 361,
                "y": 402
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 361,
              "y": 402,
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
                "x": 358,
                "y": 394
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 358,
              "y": 394,
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
                "x": 547,
                "y": 402
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 547,
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
                "x": 547,
                "y": 392
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 547,
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
                "x": 737,
                "y": 394
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 737,
              "y": 394,
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
          "uniqueId": "a6ca3d08-da8b-4911-926f-f67f7266146e",
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
                "x": 163,
                "y": 396
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 163,
              "y": 396,
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
                "x": 163,
                "y": 404
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 163,
              "y": 404,
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
                "x": 355,
                "y": 405
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 355,
              "y": 405,
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
                "x": 351,
                "y": 397
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 351,
              "y": 397,
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
                "x": 535,
                "y": 407
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 535,
              "y": 407,
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
                "x": 535,
                "y": 397
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 535,
              "y": 397,
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
                "x": 734,
                "y": 404
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 734,
              "y": 404,
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
                "x": 734,
                "y": 396
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 734,
              "y": 396,
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
          "uniqueId": "a3bb15d7-71fe-4153-9937-8c46016e559e",
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
                "x": 192,
                "y": 343
              },
              "size": {
                "width": 284,
                "height": 80
              },
              "x": 192,
              "y": 343,
              "width": 284,
              "height": 80,
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
              "highlightWidth": 213,
              "highlightHeight": 60
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 192,
                "y": 343
              },
              "size": {
                "width": 284,
                "height": 80
              },
              "x": 192,
              "y": 343,
              "width": 284,
              "height": 80,
              "groupName": "rectangle",
              "groupOrder": 4,
              "pivotX": 142,
              "pivotY": 40,
              "alpha": 30,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 403,
                "y": 32
              },
              "currentPivotLocation": {
                "x": 142,
                "y": 40
              },
              "isVisual": true,
              "fillColor": "#5f9ea0",
              "strokeColor": "#808080",
              "strokeThickness": 2.0,
              "highlightBehavior": false,
              "highlightWidth": 213,
              "highlightHeight": 60
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
                "y": 345
              },
              "size": {
                "width": 284,
                "height": 80
              },
              "x": 520,
              "y": 345,
              "width": 284,
              "height": 80,
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
                "x": 142,
                "y": 40
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
              "highlightWidth": 213,
              "highlightHeight": 60
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
                "y": 345
              },
              "size": {
                "width": 284,
                "height": 80
              },
              "x": 520,
              "y": 345,
              "width": 284,
              "height": 80,
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
              "highlightWidth": 213,
              "highlightHeight": 60
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 194,
                "y": 451
              },
              "size": {
                "width": 284,
                "height": 80
              },
              "x": 194,
              "y": 451,
              "width": 284,
              "height": 80,
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
                "x": 142,
                "y": 40
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
              "highlightWidth": 213,
              "highlightHeight": 60
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 194,
                "y": 451
              },
              "size": {
                "width": 284,
                "height": 80
              },
              "x": 194,
              "y": 451,
              "width": 284,
              "height": 80,
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
              "highlightWidth": 213,
              "highlightHeight": 60
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
                "y": 448
              },
              "size": {
                "width": 284,
                "height": 80
              },
              "x": 520,
              "y": 448,
              "width": 284,
              "height": 80,
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
                "x": 142,
                "y": 40
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
              "highlightWidth": 213,
              "highlightHeight": 60
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
                "y": 448
              },
              "size": {
                "width": 284,
                "height": 80
              },
              "x": 520,
              "y": 448,
              "width": 284,
              "height": 80,
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
              "highlightWidth": 213,
              "highlightHeight": 60
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "5847fb17-4123-4ff4-ab88-6b5c069151d9",
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
                "x": 189,
                "y": 348
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 189,
              "y": 348,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 189,
                "y": 348
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 189,
              "y": 348,
              "width": 301,
              "height": 76,
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
                "x": 151,
                "y": 38
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 187,
                "y": 451
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 187,
              "y": 451,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 187,
                "y": 451
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 187,
              "y": 451,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 514,
                "y": 348
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 514,
              "y": 348,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 514,
                "y": 348
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 514,
              "y": 348,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 512,
                "y": 450
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 512,
              "y": 450,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 512,
                "y": 450
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 512,
              "y": 450,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "98fa5e88-d43d-4676-b524-b410a0941d72",
          "frameIndex": 30,
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
                "x": 177,
                "y": 343
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 177,
              "y": 343,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 177,
                "y": 343
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 177,
              "y": 343,
              "width": 301,
              "height": 76,
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
                "x": 151,
                "y": 38
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 502,
                "y": 345
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 502,
              "y": 345,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 502,
                "y": 345
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 502,
              "y": 345,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 179,
                "y": 446
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 179,
              "y": 446,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 179,
                "y": 446
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 179,
              "y": 446,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 512,
                "y": 450
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 512,
              "y": 450,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 512,
                "y": 450
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 512,
              "y": 450,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "5e889524-9542-4bf4-a743-6c6584f450b3",
          "frameIndex": 31,
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
                "x": 171,
                "y": 345
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 171,
              "y": 345,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 171,
                "y": 345
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 171,
              "y": 345,
              "width": 301,
              "height": 76,
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
                "x": 151,
                "y": 38
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle5",
              "uniqueId": "93c8d212-3210-4586-8691-cb88ffde4c74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 169,
                "y": 450
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 169,
              "y": 450,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content5",
              "uniqueId": "18f03333-6a3d-452d-b91f-1d92468728e7",
              "enabled": true,
              "tag": "b",
              "location": {
                "x": 169,
                "y": 450
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 169,
              "y": 450,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 514,
                "y": 348
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 514,
              "y": 348,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 514,
                "y": 348
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 514,
              "y": 348,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 504,
                "y": 450
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 504,
              "y": 450,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 504,
                "y": 450
              },
              "size": {
                "width": 301,
                "height": 76
              },
              "x": 504,
              "y": 450,
              "width": 301,
              "height": 76,
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
              "highlightWidth": 225,
              "highlightHeight": 57
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "f9e2d340-373b-4da3-a426-e0257958aea3",
          "frameIndex": 32,
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
                "x": 123,
                "y": 358
              },
              "size": {
                "width": 144,
                "height": 179
              },
              "x": 123,
              "y": 358,
              "width": 144,
              "height": 179,
              "groupName": "content",
              "groupOrder": 4,
              "pivotX": 23,
              "pivotY": 118,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 23,
                "y": 118
              },
              "currentPivotLocation": {
                "x": 23,
                "y": 118
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 108,
              "highlightHeight": 134
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle4",
              "uniqueId": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 123,
                "y": 358
              },
              "size": {
                "width": 144,
                "height": 179
              },
              "x": 123,
              "y": 358,
              "width": 144,
              "height": 179,
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
                "x": 151,
                "y": 38
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
              "highlightWidth": 108,
              "highlightHeight": 134
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
                "y": 355
              },
              "size": {
                "width": 144,
                "height": 179
              },
              "x": 328,
              "y": 355,
              "width": 144,
              "height": 179,
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
              "highlightWidth": 108,
              "highlightHeight": 134
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
                "y": 355
              },
              "size": {
                "width": 144,
                "height": 179
              },
              "x": 328,
              "y": 355,
              "width": 144,
              "height": 179,
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
              "highlightWidth": 108,
              "highlightHeight": 134
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle6",
              "uniqueId": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 537,
                "y": 356
              },
              "size": {
                "width": 144,
                "height": 179
              },
              "x": 537,
              "y": 356,
              "width": 144,
              "height": 179,
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
              "highlightWidth": 108,
              "highlightHeight": 134
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content6",
              "uniqueId": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
              "enabled": true,
              "tag": "c",
              "location": {
                "x": 537,
                "y": 356
              },
              "size": {
                "width": 144,
                "height": 179
              },
              "x": 537,
              "y": 356,
              "width": 144,
              "height": 179,
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
              "highlightWidth": 108,
              "highlightHeight": 134
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle7",
              "uniqueId": "7cc811b5-d949-4986-9e94-286ebca067b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 737,
                "y": 355
              },
              "size": {
                "width": 144,
                "height": 179
              },
              "x": 737,
              "y": 355,
              "width": 144,
              "height": 179,
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
              "highlightWidth": 108,
              "highlightHeight": 134
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content7",
              "uniqueId": "4b516e29-86d4-4cd0-90dc-7e540394a704",
              "enabled": true,
              "tag": "d",
              "location": {
                "x": 737,
                "y": 355
              },
              "size": {
                "width": 144,
                "height": 179
              },
              "x": 737,
              "y": 355,
              "width": 144,
              "height": 179,
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
              "highlightWidth": 108,
              "highlightHeight": 134
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
          "uniqueId": "88df6ab9-52e3-4a15-adfb-06e53c7674d1",
          "frameIndex": 30,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image31",
              "uniqueId": "19c7305b-cc82-4687-a7be-9463944aebae",
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
              "groupOrder": 31,
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
              "imageUrl": "img/030.png",
              "imageName": "030",
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
          "uniqueId": "e1772699-41db-4c07-8211-00de99bcf20b",
          "frameIndex": 31,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image33",
              "uniqueId": "8c603f8c-7191-428f-9e90-d60ffa0b9cc8",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 93,
                "y": 51
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 93,
              "y": 51,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 33,
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
              "imageUrl": "img/031.png",
              "imageName": "031",
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
          "uniqueId": "16ce046d-d7aa-40da-8f83-6d4357b4e1f7",
          "frameIndex": 32,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image34",
              "uniqueId": "8b8ff849-c648-4a5c-b6fd-a0d0d6685d14",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 93,
                "y": 46
              },
              "size": {
                "width": 812,
                "height": 507
              },
              "x": 93,
              "y": 46,
              "width": 812,
              "height": 507,
              "groupName": "image",
              "groupOrder": 34,
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
              "imageUrl": "img/032.png",
              "imageName": "032",
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
          "frameIndex": 33,
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
