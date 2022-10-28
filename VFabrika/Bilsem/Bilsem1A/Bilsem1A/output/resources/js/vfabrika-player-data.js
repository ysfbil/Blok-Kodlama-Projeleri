var vFabrikaPlayerData_Bilsem1A = {
  "isLooping": false,
  "isAutoPlay": true,
  "stageWidth": 1000,
  "stageHeight": 625,
  "stagePageAlign": "topLeft",
  "autoPlayBehavior": "userInteractionRequired",
  "appStarterButtonImage": "",
  "appStarterButtonWidth": 150,
  "appStarterButtonHeight": 150,
  "appStarterBackgroundColor": "#000000",
  "appStarterBackgroundOpacity": 70.0,
  "frameCount": 42,
  "framesPerSecond": 24.0,
  "omitConsoleMessages": false,
  "layers": [
    {
      "id": "05d52559-2c6a-42e2-9aac-8c0f17a9777a",
      "name": "kod",
      "underscoredName": "kod",
      "keyframes": [
        {
          "id": "d59ac512-c425-4acf-86aa-570b6910b1c4",
          "name": "",
          "frameIndex": 0,
          "frameCount": 41,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "timerDesignObject",
                "type": "timer",
                "name": "timer1",
                "id": "85b7969c-b4cf-45d4-9178-680075c96326",
                "availableId": "timer1",
                "location": {
                  "x": -152,
                  "y": 309
                },
                "enabled": false,
                "tag": "",
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
                "name": "SHata",
                "id": "494b3de3-cf78-4cdd-8bc8-8d18dd43f50d",
                "availableId": "SHata",
                "location": {
                  "x": -154,
                  "y": 419
                },
                "enabled": false,
                "tag": "",
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
                "isLooped": false,
                "isModal": false
              },
              {
                "typeName": "soundDesignObject",
                "type": "sound",
                "name": "SDogru",
                "id": "560a654b-2edc-4f39-9d79-8057cebcc04e",
                "availableId": "SDogru",
                "location": {
                  "x": -152,
                  "y": 515
                },
                "enabled": false,
                "tag": "",
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
                "isLooped": false,
                "isModal": false
              }
            ]
          },
          "blockLayout": {
            "blocks": [
              {
                "id": "20b1e80c-0f1b-4315-ade2-189af0ffb86c",
                "type": "buttonDesignObjectOnMouseEvent",
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
                      "id": "e0df0eb3-d99e-445d-b9be-22fff5f6e53b",
                      "type": "controlIfThen",
                      "inputs": [
                        {
                          "name": "if",
                          "type": "pin",
                          "items": [],
                          "block": {
                            "id": "1791b966-80b0-446d-a8cd-8c2d12281d7f",
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
                                      "id": "1e35b153-39e8-41f9-9c99-f876b8feafd4",
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
                                      "id": "17a4ee2d-6ad3-46de-ad89-90ef668fa0d8",
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
                            "id": "7bc48850-3f50-4f6a-b35f-deb21fdf83b0",
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
                              "id": "78541cbf-4ab5-41be-a5f2-f63df1394925",
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
                                    "id": "642a14ef-81ff-450e-bb09-666f380277de",
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
                                "id": "0aaa3a2f-5122-4da9-8104-db9d7780500b",
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
                          "name": "2f81ce48-38bb-4f89-909b-2ed07d56ba4c_else",
                          "type": "container",
                          "items": [],
                          "flowBlock": {
                            "id": "2e8678d1-210f-4988-b4dd-b03a0304a14a",
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
                                  "id": "642a14ef-81ff-450e-bb09-666f380277de",
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
                              "id": "693d9865-ff3a-4f97-b4d7-81f25f843851",
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
                          "mutatorItemId": "2f81ce48-38bb-4f89-909b-2ed07d56ba4c",
                          "mutatorName": "else"
                        }
                      ],
                      "mutatorItems": [
                        {
                          "id": "2f81ce48-38bb-4f89-909b-2ed07d56ba4c",
                          "name": "else",
                          "typeName": "",
                          "allowOnlyOnce": true,
                          "defaultValue": ""
                        }
                      ],
                      "flowBlock": {
                        "id": "08718442-6ceb-4cc0-ab52-b2c8a3f4942f",
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
                          "id": "84c8c4b7-07b2-4fea-a07e-992eed53a731",
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
                                "id": "90943ace-8617-4277-8339-5c93aed0b9ce",
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
                            "id": "db6a014c-b998-4635-839b-e63985d702c3",
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
                "id": "2cbe8042-7618-4258-88d6-b29a79d6f1f1",
                "type": "procedure",
                "inputs": [
                  {
                    "name": "default",
                    "type": "none",
                    "items": [
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
                      "id": "494c5b48-8dcc-494c-b447-421a5c34bb5f",
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
                            "id": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
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
                        "id": "e0b48c5c-8eaa-4306-a582-88fdc0cf5e1f",
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
                              "id": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
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
                          "id": "0ead76e7-9889-418d-a9e0-2f2ed4ac3045",
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
                                "id": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
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
                            "id": "294d1128-2770-4094-93a0-f85750fd25a9",
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
                                  "id": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
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
                "id": "399ea42d-1c82-4385-82fb-ffdf99424473",
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
                      "id": "d9490641-5fea-4e0b-9883-d6e5ef49981c",
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
                        "id": "0a331397-efef-4a2a-a5d9-5b9ed8f22a8c",
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
                              "id": "642a14ef-81ff-450e-bb09-666f380277de",
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
                          "id": "919404f3-a68e-42f8-8c6b-b9a475df4d82",
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
                                "id": "642a14ef-81ff-450e-bb09-666f380277de",
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
                            "id": "77c01354-79fa-4664-9608-128f94c7eff0",
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
                "id": "15d1639e-4a38-48e1-ae65-718c6d84d934",
                "type": "procedure",
                "inputs": [
                  {
                    "name": "default",
                    "type": "none",
                    "items": [
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
                      "id": "2ba8a14a-9500-41cc-abe4-6460de6c7114",
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
                            "id": "5e09c912-7f07-45dc-9bb7-8947cc27b6a7",
                            "type": "mathSum",
                            "inputs": [
                              {
                                "name": "value",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "07e8e528-b9de-4641-b39a-09dd87853492_value",
                                    "type": "container",
                                    "block": {
                                      "id": "e3a8d62f-00d9-4d3c-9339-4911b2ce2433",
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
                                    "mutatorItemId": "07e8e528-b9de-4641-b39a-09dd87853492",
                                    "mutatorName": "value"
                                  },
                                  {
                                    "name": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22_value",
                                    "type": "container",
                                    "block": {
                                      "id": "80ba8cf9-ae0f-4f1f-ba9e-209912037167",
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
                                    "mutatorItemId": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22",
                                    "mutatorName": "value"
                                  }
                                ]
                              }
                            ],
                            "mutatorItems": [
                              {
                                "id": "07e8e528-b9de-4641-b39a-09dd87853492",
                                "name": "operation",
                                "typeName": "",
                                "allowOnlyOnce": false,
                                "defaultValue": "+"
                              },
                              {
                                "id": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22",
                                "name": "operation",
                                "typeName": "",
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
                "id": "1ce86ea0-6921-451f-be15-b5178b35d4e8",
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
                      "id": "023dc933-3bf3-4b2a-b7b8-ba7483136b47",
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
                "id": "255f75ab-c2dc-41a4-8957-7a0e05d95a46",
                "type": "procedure",
                "inputs": [
                  {
                    "name": "default",
                    "type": "none",
                    "items": [
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
                      "id": "cd308f2c-86ab-4be4-8aa4-a7b9e9ac08a0",
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
                                "id": "a1195dcd-024a-4a2b-bad7-c92defc4b785",
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
                        "id": "2ba8a14a-9500-41cc-abe4-6460de6c7114",
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
                              "id": "5e09c912-7f07-45dc-9bb7-8947cc27b6a7",
                              "type": "mathSum",
                              "inputs": [
                                {
                                  "name": "value",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "07e8e528-b9de-4641-b39a-09dd87853492_value",
                                      "type": "container",
                                      "block": {
                                        "id": "e3a8d62f-00d9-4d3c-9339-4911b2ce2433",
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
                                      "mutatorItemId": "07e8e528-b9de-4641-b39a-09dd87853492",
                                      "mutatorName": "value"
                                    },
                                    {
                                      "name": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22_value",
                                      "type": "container",
                                      "block": {
                                        "id": "80ba8cf9-ae0f-4f1f-ba9e-209912037167",
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
                                      "mutatorItemId": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22",
                                      "mutatorName": "value"
                                    }
                                  ]
                                }
                              ],
                              "mutatorItems": [
                                {
                                  "id": "07e8e528-b9de-4641-b39a-09dd87853492",
                                  "name": "operation",
                                  "typeName": "",
                                  "allowOnlyOnce": false,
                                  "defaultValue": "+"
                                },
                                {
                                  "id": "3ecea73e-fb1c-441d-92ae-ba63b60f5a22",
                                  "name": "operation",
                                  "typeName": "",
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
                "id": "cfc52971-1b64-4391-a525-963080736acf",
                "type": "buttonDesignObjectOnMouseEvent",
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
                      "id": "0d40d0de-eebd-4edf-ab94-5274fdec94ec",
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
                "id": "39aa7621-6a8a-4e32-a3cb-7be73716d2d2",
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
                      "id": "80ba8cf9-ae0f-4f1f-ba9e-209912037167",
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
                "id": "e7f65ce3-4f11-4e8f-9924-d80f4a4052dd",
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
                      "id": "fb9da3c0-46b7-48f1-a09d-7d0a92bd7cbc",
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
                "id": "1c3fa512-33fc-44ba-8c19-c52c62a5bd66",
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
                      "id": "5631506a-53fd-4923-b48d-a0f4ab1da0b2",
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
                        "id": "e05d05bc-a9d1-4d9a-8990-30d2099c369b",
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
                              "id": "4298c760-8d64-4158-b69e-6cea32ae27a4",
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
                                        "id": "71cbec62-1042-40f4-a012-36ecdf0739ee",
                                        "type": "listGetItemAt",
                                        "inputs": [
                                          {
                                            "name": "list",
                                            "type": "pin",
                                            "items": [],
                                            "block": {
                                              "id": "cbd49866-729d-4339-9e29-fb866a12fbf2",
                                              "type": "listCreateFromCommaText",
                                              "inputs": [
                                                {
                                                  "name": "default",
                                                  "type": "pin",
                                                  "items": [],
                                                  "block": {
                                                    "id": "f3c54b3d-6e37-4142-bcff-95a00664a904",
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
                                              "id": "02f7eab6-8f49-4b80-8448-f36036dfc845",
                                              "type": "mathSubtract",
                                              "inputs": [
                                                {
                                                  "name": "value",
                                                  "type": "none",
                                                  "items": [
                                                    {
                                                      "name": "c4b72c61-20cd-4092-988d-82c00de7ab78_value",
                                                      "type": "container",
                                                      "block": {
                                                        "id": "3931fda4-e5a4-43bb-9d6d-1c170b5a1497",
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
                                                      "mutatorItemId": "c4b72c61-20cd-4092-988d-82c00de7ab78",
                                                      "mutatorName": "value"
                                                    },
                                                    {
                                                      "name": "1c58c9dc-76be-4829-96ab-8e6ab255d5b1_value",
                                                      "type": "container",
                                                      "block": {
                                                        "id": "a50a1762-b439-4283-82b4-1e1cfb82df41",
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
                                                      },
                                                      "mutatorItemId": "1c58c9dc-76be-4829-96ab-8e6ab255d5b1",
                                                      "mutatorName": "value"
                                                    }
                                                  ]
                                                }
                                              ],
                                              "mutatorItems": [
                                                {
                                                  "id": "c4b72c61-20cd-4092-988d-82c00de7ab78",
                                                  "name": "operation",
                                                  "typeName": "",
                                                  "allowOnlyOnce": false,
                                                  "defaultValue": "-"
                                                },
                                                {
                                                  "id": "1c58c9dc-76be-4829-96ab-8e6ab255d5b1",
                                                  "name": "operation",
                                                  "typeName": "",
                                                  "allowOnlyOnce": false,
                                                  "defaultValue": "-"
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
                                        "id": "5a011b62-76c8-4a53-a4aa-ccb1954f59b9",
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
                          "id": "f09d94da-f2fc-4a10-853a-71de0151cba2",
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
                                "id": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
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
                "id": "51bf7711-650c-4003-8fd7-6527fbc6beaa",
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
                      "id": "5631506a-53fd-4923-b48d-a0f4ab1da0b2",
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
                        "id": "e05d05bc-a9d1-4d9a-8990-30d2099c369b",
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
                              "id": "4298c760-8d64-4158-b69e-6cea32ae27a4",
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
                                        "id": "71cbec62-1042-40f4-a012-36ecdf0739ee",
                                        "type": "listGetItemAt",
                                        "inputs": [
                                          {
                                            "name": "list",
                                            "type": "pin",
                                            "items": [],
                                            "block": {
                                              "id": "cbd49866-729d-4339-9e29-fb866a12fbf2",
                                              "type": "listCreateFromCommaText",
                                              "inputs": [
                                                {
                                                  "name": "default",
                                                  "type": "pin",
                                                  "items": [],
                                                  "block": {
                                                    "id": "f3c54b3d-6e37-4142-bcff-95a00664a904",
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
                                              "id": "02f7eab6-8f49-4b80-8448-f36036dfc845",
                                              "type": "mathSubtract",
                                              "inputs": [
                                                {
                                                  "name": "value",
                                                  "type": "none",
                                                  "items": [
                                                    {
                                                      "name": "eab21561-bbfd-450c-9b56-c511edcc418a_value",
                                                      "type": "container",
                                                      "block": {
                                                        "id": "3931fda4-e5a4-43bb-9d6d-1c170b5a1497",
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
                                                      "mutatorItemId": "eab21561-bbfd-450c-9b56-c511edcc418a",
                                                      "mutatorName": "value"
                                                    },
                                                    {
                                                      "name": "6f3c5a63-8b5a-4ac5-a4be-1058831ca418_value",
                                                      "type": "container",
                                                      "block": {
                                                        "id": "a50a1762-b439-4283-82b4-1e1cfb82df41",
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
                                                      },
                                                      "mutatorItemId": "6f3c5a63-8b5a-4ac5-a4be-1058831ca418",
                                                      "mutatorName": "value"
                                                    }
                                                  ]
                                                }
                                              ],
                                              "mutatorItems": [
                                                {
                                                  "id": "eab21561-bbfd-450c-9b56-c511edcc418a",
                                                  "name": "operation",
                                                  "typeName": "",
                                                  "allowOnlyOnce": false,
                                                  "defaultValue": "-"
                                                },
                                                {
                                                  "id": "6f3c5a63-8b5a-4ac5-a4be-1058831ca418",
                                                  "name": "operation",
                                                  "typeName": "",
                                                  "allowOnlyOnce": false,
                                                  "defaultValue": "-"
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
                                        "id": "5a011b62-76c8-4a53-a4aa-ccb1954f59b9",
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
                          "id": "f09d94da-f2fc-4a10-853a-71de0151cba2",
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
                                "id": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
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
                "id": "00602e41-4d12-4a80-8740-3b32f6dc4257",
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
                      "id": "5631506a-53fd-4923-b48d-a0f4ab1da0b2",
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
                        "id": "e05d05bc-a9d1-4d9a-8990-30d2099c369b",
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
                              "id": "4298c760-8d64-4158-b69e-6cea32ae27a4",
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
                                        "id": "71cbec62-1042-40f4-a012-36ecdf0739ee",
                                        "type": "listGetItemAt",
                                        "inputs": [
                                          {
                                            "name": "list",
                                            "type": "pin",
                                            "items": [],
                                            "block": {
                                              "id": "cbd49866-729d-4339-9e29-fb866a12fbf2",
                                              "type": "listCreateFromCommaText",
                                              "inputs": [
                                                {
                                                  "name": "default",
                                                  "type": "pin",
                                                  "items": [],
                                                  "block": {
                                                    "id": "f3c54b3d-6e37-4142-bcff-95a00664a904",
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
                                              "id": "02f7eab6-8f49-4b80-8448-f36036dfc845",
                                              "type": "mathSubtract",
                                              "inputs": [
                                                {
                                                  "name": "value",
                                                  "type": "none",
                                                  "items": [
                                                    {
                                                      "name": "f8f35864-bff1-4a15-a44a-ecfb7fcc7313_value",
                                                      "type": "container",
                                                      "block": {
                                                        "id": "3931fda4-e5a4-43bb-9d6d-1c170b5a1497",
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
                                                      "mutatorItemId": "f8f35864-bff1-4a15-a44a-ecfb7fcc7313",
                                                      "mutatorName": "value"
                                                    },
                                                    {
                                                      "name": "9e537a5c-ea87-4a5a-8522-d9570dcb2cb4_value",
                                                      "type": "container",
                                                      "block": {
                                                        "id": "a50a1762-b439-4283-82b4-1e1cfb82df41",
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
                                                      },
                                                      "mutatorItemId": "9e537a5c-ea87-4a5a-8522-d9570dcb2cb4",
                                                      "mutatorName": "value"
                                                    }
                                                  ]
                                                }
                                              ],
                                              "mutatorItems": [
                                                {
                                                  "id": "f8f35864-bff1-4a15-a44a-ecfb7fcc7313",
                                                  "name": "operation",
                                                  "typeName": "",
                                                  "allowOnlyOnce": false,
                                                  "defaultValue": "-"
                                                },
                                                {
                                                  "id": "9e537a5c-ea87-4a5a-8522-d9570dcb2cb4",
                                                  "name": "operation",
                                                  "typeName": "",
                                                  "allowOnlyOnce": false,
                                                  "defaultValue": "-"
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
                                        "id": "5a011b62-76c8-4a53-a4aa-ccb1954f59b9",
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
                          "id": "f09d94da-f2fc-4a10-853a-71de0151cba2",
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
                                "id": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
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
                "id": "18000450-5f78-4735-a907-818904330d40",
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
                      "id": "5631506a-53fd-4923-b48d-a0f4ab1da0b2",
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
                        "id": "e05d05bc-a9d1-4d9a-8990-30d2099c369b",
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
                              "id": "4298c760-8d64-4158-b69e-6cea32ae27a4",
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
                                        "id": "71cbec62-1042-40f4-a012-36ecdf0739ee",
                                        "type": "listGetItemAt",
                                        "inputs": [
                                          {
                                            "name": "list",
                                            "type": "pin",
                                            "items": [],
                                            "block": {
                                              "id": "cbd49866-729d-4339-9e29-fb866a12fbf2",
                                              "type": "listCreateFromCommaText",
                                              "inputs": [
                                                {
                                                  "name": "default",
                                                  "type": "pin",
                                                  "items": [],
                                                  "block": {
                                                    "id": "f3c54b3d-6e37-4142-bcff-95a00664a904",
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
                                              "id": "02f7eab6-8f49-4b80-8448-f36036dfc845",
                                              "type": "mathSubtract",
                                              "inputs": [
                                                {
                                                  "name": "value",
                                                  "type": "none",
                                                  "items": [
                                                    {
                                                      "name": "b9009725-9e46-466a-9c72-9f4ec796e3ad_value",
                                                      "type": "container",
                                                      "block": {
                                                        "id": "3931fda4-e5a4-43bb-9d6d-1c170b5a1497",
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
                                                      "mutatorItemId": "b9009725-9e46-466a-9c72-9f4ec796e3ad",
                                                      "mutatorName": "value"
                                                    },
                                                    {
                                                      "name": "17f3b0c2-82cb-4de4-8178-e28be1eedcdb_value",
                                                      "type": "container",
                                                      "block": {
                                                        "id": "a50a1762-b439-4283-82b4-1e1cfb82df41",
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
                                                      },
                                                      "mutatorItemId": "17f3b0c2-82cb-4de4-8178-e28be1eedcdb",
                                                      "mutatorName": "value"
                                                    }
                                                  ]
                                                }
                                              ],
                                              "mutatorItems": [
                                                {
                                                  "id": "b9009725-9e46-466a-9c72-9f4ec796e3ad",
                                                  "name": "operation",
                                                  "typeName": "",
                                                  "allowOnlyOnce": false,
                                                  "defaultValue": "-"
                                                },
                                                {
                                                  "id": "17f3b0c2-82cb-4de4-8178-e28be1eedcdb",
                                                  "name": "operation",
                                                  "typeName": "",
                                                  "allowOnlyOnce": false,
                                                  "defaultValue": "-"
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
                                        "id": "5a011b62-76c8-4a53-a4aa-ccb1954f59b9",
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
                          "id": "f09d94da-f2fc-4a10-853a-71de0151cba2",
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
                                "id": "aec66a69-c85f-47ae-a833-9cb81f7cf86e",
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
                "id": "f2c7ac49-084a-4b5d-b5ee-87b9178c4c05",
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
                      "id": "80ba8cf9-ae0f-4f1f-ba9e-209912037167",
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
                "id": "08029cb8-383b-425a-b40a-46588557a964",
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
                      "id": "10e365bf-472e-4e86-ae6e-6648af57c54d",
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
          }
        },
        {
          "id": "5f9891fb-bcaf-44d5-b9bf-665d725a3004",
          "name": "",
          "frameIndex": 41,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": []
          },
          "blockLayout": {
            "blocks": [
              {
                "id": "cdc0e0f8-4725-4176-9b39-0c1be2cd4180",
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
                      "id": "d49089b6-56c3-4aba-ba54-cb7e07617615",
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
                            "id": "3aab6377-2d38-4fca-95d7-7396c609edc0",
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
        }
      ]
    },
    {
      "id": "6c6dab0b-860c-4e10-80c0-5c4735bab783",
      "name": "sabitler",
      "underscoredName": "sabitler",
      "keyframes": [
        {
          "id": "5fed0202-5dc7-4e8c-9574-0c3a28db99ff",
          "name": "",
          "frameIndex": 0,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": []
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "b67e3793-dfb0-4ba5-bb4e-cd9b76dedb1c",
          "name": "",
          "frameIndex": 1,
          "frameCount": 40,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "buttonDesignObject",
                "type": "button",
                "name": "butSiradaki",
                "id": "15036bf7-6311-413f-ac8a-fcb23116802c",
                "availableId": "butSiradaki",
                "location": {
                  "x": 409,
                  "y": 490
                },
                "size": {
                  "width": 223,
                  "height": 55
                },
                "enabled": true,
                "tag": "",
                "x": 409,
                "y": 490,
                "width": 223,
                "height": 55,
                "groupName": "butSiradaki",
                "groupOrder": 0,
                "alpha": 100,
                "visible": true,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
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
                "name": "dogru",
                "id": "5d06c611-960b-476a-ab36-49ad438ec854",
                "availableId": "dogru",
                "location": {
                  "x": 445,
                  "y": 16
                },
                "size": {
                  "width": 69,
                  "height": 69
                },
                "enabled": true,
                "tag": "",
                "x": 445,
                "y": 16,
                "width": 69,
                "height": 69,
                "groupName": "dogru",
                "groupOrder": 0,
                "alpha": 100,
                "visible": false,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 35,
                  "y": 35
                },
                "isVisual": true,
                "imageUrl": "img/dogru.jpg",
                "imageName": "dogru",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 312,
                "spriteHeight": 312,
                "highlightBehavior": false,
                "highlightWidth": 51,
                "highlightHeight": 51,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              },
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "yanlis",
                "id": "3cda0863-eff6-41e3-ad7a-117a0412a60e",
                "availableId": "yanlis",
                "location": {
                  "x": 422,
                  "y": 29
                },
                "size": {
                  "width": 68,
                  "height": 68
                },
                "enabled": true,
                "tag": "",
                "x": 422,
                "y": 29,
                "width": 68,
                "height": 68,
                "groupName": "yanlis",
                "groupOrder": 0,
                "alpha": 100,
                "visible": false,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 34,
                  "y": 34
                },
                "isVisual": true,
                "imageUrl": "img/yanlis.png",
                "imageName": "yanlis",
                "imageExtension": ".png",
                "imagePath": "resources/img/",
                "spriteWidth": 720,
                "spriteHeight": 720,
                "highlightBehavior": false,
                "highlightWidth": 51,
                "highlightHeight": 51,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        }
      ]
    },
    {
      "id": "52635f93-4032-433c-a041-2f6eeba96efe",
      "name": "secenekler",
      "underscoredName": "secenekler",
      "keyframes": [
        {
          "id": "30466537-a14f-4250-a93a-5b50e61fbca7",
          "name": "",
          "frameIndex": 0,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": []
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "32d9f23b-538e-4b68-bd69-345a6692020e",
          "name": "",
          "frameIndex": 1,
          "frameCount": 40,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "contentDesignObject",
                "type": "content",
                "name": "content4",
                "id": "c2d00910-fe63-4afc-b85a-2bf25a443bd2",
                "availableId": "content4",
                "location": {
                  "x": 115,
                  "y": 313
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "a",
                "x": 115,
                "y": 313,
                "width": 100,
                "height": 100,
                "groupName": "content",
                "groupOrder": 4,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
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
                "name": "rectangle4",
                "id": "c7f374cb-1bd0-4a5f-a1e8-fa3079003535",
                "availableId": "rectangle4",
                "location": {
                  "x": 117,
                  "y": 320
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "",
                "x": 117,
                "y": 320,
                "width": 100,
                "height": 100,
                "groupName": "rectangle",
                "groupOrder": 4,
                "alpha": 30,
                "visible": false,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 50,
                  "y": 50
                },
                "isVisual": true,
                "fillColor": "rgba(95, 158, 160, 1)",
                "strokeColor": "rgba(128, 128, 128, 1)",
                "strokeThickness": 2.0,
                "highlightBehavior": false,
                "highlightWidth": 75,
                "highlightHeight": 75
              },
              {
                "typeName": "rectangleDesignObject",
                "type": "primitiveRectangle",
                "name": "rectangle5",
                "id": "93c8d212-3210-4586-8691-cb88ffde4c74",
                "availableId": "rectangle5",
                "location": {
                  "x": 242,
                  "y": 321
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "",
                "x": 242,
                "y": 321,
                "width": 100,
                "height": 100,
                "groupName": "rectangle",
                "groupOrder": 5,
                "alpha": 30,
                "visible": false,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 50,
                  "y": 50
                },
                "isVisual": true,
                "fillColor": "rgba(95, 158, 160, 1)",
                "strokeColor": "rgba(128, 128, 128, 1)",
                "strokeThickness": 2.0,
                "highlightBehavior": false,
                "highlightWidth": 75,
                "highlightHeight": 75
              },
              {
                "typeName": "contentDesignObject",
                "type": "content",
                "name": "content5",
                "id": "18f03333-6a3d-452d-b91f-1d92468728e7",
                "availableId": "content5",
                "location": {
                  "x": 240,
                  "y": 313
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "b",
                "x": 240,
                "y": 313,
                "width": 100,
                "height": 100,
                "groupName": "content",
                "groupOrder": 5,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
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
                "name": "rectangle6",
                "id": "ff8b7df3-873e-4e81-9e41-bffc1dc4caca",
                "availableId": "rectangle6",
                "location": {
                  "x": 366,
                  "y": 321
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "",
                "x": 366,
                "y": 321,
                "width": 100,
                "height": 100,
                "groupName": "rectangle",
                "groupOrder": 6,
                "alpha": 30,
                "visible": false,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 50,
                  "y": 50
                },
                "isVisual": true,
                "fillColor": "rgba(95, 158, 160, 1)",
                "strokeColor": "rgba(128, 128, 128, 1)",
                "strokeThickness": 2.0,
                "highlightBehavior": false,
                "highlightWidth": 75,
                "highlightHeight": 75
              },
              {
                "typeName": "contentDesignObject",
                "type": "content",
                "name": "content6",
                "id": "4a3f4c1b-d3fa-4a1a-9a13-1a5a4bcdafcf",
                "availableId": "content6",
                "location": {
                  "x": 364,
                  "y": 313
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "c",
                "x": 364,
                "y": 313,
                "width": 100,
                "height": 100,
                "groupName": "content",
                "groupOrder": 6,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
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
                "name": "rectangle7",
                "id": "7cc811b5-d949-4986-9e94-286ebca067b1",
                "availableId": "rectangle7",
                "location": {
                  "x": 490,
                  "y": 319
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "",
                "x": 490,
                "y": 319,
                "width": 100,
                "height": 100,
                "groupName": "rectangle",
                "groupOrder": 7,
                "alpha": 30,
                "visible": false,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 50,
                  "y": 50
                },
                "isVisual": true,
                "fillColor": "rgba(95, 158, 160, 1)",
                "strokeColor": "rgba(128, 128, 128, 1)",
                "strokeThickness": 2.0,
                "highlightBehavior": false,
                "highlightWidth": 75,
                "highlightHeight": 75
              },
              {
                "typeName": "contentDesignObject",
                "type": "content",
                "name": "content7",
                "id": "4b516e29-86d4-4cd0-90dc-7e540394a704",
                "availableId": "content7",
                "location": {
                  "x": 490,
                  "y": 312
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "d",
                "x": 490,
                "y": 312,
                "width": 100,
                "height": 100,
                "groupName": "content",
                "groupOrder": 7,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
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
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        }
      ]
    },
    {
      "id": "6c2197ab-cbeb-43fd-a683-cbb3d26821a4",
      "name": "sorular",
      "underscoredName": "sorular",
      "keyframes": [
        {
          "id": "45e4a47c-2757-4c9f-b40b-e535444c16f5",
          "name": "",
          "frameIndex": 0,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image1",
                "id": "cd2cbd70-80c6-4482-8f48-49c045834c57",
                "availableId": "image1",
                "location": {
                  "x": 309,
                  "y": 27
                },
                "size": {
                  "width": 432,
                  "height": 417
                },
                "enabled": true,
                "tag": "",
                "x": 309,
                "y": 27,
                "width": 432,
                "height": 417,
                "groupName": "image",
                "groupOrder": 1,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 216,
                  "y": 209
                },
                "isVisual": true,
                "imageUrl": "img/000.jpg",
                "imageName": "000",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 2743,
                "spriteHeight": 2646,
                "highlightBehavior": false,
                "highlightWidth": 324,
                "highlightHeight": 312,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              },
              {
                "typeName": "buttonDesignObject",
                "type": "button",
                "name": "btnBasla",
                "id": "192f881f-c3f0-433a-a52c-184155c56fdf",
                "availableId": "btnBasla",
                "location": {
                  "x": 309,
                  "y": 480
                },
                "size": {
                  "width": 442,
                  "height": 111
                },
                "enabled": true,
                "tag": "",
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
                "alpha": 100,
                "visible": true,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
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
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "5773752f-7ea3-4a60-9dbd-2d2ec48f047d",
          "name": "",
          "frameIndex": 1,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image2",
                "id": "8086532a-4d1a-41cf-8774-d144c095d3be",
                "availableId": "image2",
                "location": {
                  "x": 0,
                  "y": 105
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 105,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 2,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/001.jpg",
                "imageName": "001",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3857,
                "spriteHeight": 1384,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              },
              {
                "typeName": "contentDesignObject",
                "type": "content",
                "name": "cntDogru",
                "id": "fc20f714-998d-498d-8909-e667021ddd4e",
                "availableId": "cntDogru",
                "location": {
                  "x": 240,
                  "y": 316
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "",
                "x": 240,
                "y": 316,
                "width": 100,
                "height": 100,
                "groupName": "cntDogru",
                "groupOrder": 0,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
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
                "name": "rectDogru",
                "id": "c07a9887-e80f-48e0-a5c2-0b571350ad18",
                "availableId": "rectDogru",
                "location": {
                  "x": 240,
                  "y": 322
                },
                "size": {
                  "width": 100,
                  "height": 103
                },
                "enabled": true,
                "tag": "",
                "x": 240,
                "y": 322,
                "width": 100,
                "height": 103,
                "groupName": "rectDogru",
                "groupOrder": 0,
                "alpha": 30,
                "visible": false,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 50,
                  "y": 51
                },
                "isVisual": true,
                "fillColor": "rgba(0, 0, 0, 0)",
                "strokeColor": "rgba(0, 255, 0, 1)",
                "strokeThickness": 10.0,
                "highlightBehavior": true,
                "highlightWidth": 75,
                "highlightHeight": 77
              },
              {
                "typeName": "rectangleDesignObject",
                "type": "primitiveRectangle",
                "name": "rectangle1",
                "id": "6c773f69-8fb0-4643-9ea1-460d905e6da7",
                "availableId": "rectangle1",
                "location": {
                  "x": 115,
                  "y": 321
                },
                "size": {
                  "width": 100,
                  "height": 103
                },
                "enabled": true,
                "tag": "",
                "x": 115,
                "y": 321,
                "width": 100,
                "height": 103,
                "groupName": "rectangle",
                "groupOrder": 1,
                "alpha": 30,
                "visible": false,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 50,
                  "y": 51
                },
                "isVisual": true,
                "fillColor": "rgba(0, 0, 0, 0)",
                "strokeColor": "rgba(0, 255, 0, 1)",
                "strokeThickness": 10.0,
                "highlightBehavior": false,
                "highlightWidth": 75,
                "highlightHeight": 77
              },
              {
                "typeName": "contentDesignObject",
                "type": "content",
                "name": "content1",
                "id": "53ac0949-9dc3-4239-bfc9-79ddd6e08c06",
                "availableId": "content1",
                "location": {
                  "x": 115,
                  "y": 316
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "",
                "x": 115,
                "y": 316,
                "width": 100,
                "height": 100,
                "groupName": "content",
                "groupOrder": 1,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
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
                "name": "rectangle2",
                "id": "16761b4a-0abf-4ff3-b3bd-8152859b9e45",
                "availableId": "rectangle2",
                "location": {
                  "x": 364,
                  "y": 317
                },
                "size": {
                  "width": 100,
                  "height": 103
                },
                "enabled": true,
                "tag": "",
                "x": 364,
                "y": 317,
                "width": 100,
                "height": 103,
                "groupName": "rectangle",
                "groupOrder": 2,
                "alpha": 30,
                "visible": false,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 50,
                  "y": 51
                },
                "isVisual": true,
                "fillColor": "rgba(0, 0, 0, 0)",
                "strokeColor": "rgba(0, 255, 0, 1)",
                "strokeThickness": 10.0,
                "highlightBehavior": false,
                "highlightWidth": 75,
                "highlightHeight": 77
              },
              {
                "typeName": "contentDesignObject",
                "type": "content",
                "name": "content2",
                "id": "da578894-7f36-49fc-a219-dbcf8dca66b4",
                "availableId": "content2",
                "location": {
                  "x": 364,
                  "y": 312
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "",
                "x": 364,
                "y": 312,
                "width": 100,
                "height": 100,
                "groupName": "content",
                "groupOrder": 2,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
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
                "name": "rectangle3",
                "id": "01985264-ef11-4bac-a2cc-961ae16ec487",
                "availableId": "rectangle3",
                "location": {
                  "x": 490,
                  "y": 318
                },
                "size": {
                  "width": 100,
                  "height": 103
                },
                "enabled": true,
                "tag": "",
                "x": 490,
                "y": 318,
                "width": 100,
                "height": 103,
                "groupName": "rectangle",
                "groupOrder": 3,
                "alpha": 30,
                "visible": false,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 50,
                  "y": 51
                },
                "isVisual": true,
                "fillColor": "rgba(0, 0, 0, 0)",
                "strokeColor": "rgba(0, 255, 0, 1)",
                "strokeThickness": 10.0,
                "highlightBehavior": false,
                "highlightWidth": 75,
                "highlightHeight": 77
              },
              {
                "typeName": "contentDesignObject",
                "type": "content",
                "name": "content3",
                "id": "f7fc15c6-e923-413b-a687-8bcdd50a5642",
                "availableId": "content3",
                "location": {
                  "x": 490,
                  "y": 313
                },
                "size": {
                  "width": 100,
                  "height": 100
                },
                "enabled": true,
                "tag": "",
                "x": 490,
                "y": 313,
                "width": 100,
                "height": 100,
                "groupName": "content",
                "groupOrder": 3,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "cursor": "pointer",
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
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
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "3381bca5-5fa9-4c03-8d92-ee21c64954f7",
          "name": "",
          "frameIndex": 2,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image4",
                "id": "705942ed-7178-48d7-a637-b99ccb4520de",
                "availableId": "image4",
                "location": {
                  "x": 0,
                  "y": 105
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 105,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 4,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/002.jpg",
                "imageName": "002",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4000,
                "spriteHeight": 1398,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "1dced7a0-7ccc-453d-a4d3-a593e3d7d0dc",
          "name": "",
          "frameIndex": 3,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image3",
                "id": "0710d3f8-1660-4309-8483-9d79a810a171",
                "availableId": "image3",
                "location": {
                  "x": 3,
                  "y": 93
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 3,
                "y": 93,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 3,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 496,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/003.jpg",
                "imageName": "003",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4395,
                "spriteHeight": 1546,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "395f5b8b-dfe4-4dcd-9f4c-2427e0b210f4",
          "name": "",
          "frameIndex": 4,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image5",
                "id": "95bd0a71-572d-4d67-afbb-c69780d628a5",
                "availableId": "image5",
                "location": {
                  "x": 0,
                  "y": 91
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 91,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 5,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/004.jpg",
                "imageName": "004",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3969,
                "spriteHeight": 1538,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "92742356-6e39-49f1-86bd-d3af0191984f",
          "name": "",
          "frameIndex": 5,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image6",
                "id": "36688bce-cb66-4eb2-a543-fbff9019e015",
                "availableId": "image6",
                "location": {
                  "x": 3,
                  "y": 98
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 3,
                "y": 98,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 6,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/005.jpg",
                "imageName": "005",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3922,
                "spriteHeight": 1380,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "bfe6c35e-4828-4827-aa4a-b8de47c141fb",
          "name": "",
          "frameIndex": 6,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image7",
                "id": "e6336b44-47e8-4738-9309-462a2b919b74",
                "availableId": "image7",
                "location": {
                  "x": 3,
                  "y": 91
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 3,
                "y": 91,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 7,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/006.jpg",
                "imageName": "006",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4302,
                "spriteHeight": 1519,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "5e15ac66-9726-4873-beb2-2739f5772452",
          "name": "",
          "frameIndex": 7,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image8",
                "id": "5766416f-a0f8-4a0a-9b3d-8c1e358c6936",
                "availableId": "image8",
                "location": {
                  "x": 0,
                  "y": 96
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 96,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 8,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/007.jpg",
                "imageName": "007",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4147,
                "spriteHeight": 1459,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "bca50789-5284-4548-916a-58af9df192e2",
          "name": "",
          "frameIndex": 8,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image9",
                "id": "743770d9-dd02-436f-b0d5-ec6c22552816",
                "availableId": "image9",
                "location": {
                  "x": 10,
                  "y": 88
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 10,
                "y": 88,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 9,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/008.jpg",
                "imageName": "008",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3926,
                "spriteHeight": 1435,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "e6525610-da9b-4048-9a64-f5c16b8217c5",
          "name": "",
          "frameIndex": 9,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image10",
                "id": "3549b587-5307-4d6d-8421-19771e81571e",
                "availableId": "image10",
                "location": {
                  "x": 0,
                  "y": 98
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 98,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 10,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/009.jpg",
                "imageName": "009",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3987,
                "spriteHeight": 1406,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "8f50e417-bcb0-4354-8ee1-274959d85b00",
          "name": "",
          "frameIndex": 10,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image11",
                "id": "07a289bb-0d40-4b20-bda7-ec0630d74566",
                "availableId": "image11",
                "location": {
                  "x": 0,
                  "y": 98
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 98,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 11,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/010.jpg",
                "imageName": "010",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4033,
                "spriteHeight": 1399,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "b4773486-0278-4703-b386-bde7d7506c04",
          "name": "",
          "frameIndex": 11,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image41",
                "id": "16e519f5-a362-455d-9da3-18b525f8a6c8",
                "availableId": "image41",
                "location": {
                  "x": 3,
                  "y": 102
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 3,
                "y": 102,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 41,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/011.jpg",
                "imageName": "011",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4117,
                "spriteHeight": 1464,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "2613bad7-eee7-4811-913f-39b97986619d",
          "name": "",
          "frameIndex": 12,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image12",
                "id": "be19af01-88d1-483b-8da1-0edbf778c330",
                "availableId": "image12",
                "location": {
                  "x": 0,
                  "y": 93
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 93,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 12,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/012.jpg",
                "imageName": "012",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3938,
                "spriteHeight": 1443,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "502819f9-e4e2-4448-88e4-4acfec4aded1",
          "name": "",
          "frameIndex": 13,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image13",
                "id": "2419ade5-ac37-4b8c-9aec-741b804dbb4f",
                "availableId": "image13",
                "location": {
                  "x": 0,
                  "y": 96
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 96,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 13,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/013.jpg",
                "imageName": "013",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3735,
                "spriteHeight": 1493,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "b48c62ed-92d9-4aa6-8cc4-e729c08237c6",
          "name": "",
          "frameIndex": 14,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image14",
                "id": "bae52f6d-7dc9-40ee-a19a-5bd4991876e4",
                "availableId": "image14",
                "location": {
                  "x": 15,
                  "y": 96
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 15,
                "y": 96,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 14,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/014.jpg",
                "imageName": "014",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4542,
                "spriteHeight": 1541,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "eb75a80d-37c6-4273-a369-13864ebee5db",
          "name": "",
          "frameIndex": 15,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image15",
                "id": "3d4c0232-f82b-4c60-931c-acd9ca06e8be",
                "availableId": "image15",
                "location": {
                  "x": 20,
                  "y": 88
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 20,
                "y": 88,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 15,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/015.jpg",
                "imageName": "015",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4547,
                "spriteHeight": 1619,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "337b1711-90ff-4289-992d-0fce38380985",
          "name": "",
          "frameIndex": 16,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image16",
                "id": "83b7a14c-2090-4683-abed-e3bd1496dac6",
                "availableId": "image16",
                "location": {
                  "x": 3,
                  "y": 98
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 3,
                "y": 98,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 16,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/016.jpg",
                "imageName": "016",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4363,
                "spriteHeight": 1864,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "87734b7e-b117-42f1-8d7f-d41f14ab627f",
          "name": "",
          "frameIndex": 17,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image17",
                "id": "7354f53d-02a4-4827-972c-7e13cd9edc6d",
                "availableId": "image17",
                "location": {
                  "x": 3,
                  "y": 100
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 3,
                "y": 100,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 17,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/017.jpg",
                "imageName": "017",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4582,
                "spriteHeight": 1624,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "143c8144-eb03-4f75-b7df-2b3f04475968",
          "name": "",
          "frameIndex": 18,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image18",
                "id": "ccfbc484-271e-41cf-86fa-833dedc3e28f",
                "availableId": "image18",
                "location": {
                  "x": 0,
                  "y": 98
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 98,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 18,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/018.jpg",
                "imageName": "018",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4302,
                "spriteHeight": 1521,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "e2ef1624-5234-46de-b36e-a93aafacc5bd",
          "name": "",
          "frameIndex": 19,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image19",
                "id": "be7ccbf8-34b2-42c0-8291-305f22cd766e",
                "availableId": "image19",
                "location": {
                  "x": 3,
                  "y": 100
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 3,
                "y": 100,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 19,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/019.jpg",
                "imageName": "019",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4227,
                "spriteHeight": 1513,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "f7b783b3-50c7-4173-9193-775de5a3c5e4",
          "name": "",
          "frameIndex": 20,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image20",
                "id": "7f5a7909-b9ca-4ca7-8594-844c63d129c5",
                "availableId": "image20",
                "location": {
                  "x": 3,
                  "y": 98
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 3,
                "y": 98,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 20,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/020.jpg",
                "imageName": "020",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4228,
                "spriteHeight": 1664,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "a73ea564-8b55-48fd-b2fe-0dc72526d266",
          "name": "",
          "frameIndex": 21,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image21",
                "id": "7b6b6844-9183-4250-940a-5f75d50e6286",
                "availableId": "image21",
                "location": {
                  "x": 0,
                  "y": 98
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 98,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 21,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/021.jpg",
                "imageName": "021",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3991,
                "spriteHeight": 1396,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "543362c6-1846-40e4-aa2c-5524af085f5d",
          "name": "",
          "frameIndex": 22,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image22",
                "id": "fb59837a-9382-4862-9219-0f66eb1f47c7",
                "availableId": "image22",
                "location": {
                  "x": 0,
                  "y": 105
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 105,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 22,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/022.jpg",
                "imageName": "022",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3953,
                "spriteHeight": 1370,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "ffa910b9-939c-45a1-9c59-a075afb80200",
          "name": "",
          "frameIndex": 23,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image23",
                "id": "8d045f6f-c111-4425-bfc9-1cc3f5933bdd",
                "availableId": "image23",
                "location": {
                  "x": 0,
                  "y": 103
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 103,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 23,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/023.jpg",
                "imageName": "023",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4607,
                "spriteHeight": 1662,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "75982964-5c4c-4733-97d5-c14c869a421b",
          "name": "",
          "frameIndex": 24,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image24",
                "id": "58ca88b5-f77d-48db-a605-a3eafac11a69",
                "availableId": "image24",
                "location": {
                  "x": 0,
                  "y": 91
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 91,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 24,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/024.jpg",
                "imageName": "024",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4147,
                "spriteHeight": 1419,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "a7368363-c0ed-4412-aa96-78bf79655642",
          "name": "",
          "frameIndex": 25,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image25",
                "id": "4334aeb9-1a00-4747-a470-b090ff362e90",
                "availableId": "image25",
                "location": {
                  "x": 0,
                  "y": 100
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 100,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 25,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/025.jpg",
                "imageName": "025",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4485,
                "spriteHeight": 1567,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "f1d80b6d-a156-46a4-aaea-e2eb6529188d",
          "name": "",
          "frameIndex": 26,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image26",
                "id": "af641017-ddc8-4fe3-9a64-ba4a2e3beb58",
                "availableId": "image26",
                "location": {
                  "x": 0,
                  "y": 100
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 100,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 26,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/026.jpg",
                "imageName": "026",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4083,
                "spriteHeight": 1492,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "99b0d520-daa0-4789-bf13-a077d28e34ae",
          "name": "",
          "frameIndex": 27,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image27",
                "id": "3cbd31b4-d5be-4c94-a9ec-914d198e0b3c",
                "availableId": "image27",
                "location": {
                  "x": 5,
                  "y": 97
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 5,
                "y": 97,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 27,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/027.jpg",
                "imageName": "027",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4018,
                "spriteHeight": 1412,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "56a3e8e0-a024-4a1b-8077-dfbd7f4c9b4b",
          "name": "",
          "frameIndex": 28,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image28",
                "id": "b5ad25d4-5e5a-4f22-ae05-d2a703de9853",
                "availableId": "image28",
                "location": {
                  "x": 3,
                  "y": 100
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 3,
                "y": 100,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 28,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/028.jpg",
                "imageName": "028",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3977,
                "spriteHeight": 1407,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "4c783961-6be2-4951-9d84-e6ed36d56be9",
          "name": "",
          "frameIndex": 29,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image29",
                "id": "85b4799c-75f8-453e-ad01-068d853a2b4e",
                "availableId": "image29",
                "location": {
                  "x": 7,
                  "y": 94
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 7,
                "y": 94,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 29,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/029.jpg",
                "imageName": "029",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4239,
                "spriteHeight": 1495,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "2c019e8b-c66c-4a14-815b-de12e3a4ec6d",
          "name": "",
          "frameIndex": 30,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image30",
                "id": "45b1756b-2495-4d94-a8e1-dec1d99c012a",
                "availableId": "image30",
                "location": {
                  "x": 10,
                  "y": 99
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 10,
                "y": 99,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 30,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/030.jpg",
                "imageName": "030",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4106,
                "spriteHeight": 1453,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "a8e39ea7-9cf4-46b2-90d7-179dcc37e0a0",
          "name": "",
          "frameIndex": 31,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image31",
                "id": "641e078c-0488-4baf-bc74-9c01d6b627a6",
                "availableId": "image31",
                "location": {
                  "x": 3,
                  "y": 104
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 3,
                "y": 104,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 31,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/031.jpg",
                "imageName": "031",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4014,
                "spriteHeight": 1389,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "41eef7d6-828d-4cdb-8ffe-22de04683a31",
          "name": "",
          "frameIndex": 32,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image32",
                "id": "1dd7c62b-1264-4bb2-bd2e-b228e5a18ee7",
                "availableId": "image32",
                "location": {
                  "x": 5,
                  "y": 94
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 5,
                "y": 94,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 32,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/032.jpg",
                "imageName": "032",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3942,
                "spriteHeight": 1348,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "6a759976-3cb4-461a-a06a-bb8a3eeb81a8",
          "name": "",
          "frameIndex": 33,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image33",
                "id": "6dafcf29-6bf6-4ebc-a172-48a6f01565af",
                "availableId": "image33",
                "location": {
                  "x": 5,
                  "y": 90
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 5,
                "y": 90,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 33,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/033.jpg",
                "imageName": "033",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4239,
                "spriteHeight": 1586,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "8eeed35b-12d0-4b53-8945-1af12ab71d10",
          "name": "",
          "frameIndex": 34,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image34",
                "id": "58cfe1dd-5daa-4dd9-8c1d-2cc4ace4c0e8",
                "availableId": "image34",
                "location": {
                  "x": 7,
                  "y": 95
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 7,
                "y": 95,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 34,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/034.jpg",
                "imageName": "034",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4588,
                "spriteHeight": 1592,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "726f00bc-7104-46b8-9243-9e3c534670a9",
          "name": "",
          "frameIndex": 35,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image35",
                "id": "35292e6a-c7dd-4124-ba30-43c51ca6bda8",
                "availableId": "image35",
                "location": {
                  "x": 10,
                  "y": 92
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 10,
                "y": 92,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 35,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/035.jpg",
                "imageName": "035",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4189,
                "spriteHeight": 1451,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "3d6c4bd7-d945-470d-9eee-1ad81356c9b8",
          "name": "",
          "frameIndex": 36,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image36",
                "id": "d952b4f6-84c6-4a1c-806b-ea5f522898cc",
                "availableId": "image36",
                "location": {
                  "x": 5,
                  "y": 99
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 5,
                "y": 99,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 36,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 179
                },
                "isVisual": true,
                "imageUrl": "img/036.jpg",
                "imageName": "036",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3922,
                "spriteHeight": 1439,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "bea3a9d3-d49f-491a-a918-87299b0cfb15",
          "name": "",
          "frameIndex": 37,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image37",
                "id": "75533270-fa37-422a-8f58-0177cb778919",
                "availableId": "image37",
                "location": {
                  "x": 20,
                  "y": 100
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 20,
                "y": 100,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 37,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/037.jpg",
                "imageName": "037",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4306,
                "spriteHeight": 1524,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "26cfffab-0664-4994-9a5a-6818d88b40e2",
          "name": "",
          "frameIndex": 38,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image38",
                "id": "fdbdf2b1-b734-4329-91b0-5edd07b4d294",
                "availableId": "image38",
                "location": {
                  "x": 12,
                  "y": 97
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 12,
                "y": 97,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 38,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/038.jpg",
                "imageName": "038",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4113,
                "spriteHeight": 1438,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "1f1bc9ad-be85-4e28-b7be-19efd5b7c005",
          "name": "",
          "frameIndex": 39,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image39",
                "id": "66131f2b-1b36-45c2-a1ea-ac37dd74689f",
                "availableId": "image39",
                "location": {
                  "x": 12,
                  "y": 96
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 12,
                "y": 96,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 39,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 499,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/039.jpg",
                "imageName": "039",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 4090,
                "spriteHeight": 1432,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "97bfc559-87f3-4a01-8c2f-6037c7f32d36",
          "name": "",
          "frameIndex": 40,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "imageDesignObject",
                "type": "image",
                "name": "image40",
                "id": "efe3bea1-3074-496b-ab72-24b92452cda1",
                "availableId": "image40",
                "location": {
                  "x": 0,
                  "y": 108
                },
                "size": {
                  "width": 997,
                  "height": 359
                },
                "enabled": true,
                "tag": "",
                "x": 0,
                "y": 108,
                "width": 997,
                "height": 359,
                "groupName": "image",
                "groupOrder": 40,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 498,
                  "y": 180
                },
                "isVisual": true,
                "imageUrl": "img/040.jpg",
                "imageName": "040",
                "imageExtension": ".jpg",
                "imagePath": "resources/img/",
                "spriteWidth": 3865,
                "spriteHeight": 1378,
                "highlightBehavior": false,
                "highlightWidth": 747,
                "highlightHeight": 269,
                "isSprite": false,
                "spriteFrameCount": 0,
                "spriteSequencerType": "css",
                "spriteInitialFrameIndex": 1,
                "spriteFramePerSecond": 24.0,
                "isSpriteLooping": false,
                "keepAspectRatio": false,
                "autoAnimate": false,
                "resizingType": "scale",
                "imageFormat": "bitmap"
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        },
        {
          "id": "24918a1b-1792-465d-87f8-53c1813f5562",
          "name": "",
          "frameIndex": 41,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designLayout": {
            "designObjects": [
              {
                "typeName": "textDesignObject",
                "type": "text",
                "name": "text1",
                "id": "e9547784-257e-477d-939b-2718255b4e30",
                "availableId": "text1",
                "location": {
                  "x": 202,
                  "y": 120
                },
                "size": {
                  "width": 600,
                  "height": 158
                },
                "enabled": true,
                "tag": "",
                "x": 202,
                "y": 120,
                "width": 600,
                "height": 158,
                "groupName": "text",
                "groupOrder": 1,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 300,
                  "y": 79
                },
                "isVisual": true,
                "highlightBehavior": false,
                "clippingBehavior": "clip",
                "htmlText": "<style>\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs4F8A2B7E{color:#000000;background-color:transparent;font-family:Calibri;font-size:36px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs4F8A2B7E\">TEBRİKLER SINAVI TAMAMLADINIZ</span></p><p class=\"cs2E86D3A6\"><span class=\"cs4F8A2B7E\">DOĞRU SAYINIZ</span></p>",
                "evaluatedHtmlText": "<style>\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs4F8A2B7E{color:#000000;background-color:transparent;font-family:Calibri;font-size:36px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs4F8A2B7E\">TEBRİKLER SINAVI TAMAMLADINIZ</span></p><p class=\"cs2E86D3A6\"><span class=\"cs4F8A2B7E\">DOĞRU SAYINIZ</span></p>",
                "plainText": "TEBRİKLER SINAVI TAMAMLADINIZ\r\nDOĞRU SAYINIZ",
                "evaluatedPlainText": "TEBRİKLER SINAVI TAMAMLADINIZ\r\nDOĞRU SAYINIZ",
                "highlightWidth": 450,
                "highlightHeight": 118
              },
              {
                "typeName": "textDesignObject",
                "type": "text",
                "name": "textSonuc",
                "id": "8d8fd2c1-c1cb-4cc2-83d4-99425b976759",
                "availableId": "textSonuc",
                "location": {
                  "x": 202,
                  "y": 228
                },
                "size": {
                  "width": 601,
                  "height": 159
                },
                "enabled": true,
                "tag": "",
                "x": 202,
                "y": 228,
                "width": 601,
                "height": 159,
                "groupName": "textSonuc",
                "groupOrder": 0,
                "alpha": 100,
                "visible": true,
                "draggable": false,
                "revertDragging": "true",
                "droppable": false,
                "className": "",
                "rotation": 0.0,
                "pivotLocation": {
                  "x": 301,
                  "y": 80
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
                "htmlText": "<style>\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.csF14F9441{color:#000000;background-color:transparent;font-family:Calibri;font-size:48px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"csF14F9441\">.</span></p>",
                "evaluatedHtmlText": "<style>\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.csF14F9441{color:#000000;background-color:transparent;font-family:Calibri;font-size:48px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"csF14F9441\">.</span></p>",
                "plainText": ".",
                "evaluatedPlainText": ".",
                "highlightWidth": 450,
                "highlightHeight": 119
              }
            ]
          },
          "blockLayout": {
            "blocks": []
          }
        }
      ]
    }
  ],
  "folderMappings": {
    "imagesSourceFolder": "images",
    "videosSourceFolder": "videos",
    "soundsSourceFolder": "sound",
    "scriptsSourceFolder": "scripts",
    "stylesSourceFolder": "styles",
    "imagesTargetFolder": "img",
    "videosTargetFolder": "video",
    "scriptsTargetFolder": "js",
    "stylesTargetFolder": "css"
  }
};
