var vFabrikaPlayerData_Bilsem1D = {
  "isLooping": false,
  "isAutoPlay": true,
  "stageWidth": 1000,
  "stageHeight": 625,
  "frameCount": 24,
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
          "frameCount": 23,
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
            }
          ],
          "blocks": [
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
                            "value": "a,b,c,c,c,c,b,d,c,c,b,a,b,a,d,a,a,d,c,a,b,d"
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
          "frameIndex": 23,
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
          "frameCount": 22,
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
                "x": 390,
                "y": 561
              },
              "size": {
                "width": 223,
                "height": 55
              },
              "x": 390,
              "y": 561,
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
                "x": 485,
                "y": 17
              },
              "size": {
                "width": 69,
                "height": 69
              },
              "x": 485,
              "y": 17,
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
                "x": 483,
                "y": 17
              },
              "size": {
                "width": 68,
                "height": 68
              },
              "x": 483,
              "y": 17,
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
          "frameCount": 22,
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
                "x": 262,
                "y": 434
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 262,
              "y": 434,
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
                "x": 262,
                "y": 441
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 262,
              "y": 441,
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
                "x": 395,
                "y": 441
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 395,
              "y": 441,
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
                "x": 392,
                "y": 434
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 392,
              "y": 434,
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
                "x": 522,
                "y": 444
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 522,
              "y": 444,
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
                "x": 522,
                "y": 434
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 522,
              "y": 434,
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
                "x": 662,
                "y": 441
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 662,
              "y": 441,
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
                "x": 662,
                "y": 434
              },
              "size": {
                "width": 100,
                "height": 100
              },
              "x": 662,
              "y": 434,
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
              "uniqueId": "b09addef-95f8-4b05-aabf-94f828deaa34",
              "enabled": true,
              "location": {
                "x": 230,
                "y": -15
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 230,
              "y": -15,
              "width": 547,
              "height": 568,
              "groupName": "image",
              "groupOrder": 2,
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
                "x": 273,
                "y": 284
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/001.jpg",
              "imageName": "001",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "5717c949-d805-40ca-8816-050e1f0264d3",
              "enabled": true,
              "location": {
                "x": 235,
                "y": -15
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 235,
              "y": -15,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "3fefd5dc-3411-4e0a-a31a-a3dc4389ddaa",
              "enabled": true,
              "location": {
                "x": 235,
                "y": -15
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 235,
              "y": -15,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "91367817-10b0-49a0-85a6-92222649b842",
              "enabled": true,
              "location": {
                "x": 236,
                "y": -15
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 236,
              "y": -15,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "5cf1d202-7dc9-4e34-9ed2-5e12c8ca889d",
              "enabled": true,
              "location": {
                "x": 236,
                "y": -9
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 236,
              "y": -9,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "886ea025-c50e-46db-a63e-fcb921ed1f0f",
              "enabled": true,
              "location": {
                "x": 228,
                "y": -11
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 228,
              "y": -11,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "e83707ed-99ac-4db0-b666-f842cc8a957e",
              "enabled": true,
              "location": {
                "x": 241,
                "y": -12
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 241,
              "y": -12,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "8544510f-d195-4b29-8f55-a810cd294443",
              "enabled": true,
              "location": {
                "x": 239,
                "y": -6
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 239,
              "y": -6,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "e107543a-5af1-4e5f-a0bc-ef618bd1989b",
              "enabled": true,
              "location": {
                "x": 230,
                "y": -7
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 230,
              "y": -7,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "40889066-7264-4c42-9223-d2e42915b86e",
              "enabled": true,
              "location": {
                "x": 239,
                "y": -11
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 239,
              "y": -11,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "b8393a92-b692-468e-b019-83f55ae457f7",
              "enabled": true,
              "location": {
                "x": 236,
                "y": -9
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 236,
              "y": -9,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "90f42e57-a9c4-4dd3-8330-78b764d77210",
              "enabled": true,
              "location": {
                "x": 230,
                "y": -15
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 230,
              "y": -15,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "cf0b7f0f-d653-4386-b427-7a0dc6aebe17",
              "enabled": true,
              "location": {
                "x": 243,
                "y": -6
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 243,
              "y": -6,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "1c77a1c5-72f8-43fb-a6d3-93d5b44f9275",
              "enabled": true,
              "location": {
                "x": 241,
                "y": 0
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 241,
              "y": 0,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "a696a136-dd41-4f27-ad3c-9bc97a8b9163",
              "enabled": true,
              "location": {
                "x": 238,
                "y": -7
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 238,
              "y": -7,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "adde8b79-240d-412f-b04f-17500fea0dc9",
              "enabled": true,
              "location": {
                "x": 239,
                "y": 0
              },
              "size": {
                "width": 532,
                "height": 553
              },
              "x": 239,
              "y": 0,
              "width": 532,
              "height": 553,
              "groupName": "image",
              "groupOrder": 16,
              "pivotX": 266,
              "pivotY": 277,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 266,
                "y": 277
              },
              "currentPivotLocation": {
                "x": 266,
                "y": 277
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/016.jpg",
              "imageName": "016",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "a0768b2e-e5de-47b5-bf9e-6ab95482a445",
              "enabled": true,
              "location": {
                "x": 240,
                "y": -4
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 240,
              "y": -4,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "ca4dff19-6918-4a75-93de-263b6afb60f8",
              "enabled": true,
              "location": {
                "x": 241,
                "y": -10
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 241,
              "y": -10,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "d0fbefdd-1223-406a-81a5-c313c07ce46d",
              "enabled": true,
              "location": {
                "x": 235,
                "y": -6
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 235,
              "y": -6,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "b68665a7-2eb7-4dbd-a5ff-0cd0abbf0a61",
              "enabled": true,
              "location": {
                "x": 243,
                "y": -11
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 243,
              "y": -11,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "151526b9-ac9d-44fb-90c6-8057d4d7a12e",
              "enabled": true,
              "location": {
                "x": 236,
                "y": -11
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 236,
              "y": -11,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
              "uniqueId": "f5b0c3d6-38b5-43fe-92f9-5a2937843ca2",
              "enabled": true,
              "location": {
                "x": 229,
                "y": -11
              },
              "size": {
                "width": 547,
                "height": 568
              },
              "x": 229,
              "y": -11,
              "width": 547,
              "height": 568,
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
                "x": 273,
                "y": 284
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
              "spriteWidth": 547,
              "spriteHeight": 568,
              "highlightWidth": 0,
              "highlightHeight": 0,
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
          "frameIndex": 23,
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
