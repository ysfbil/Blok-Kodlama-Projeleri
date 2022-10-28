var vFabrikaPlayerData_Bilsem1A = {
  "isLooping": false,
  "isAutoPlay": true,
  "stageWidth": 1000,
  "stageHeight": 625,
  "frameCount": 42,
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
          "frameCount": 41,
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
              "id": "SHata",
              "uniqueId": "494b3de3-cf78-4cdd-8bc8-8d18dd43f50d",
              "enabled": false,
              "location": {
                "x": -154,
                "y": 419
              },
              "x": -154,
              "y": 419,
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
              "typeName": "soundDesignObject",
              "type": "sound",
              "id": "SDogru",
              "uniqueId": "560a654b-2edc-4f39-9d79-8057cebcc04e",
              "enabled": false,
              "location": {
                "x": -152,
                "y": 515
              },
              "x": -152,
              "y": 515,
              "width": 48,
              "height": 48,
              "groupName": "SDogru",
              "groupOrder": 0,
              "soundUrl": "dogru",
              "soundFileName": "dogru",
              "soundPath": "resources/sound/",
              "isAutoPlay": false,
              "isLooped": false
            }
          ],
          "blocks": [
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
                              "uniqueId": "0aaa3a2f-5122-4da9-8104-db9d7780500b",
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
                            "uniqueId": "693d9865-ff3a-4f97-b4d7-81f25f843851",
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
              "uniqueId": "1ce86ea0-6921-451f-be15-b5178b35d4e8",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
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
                            "value": "b,c,c,d,c,a,b,b,b,d,d,a,b,b,c,b,c,c,b,b,d,c,a,c,b,d,c,c,b,a,d,c,c,b,b,b,a,b,a,b"
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
                        ]
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
                        ]
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
                        ]
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
                        ]
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
            }
          ]
        },
        {
          "uniqueId": "5f9891fb-bcaf-44d5-b9bf-665d725a3004",
          "frameIndex": 41,
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
          "frameCount": 40,
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
                "x": 409,
                "y": 490
              },
              "size": {
                "width": 223,
                "height": 55
              },
              "x": 409,
              "y": 490,
              "width": 223,
              "height": 55,
              "groupName": "butSiradaki",
              "groupOrder": 0,
              "pivotX": 112,
              "pivotY": 26,
              "alpha": 100,
              "visible": true,
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
                "x": 445,
                "y": 16
              },
              "size": {
                "width": 69,
                "height": 69
              },
              "x": 445,
              "y": 16,
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
              "imageUrl": "img/dogru.jpg",
              "imageName": "dogru",
              "imageExtension": ".jpg",
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
                "x": 422,
                "y": 29
              },
              "size": {
                "width": 68,
                "height": 68
              },
              "x": 422,
              "y": 29,
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
          "uniqueId": "30466537-a14f-4250-a93a-5b50e61fbca7",
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
          "frameCount": 40,
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
                "x": 115,
                "y": 313
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 115,
              "y": 313,
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
                "x": 117,
                "y": 320
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 117,
              "y": 320,
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
                "x": 242,
                "y": 321
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 242,
              "y": 321,
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
                "x": 240,
                "y": 313
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 240,
              "y": 313,
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
                "x": 366,
                "y": 321
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 366,
              "y": 321,
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
                "x": 364,
                "y": 313
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 364,
              "y": 313,
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
                "x": 490,
                "y": 319
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 490,
              "y": 319,
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
                "x": 490,
                "y": 312
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 490,
              "y": 312,
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
                "x": 309,
                "y": 27
              },
              "size": {
                "width": 432,
                "height": 417
              },
              "x": 309,
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
              "imageUrl": "img/000.jpg",
              "imageName": "000",
              "imageExtension": ".jpg",
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
                "x": 309,
                "y": 480
              },
              "size": {
                "width": 442,
                "height": 111
              },
              "x": 309,
              "y": 480,
              "width": 442,
              "height": 111,
              "groupName": "btnBasla",
              "groupOrder": 0,
              "attributes": [
                {
                  "name": "font-size",
                  "value": "large"
                }
              ],
              "pivotX": 221,
              "pivotY": 53,
              "alpha": 100,
              "visible": true,
              "useHandCursor": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 221,
                "y": 53
              },
              "currentPivotLocation": {
                "x": 221,
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
              "uniqueId": "8086532a-4d1a-41cf-8774-d144c095d3be",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 105
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 105,
              "width": 997,
              "height": 359,
              "groupName": "image",
              "groupOrder": 2,
              "pivotX": 499,
              "pivotY": 180,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 499,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 499,
                "y": 180
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/001.jpg",
              "imageName": "001",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3857,
              "spriteHeight": 1384,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "cntDogru",
              "uniqueId": "fc20f714-998d-498d-8909-e667021ddd4e",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 240,
                "y": 316
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 240,
              "y": 316,
              "width": 100,
              "height": 100,
              "groupName": "cntDogru",
              "groupOrder": 0,
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
              "id": "rectDogru",
              "uniqueId": "c07a9887-e80f-48e0-a5c2-0b571350ad18",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 240,
                "y": 322
              },
              "size": {
                "width": 100,
                "height": 103
              },
              "x": 240,
              "y": 322,
              "width": 100,
              "height": 103,
              "groupName": "rectDogru",
              "groupOrder": 0,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
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
              "fillColor": "#000000",
              "strokeColor": "#00ff00",
              "strokeThickness": 10.0,
              "highlightBehavior": true,
              "highlightWidth": 75,
              "highlightHeight": 77
            },
            {
              "typeName": "rectangleDesignObject",
              "type": "primitiveRectangle",
              "id": "rectangle1",
              "uniqueId": "6c773f69-8fb0-4643-9ea1-460d905e6da7",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 115,
                "y": 321
              },
              "size": {
                "width": 100,
                "height": 103
              },
              "x": 115,
              "y": 321,
              "width": 100,
              "height": 103,
              "groupName": "rectangle",
              "groupOrder": 1,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
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
              "fillColor": "#000000",
              "strokeColor": "#00ff00",
              "strokeThickness": 10.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 77
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content1",
              "uniqueId": "53ac0949-9dc3-4239-bfc9-79ddd6e08c06",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 115,
                "y": 316
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 115,
              "y": 316,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 1,
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
              "id": "rectangle2",
              "uniqueId": "16761b4a-0abf-4ff3-b3bd-8152859b9e45",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 364,
                "y": 317
              },
              "size": {
                "width": 100,
                "height": 103
              },
              "x": 364,
              "y": 317,
              "width": 100,
              "height": 103,
              "groupName": "rectangle",
              "groupOrder": 2,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
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
              "fillColor": "#000000",
              "strokeColor": "#00ff00",
              "strokeThickness": 10.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 77
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content2",
              "uniqueId": "da578894-7f36-49fc-a219-dbcf8dca66b4",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 364,
                "y": 312
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 364,
              "y": 312,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 2,
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
              "id": "rectangle3",
              "uniqueId": "01985264-ef11-4bac-a2cc-961ae16ec487",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 490,
                "y": 318
              },
              "size": {
                "width": 100,
                "height": 103
              },
              "x": 490,
              "y": 318,
              "width": 100,
              "height": 103,
              "groupName": "rectangle",
              "groupOrder": 3,
              "pivotX": 50,
              "pivotY": 50,
              "alpha": 30,
              "visible": false,
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
              "fillColor": "#000000",
              "strokeColor": "#00ff00",
              "strokeThickness": 10.0,
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 77
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content3",
              "uniqueId": "f7fc15c6-e923-413b-a687-8bcdd50a5642",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 490,
                "y": 313
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 490,
              "y": 313,
              "width": 100,
              "height": 100,
              "groupName": "content",
              "groupOrder": 3,
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
              "uniqueId": "705942ed-7178-48d7-a637-b99ccb4520de",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 105
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 105,
              "width": 997,
              "height": 359,
              "groupName": "image",
              "groupOrder": 4,
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
                "x": 499,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/002.jpg",
              "imageName": "002",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4000,
              "spriteHeight": 1398,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "0710d3f8-1660-4309-8483-9d79a810a171",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 3,
                "y": 93
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 3,
              "y": 93,
              "width": 997,
              "height": 359,
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
                "x": 496,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/003.jpg",
              "imageName": "003",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4395,
              "spriteHeight": 1546,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "95bd0a71-572d-4d67-afbb-c69780d628a5",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 91
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 91,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/004.jpg",
              "imageName": "004",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3969,
              "spriteHeight": 1538,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "36688bce-cb66-4eb2-a543-fbff9019e015",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 3,
                "y": 98
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 3,
              "y": 98,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/005.jpg",
              "imageName": "005",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3922,
              "spriteHeight": 1380,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "e6336b44-47e8-4738-9309-462a2b919b74",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 3,
                "y": 91
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 3,
              "y": 91,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/006.jpg",
              "imageName": "006",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4302,
              "spriteHeight": 1519,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "5766416f-a0f8-4a0a-9b3d-8c1e358c6936",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 96
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 96,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/007.jpg",
              "imageName": "007",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4147,
              "spriteHeight": 1459,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "743770d9-dd02-436f-b0d5-ec6c22552816",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 10,
                "y": 88
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 10,
              "y": 88,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/008.jpg",
              "imageName": "008",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3926,
              "spriteHeight": 1435,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "3549b587-5307-4d6d-8421-19771e81571e",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 98
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 98,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/009.jpg",
              "imageName": "009",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3987,
              "spriteHeight": 1406,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "07a289bb-0d40-4b20-bda7-ec0630d74566",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 98
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 98,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/010.jpg",
              "imageName": "010",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4033,
              "spriteHeight": 1399,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "id": "image41",
              "uniqueId": "16e519f5-a362-455d-9da3-18b525f8a6c8",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 3,
                "y": 102
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 3,
              "y": 102,
              "width": 997,
              "height": 359,
              "groupName": "image",
              "groupOrder": 41,
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
                "x": 498,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/011.jpg",
              "imageName": "011",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4117,
              "spriteHeight": 1464,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "be19af01-88d1-483b-8da1-0edbf778c330",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 93
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 93,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/012.jpg",
              "imageName": "012",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3938,
              "spriteHeight": 1443,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "2419ade5-ac37-4b8c-9aec-741b804dbb4f",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 96
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 96,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/013.jpg",
              "imageName": "013",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3735,
              "spriteHeight": 1493,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "bae52f6d-7dc9-40ee-a19a-5bd4991876e4",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 15,
                "y": 96
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 15,
              "y": 96,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/014.jpg",
              "imageName": "014",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4542,
              "spriteHeight": 1541,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "3d4c0232-f82b-4c60-931c-acd9ca06e8be",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 20,
                "y": 88
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 20,
              "y": 88,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/015.jpg",
              "imageName": "015",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4547,
              "spriteHeight": 1619,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "83b7a14c-2090-4683-abed-e3bd1496dac6",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 3,
                "y": 98
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 3,
              "y": 98,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/016.jpg",
              "imageName": "016",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4363,
              "spriteHeight": 1864,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "7354f53d-02a4-4827-972c-7e13cd9edc6d",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 3,
                "y": 100
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 3,
              "y": 100,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/017.jpg",
              "imageName": "017",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4582,
              "spriteHeight": 1624,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "ccfbc484-271e-41cf-86fa-833dedc3e28f",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 98
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 98,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/018.jpg",
              "imageName": "018",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4302,
              "spriteHeight": 1521,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "be7ccbf8-34b2-42c0-8291-305f22cd766e",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 3,
                "y": 100
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 3,
              "y": 100,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/019.jpg",
              "imageName": "019",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4227,
              "spriteHeight": 1513,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "7f5a7909-b9ca-4ca7-8594-844c63d129c5",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 3,
                "y": 98
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 3,
              "y": 98,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/020.jpg",
              "imageName": "020",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4228,
              "spriteHeight": 1664,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "7b6b6844-9183-4250-940a-5f75d50e6286",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 98
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 98,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/021.jpg",
              "imageName": "021",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3991,
              "spriteHeight": 1396,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
              "uniqueId": "fb59837a-9382-4862-9219-0f66eb1f47c7",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 105
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 105,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/022.jpg",
              "imageName": "022",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3953,
              "spriteHeight": 1370,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "ffa910b9-939c-45a1-9c59-a075afb80200",
          "frameIndex": 23,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image23",
              "uniqueId": "8d045f6f-c111-4425-bfc9-1cc3f5933bdd",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 103
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 103,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/023.jpg",
              "imageName": "023",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4607,
              "spriteHeight": 1662,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "75982964-5c4c-4733-97d5-c14c869a421b",
          "frameIndex": 24,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image24",
              "uniqueId": "58ca88b5-f77d-48db-a605-a3eafac11a69",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 91
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 91,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/024.jpg",
              "imageName": "024",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4147,
              "spriteHeight": 1419,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "a7368363-c0ed-4412-aa96-78bf79655642",
          "frameIndex": 25,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image25",
              "uniqueId": "4334aeb9-1a00-4747-a470-b090ff362e90",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 100
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 100,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/025.jpg",
              "imageName": "025",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4485,
              "spriteHeight": 1567,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "f1d80b6d-a156-46a4-aaea-e2eb6529188d",
          "frameIndex": 26,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image26",
              "uniqueId": "af641017-ddc8-4fe3-9a64-ba4a2e3beb58",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 100
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 100,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/026.jpg",
              "imageName": "026",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4083,
              "spriteHeight": 1492,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "99b0d520-daa0-4789-bf13-a077d28e34ae",
          "frameIndex": 27,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image27",
              "uniqueId": "3cbd31b4-d5be-4c94-a9ec-914d198e0b3c",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 5,
                "y": 97
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 5,
              "y": 97,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/027.jpg",
              "imageName": "027",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4018,
              "spriteHeight": 1412,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "56a3e8e0-a024-4a1b-8077-dfbd7f4c9b4b",
          "frameIndex": 28,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image28",
              "uniqueId": "b5ad25d4-5e5a-4f22-ae05-d2a703de9853",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 3,
                "y": 100
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 3,
              "y": 100,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/028.jpg",
              "imageName": "028",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3977,
              "spriteHeight": 1407,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "4c783961-6be2-4951-9d84-e6ed36d56be9",
          "frameIndex": 29,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image29",
              "uniqueId": "85b4799c-75f8-453e-ad01-068d853a2b4e",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 7,
                "y": 94
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 7,
              "y": 94,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/029.jpg",
              "imageName": "029",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4239,
              "spriteHeight": 1495,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "2c019e8b-c66c-4a14-815b-de12e3a4ec6d",
          "frameIndex": 30,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image30",
              "uniqueId": "45b1756b-2495-4d94-a8e1-dec1d99c012a",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 10,
                "y": 99
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 10,
              "y": 99,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/030.jpg",
              "imageName": "030",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4106,
              "spriteHeight": 1453,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "a8e39ea7-9cf4-46b2-90d7-179dcc37e0a0",
          "frameIndex": 31,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image31",
              "uniqueId": "641e078c-0488-4baf-bc74-9c01d6b627a6",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 3,
                "y": 104
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 3,
              "y": 104,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/031.jpg",
              "imageName": "031",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4014,
              "spriteHeight": 1389,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "41eef7d6-828d-4cdb-8ffe-22de04683a31",
          "frameIndex": 32,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image32",
              "uniqueId": "1dd7c62b-1264-4bb2-bd2e-b228e5a18ee7",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 5,
                "y": 94
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 5,
              "y": 94,
              "width": 997,
              "height": 359,
              "groupName": "image",
              "groupOrder": 32,
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
                "x": 499,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/032.jpg",
              "imageName": "032",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3942,
              "spriteHeight": 1348,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "6a759976-3cb4-461a-a06a-bb8a3eeb81a8",
          "frameIndex": 33,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image33",
              "uniqueId": "6dafcf29-6bf6-4ebc-a172-48a6f01565af",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 5,
                "y": 90
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 5,
              "y": 90,
              "width": 997,
              "height": 359,
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
                "x": 498,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/033.jpg",
              "imageName": "033",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4239,
              "spriteHeight": 1586,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "8eeed35b-12d0-4b53-8945-1af12ab71d10",
          "frameIndex": 34,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image34",
              "uniqueId": "58cfe1dd-5daa-4dd9-8c1d-2cc4ace4c0e8",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 7,
                "y": 95
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 7,
              "y": 95,
              "width": 997,
              "height": 359,
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
                "x": 499,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/034.jpg",
              "imageName": "034",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4588,
              "spriteHeight": 1592,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "726f00bc-7104-46b8-9243-9e3c534670a9",
          "frameIndex": 35,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image35",
              "uniqueId": "35292e6a-c7dd-4124-ba30-43c51ca6bda8",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 10,
                "y": 92
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 10,
              "y": 92,
              "width": 997,
              "height": 359,
              "groupName": "image",
              "groupOrder": 35,
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
                "x": 498,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/035.jpg",
              "imageName": "035",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4189,
              "spriteHeight": 1451,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "3d6c4bd7-d945-470d-9eee-1ad81356c9b8",
          "frameIndex": 36,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image36",
              "uniqueId": "d952b4f6-84c6-4a1c-806b-ea5f522898cc",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 5,
                "y": 99
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 5,
              "y": 99,
              "width": 997,
              "height": 359,
              "groupName": "image",
              "groupOrder": 36,
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
                "x": 499,
                "y": 179
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/036.jpg",
              "imageName": "036",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3922,
              "spriteHeight": 1439,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "bea3a9d3-d49f-491a-a918-87299b0cfb15",
          "frameIndex": 37,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image37",
              "uniqueId": "75533270-fa37-422a-8f58-0177cb778919",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 20,
                "y": 100
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 20,
              "y": 100,
              "width": 997,
              "height": 359,
              "groupName": "image",
              "groupOrder": 37,
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
                "x": 499,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/037.jpg",
              "imageName": "037",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4306,
              "spriteHeight": 1524,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "26cfffab-0664-4994-9a5a-6818d88b40e2",
          "frameIndex": 38,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image38",
              "uniqueId": "fdbdf2b1-b734-4329-91b0-5edd07b4d294",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 12,
                "y": 97
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 12,
              "y": 97,
              "width": 997,
              "height": 359,
              "groupName": "image",
              "groupOrder": 38,
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
                "x": 498,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/038.jpg",
              "imageName": "038",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4113,
              "spriteHeight": 1438,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "1f1bc9ad-be85-4e28-b7be-19efd5b7c005",
          "frameIndex": 39,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image39",
              "uniqueId": "66131f2b-1b36-45c2-a1ea-ac37dd74689f",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 12,
                "y": 96
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 12,
              "y": 96,
              "width": 997,
              "height": 359,
              "groupName": "image",
              "groupOrder": 39,
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
                "x": 499,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/039.jpg",
              "imageName": "039",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 4090,
              "spriteHeight": 1432,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "97bfc559-87f3-4a01-8c2f-6037c7f32d36",
          "frameIndex": 40,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image40",
              "uniqueId": "efe3bea1-3074-496b-ab72-24b92452cda1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 108
              },
              "size": {
                "width": 997,
                "height": 359
              },
              "x": 0,
              "y": 108,
              "width": 997,
              "height": 359,
              "groupName": "image",
              "groupOrder": 40,
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
                "x": 498,
                "y": 180
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/040.jpg",
              "imageName": "040",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 3865,
              "spriteHeight": 1378,
              "highlightWidth": 747,
              "highlightHeight": 269,
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
          "uniqueId": "24918a1b-1792-465d-87f8-53c1813f5562",
          "frameIndex": 41,
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
