var vFabrikaPlayerData_sebit2 = {
  "isLooping": false,
  "isAutoPlay": true,
  "stageWidth": 762,
  "stageHeight": 463,
  "frameCount": 3,
  "framesPerSecond": 24.0,
  "omitConsoleMessages": false,
  "layers": [
    {
      "uniqueId": "5d48fc41-65b4-42a7-b40f-6f37b4473697",
      "name": "Katman 1",
      "underscoredName": "Katman_1",
      "keyframes": [
        {
          "uniqueId": "b0c23470-8dbd-4b7c-b068-4471972e58a6",
          "frameIndex": 0,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "button1",
              "uniqueId": "734b5bfd-73e0-4d48-b266-def17acbd900",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 272,
                "y": 175
              },
              "size": {
                "width": 225,
                "height": 74
              },
              "x": 272,
              "y": 175,
              "width": 225,
              "height": 74,
              "groupName": "button",
              "groupOrder": 1,
              "pivotX": 113,
              "pivotY": 36,
              "alpha": 100,
              "visible": true,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 113,
                "y": 36
              },
              "currentPivotLocation": {
                "x": 113,
                "y": 36
              },
              "styles": [
                {
                  "name": "font-size",
                  "value": "24px"
                }
              ],
              "isVisual": true,
              "value": "Test"
            },
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "button4",
              "uniqueId": "c9060965-862c-4090-a2df-3bd58038e823",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 272,
                "y": 267
              },
              "size": {
                "width": 222,
                "height": 71
              },
              "x": 272,
              "y": 267,
              "width": 222,
              "height": 71,
              "groupName": "button",
              "groupOrder": 4,
              "pivotX": 111,
              "pivotY": 34,
              "alpha": 100,
              "visible": true,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 111,
                "y": 34
              },
              "currentPivotLocation": {
                "x": 111,
                "y": 34
              },
              "isVisual": true,
              "value": "Hipotez"
            }
          ],
          "blocks": [
            {
              "uniqueId": "efbd9563-6ee8-4000-a1ca-83763bd75d5f",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "sNo"
                    }
                  ],
                  "block": {
                    "uniqueId": "4c3f4724-9f07-4ff2-a593-ef2ba60dfd8e",
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
              "uniqueId": "c309babb-c788-484f-a0f1-6ac0e4e6ce1b",
              "type": "inputButtonDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "button4"
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
                    "uniqueId": "87468e2a-dffd-453b-b0b9-8e9586741729",
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
                              "uniqueId": "83d82f4b-f7f7-49c4-af50-e1e4f6185221",
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
              ]
            },
            {
              "uniqueId": "c874ffa2-fb57-4d8c-8c5c-fededbd2f758",
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
                    "uniqueId": "37adf32d-2214-4809-a881-b4e69d9e280b",
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
              "uniqueId": "851c1ad2-d3fc-4330-acaf-3ea715bd3971",
              "type": "inputButtonDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "button1"
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
                    "uniqueId": "cf150349-b1aa-4c80-8353-ed6385e3ea96",
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
                              "uniqueId": "99e43543-0213-4561-9510-ff660fde47d0",
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
              ]
            }
          ]
        },
        {
          "uniqueId": "4c621de8-794e-432f-8586-481470e8aa3b",
          "frameIndex": 1,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "animationPopupDesignObject",
              "type": "animationPopup",
              "id": "animationPopup1",
              "uniqueId": "15cb8668-3fe6-4fe9-b40a-096aa11f44f7",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 190,
                "y": 66
              },
              "size": {
                "width": 401,
                "height": 293
              },
              "x": 190,
              "y": 66,
              "width": 401,
              "height": 293,
              "groupName": "animationPopup",
              "groupOrder": 1,
              "pivotX": 201,
              "pivotY": 147,
              "alpha": 100,
              "visible": true,
              "useHandCursor": false,
              "className": "",
              "pivotLocation": {
                "x": 201,
                "y": 147
              },
              "currentPivotLocation": {
                "x": 201,
                "y": 147
              },
              "isVisual": true
            },
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "button2",
              "uniqueId": "c437b0e7-c8a6-4839-8d49-14a7a3f27e08",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 41,
                "y": 51
              },
              "size": {
                "width": 100,
                "height": 25
              },
              "x": 41,
              "y": 51,
              "width": 100,
              "height": 25,
              "groupName": "button",
              "groupOrder": 2,
              "pivotX": 50,
              "pivotY": 12,
              "alpha": 100,
              "visible": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 12
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 12
              },
              "isVisual": true,
              "value": "izle"
            },
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "button3",
              "uniqueId": "e7bbe5a2-586c-4955-9915-f23f11cdc4d3",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 41,
                "y": 97
              },
              "size": {
                "width": 100,
                "height": 25
              },
              "x": 41,
              "y": 97,
              "width": 100,
              "height": 25,
              "groupName": "button",
              "groupOrder": 3,
              "pivotX": 50,
              "pivotY": 12,
              "alpha": 100,
              "visible": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 12
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 12
              },
              "isVisual": true,
              "value": "Hipotez"
            },
            {
              "typeName": "textDesignObject",
              "type": "text",
              "id": "text2",
              "uniqueId": "e5b45e7a-97a3-4936-b21d-824fd4a2d934",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 13,
                "y": 20
              },
              "size": {
                "width": 100,
                "height": 20
              },
              "x": 13,
              "y": 20,
              "width": 100,
              "height": 20,
              "groupName": "text",
              "groupOrder": 2,
              "pivotX": 50,
              "pivotY": 10,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 50,
                "y": 10
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 10
              },
              "isVisual": true,
              "highlightBehavior": false,
              "clippingBehavior": "clip",
              "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs95E872D0{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.csC0303025{color:#000000;background-color:transparent;font-family:Calibri;font-size:15px;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs95E872D0\"><span class=\"csC0303025\">&nbsp;</span></p></body>\r\n</html>",
              "text": "",
              "highlightWidth": 75,
              "highlightHeight": 15
            }
          ],
          "blocks": [
            {
              "uniqueId": "9c1a2de0-c108-46ea-be60-6fdfa66e2ed4",
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
                    "uniqueId": "e2575fbd-f871-4e1f-8386-20e619ddbdce",
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
                          "uniqueId": "bf3b5290-e794-44dc-8ef7-03b0fb9f5469",
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
                                    "uniqueId": "98a005a5-3133-4d68-be6b-5104817fbad0",
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
                                    "uniqueId": "9302fcf3-fa0d-468a-9d7a-e32a4b82b1aa",
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
                      },
                      {
                        "name": "then",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "ec14ce6c-700b-4c15-b0d2-d55c17c4f19a",
                          "type": "procedureCall",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "sonraki"
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
              "uniqueId": "51499f12-b660-4e3c-bc50-4f62b7e0e28d",
              "type": "sebitFrameworkOnRestartEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": []
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "c3e750a4-dce2-47ae-927d-5f08dd90364f",
                    "type": "sebitFrameworkRestartHide",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": []
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "6719df3d-f52a-4828-a60f-0e02e85ae038",
                      "type": "variableSetValue",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "sNo"
                            }
                          ],
                          "block": {
                            "uniqueId": "d6077bb5-cecb-4d5c-b2b2-c9538c1ad3c9",
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
                      ],
                      "flowBlock": {
                        "uniqueId": "e9cb730d-27c9-4e40-a961-6523ed988220",
                        "type": "sebitFrameworkQuestionShow",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [],
                            "block": {
                              "uniqueId": "e6f7698f-58b8-488f-90a8-8eac4837d84a",
                              "type": "variableGetValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "name",
                                      "type": "dropdown",
                                      "value": "sNo"
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "e25f0bcb-87bf-4210-80c8-e27d9fe7340e",
                          "type": "inputButtonDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "button2"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "654d56ae-446a-4724-989b-194659a975ad",
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
                            "uniqueId": "cef9059c-02f6-4909-a4bc-7d176c5a940d",
                            "type": "inputButtonDesignObjectSetProperty",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "id",
                                    "type": "dropdown",
                                    "value": "button3"
                                  },
                                  {
                                    "name": "propertyName",
                                    "type": "dropdown",
                                    "value": "visible"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "8a077a10-de4a-4980-a653-32acbd9b4932",
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
                }
              ]
            },
            {
              "uniqueId": "58a6c8be-e61e-4900-b347-c74963ed45a4",
              "type": "inputButtonDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "button2"
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
                    "uniqueId": "f3d3b33d-dd98-4e68-b2f2-38d7483e3966",
                    "type": "sebitFrameworkAnimationPopupShow",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "animationPopup1"
                          }
                        ],
                        "block": {
                          "uniqueId": "0461c33b-f840-43bf-aae7-ea81da455415",
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
                }
              ]
            },
            {
              "uniqueId": "572c0d12-b56c-4bb8-bfa1-a9312b347200",
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
                      "value": "kontrol"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "fb43d5c5-5ff7-4486-b868-f8a2a1ac8b38",
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
                          "uniqueId": "f5ca1cfa-669f-4a05-8b53-71aa6b8b012a",
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
                                    "uniqueId": "4da216f1-be75-4c2f-beb7-44fb0ad250bd",
                                    "type": "variableGetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "sNo"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                },
                                {
                                  "name": "criteria",
                                  "type": "dropdown",
                                  "value": "greaterOrEqual"
                                },
                                {
                                  "name": "containerB",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "9302fcf3-fa0d-468a-9d7a-e32a4b82b1aa",
                                    "type": "mathValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "numeric",
                                            "value": 5
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
                          "uniqueId": "2a71f0ba-afa8-49bb-815b-b706d3512ad9",
                          "type": "sebitFrameworkFeedbackShow",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [],
                              "block": {
                                "uniqueId": "a626ed32-3ed4-4afd-974d-08e5c3bbe3fd",
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
                          ],
                          "flowBlock": {
                            "uniqueId": "b390bb02-500b-460b-80da-f6d70f7efeac",
                            "type": "sebitFrameworkScoComplete",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": []
                              }
                            ],
                            "flowBlock": {
                              "uniqueId": "5667f0c1-cef6-449e-8d1f-d52194571d79",
                              "type": "sebitFrameworkNotifySoundSolo",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "notifySound",
                                      "type": "dropdown",
                                      "value": "correct3"
                                    }
                                  ]
                                }
                              ],
                              "flowBlock": {
                                "uniqueId": "1841c128-a5d8-4be9-9a9a-2640a5564ade",
                                "type": "sebitFrameworkRestartShow",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": []
                                  }
                                ],
                                "flowBlock": {
                                  "uniqueId": "9da5b9fe-0879-416e-a654-0b641f3b8612",
                                  "type": "inputButtonDesignObjectSetProperty",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "pin",
                                      "items": [
                                        {
                                          "name": "id",
                                          "type": "dropdown",
                                          "value": "button2"
                                        },
                                        {
                                          "name": "propertyName",
                                          "type": "dropdown",
                                          "value": "visible"
                                        }
                                      ],
                                      "block": {
                                        "uniqueId": "8a077a10-de4a-4980-a653-32acbd9b4932",
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
                                    "uniqueId": "cef9059c-02f6-4909-a4bc-7d176c5a940d",
                                    "type": "inputButtonDesignObjectSetProperty",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "pin",
                                        "items": [
                                          {
                                            "name": "id",
                                            "type": "dropdown",
                                            "value": "button3"
                                          },
                                          {
                                            "name": "propertyName",
                                            "type": "dropdown",
                                            "value": "visible"
                                          }
                                        ],
                                        "block": {
                                          "uniqueId": "654d56ae-446a-4724-989b-194659a975ad",
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
                        }
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "d31abbcc-e68c-403b-9f13-36ccc31e0de6",
                      "type": "textDesignObjectSetProperty",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "id",
                              "type": "dropdown",
                              "value": "text2"
                            },
                            {
                              "name": "propertyName",
                              "type": "dropdown",
                              "value": "text"
                            }
                          ],
                          "block": {
                            "uniqueId": "ad35b7fb-a70d-40b7-a10b-5c42bb126d41",
                            "type": "variableGetValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "sNo"
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
              ]
            },
            {
              "uniqueId": "64821b31-fee0-4503-b0d1-291994a0749d",
              "type": "sebitFrameworkOnQuestionChoiceSelectedEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": []
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "99ce8301-e4e8-48e9-b3bd-92bc68a65581",
                    "type": "variableInitializeLocal",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "name",
                            "type": "textbox",
                            "value": "cvb"
                          }
                        ],
                        "block": {
                          "uniqueId": "fda5e74d-5774-4372-84d9-bab838b13fd4",
                          "type": "listGetItemAt",
                          "inputs": [
                            {
                              "name": "list",
                              "type": "pin",
                              "items": [],
                              "block": {
                                "uniqueId": "2c36ff14-382f-4318-96c4-1a568fccf564",
                                "type": "listCreateFromCommaText",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "pin",
                                    "items": [],
                                    "block": {
                                      "uniqueId": "660cbf57-cb34-4ec0-a5a6-61449d03f0fc",
                                      "type": "textValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "value",
                                              "type": "textbox",
                                              "value": "-,c,c,d,a"
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
                                "uniqueId": "f3f182ab-f281-431e-949c-f0fa4b3ac857",
                                "type": "variableGetValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "name",
                                        "type": "dropdown",
                                        "value": "questionId"
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
                      "uniqueId": "24ee74ce-4752-49b8-a897-fefe6af4e65f",
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
                            "uniqueId": "16c919fe-d072-463d-a321-98305e817fff",
                            "type": "logicEquality",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "containerA",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "34b1c3b2-50c1-435f-ae41-e1998364eedc",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "cvb"
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
                                      "uniqueId": "8110fc69-147d-421c-a904-85c4243d3741",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "choiceLetter"
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
                            "uniqueId": "155a736a-90f9-4a6e-bdd7-a87ecbddb42b",
                            "type": "variableSetValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "sonuc"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "185245c6-3e56-4f89-bfa2-b2cce2316d7f",
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
                              "uniqueId": "ab47dd1c-beab-4300-bf04-0bf6c24804d5",
                              "type": "sebitFrameworkNotifySoundSolo",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "notifySound",
                                      "type": "dropdown",
                                      "value": "correct1"
                                    }
                                  ]
                                }
                              ],
                              "flowBlock": {
                                "uniqueId": "3ad647c4-b1c9-4c3b-a362-0ddbe52921a3",
                                "type": "procedureCall",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "name",
                                        "type": "dropdown",
                                        "value": "kontrol"
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
                            "uniqueId": "243b0235-2594-4fc2-9f89-93efd90bd5c1",
                            "type": "variableSetValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "sonuc"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "185245c6-3e56-4f89-bfa2-b2cce2316d7f",
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
                              "uniqueId": "2d0c25b5-8f6c-42d5-821e-5a914d37bddf",
                              "type": "sebitFrameworkNotifySoundSolo",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "notifySound",
                                      "type": "dropdown",
                                      "value": "wrong1"
                                    }
                                  ]
                                }
                              ]
                            }
                          },
                          "mutatorItemUniqueId": "d57a33e9-a23b-456f-9772-845f0e2a04fb",
                          "mutatorName": "else"
                        }
                      ],
                      "mutatorItems": [
                        {
                          "uniqueId": "d57a33e9-a23b-456f-9772-845f0e2a04fb",
                          "name": "else",
                          "allowOnlyOnce": true,
                          "defaultValue": ""
                        }
                      ]
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "c309babb-c788-484f-a0f1-6ac0e4e6ce1b",
              "type": "inputButtonDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "button3"
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
                    "uniqueId": "87468e2a-dffd-453b-b0b9-8e9586741729",
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
                              "uniqueId": "83d82f4b-f7f7-49c4-af50-e1e4f6185221",
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
              ]
            },
            {
              "uniqueId": "f8536e80-2eba-4241-a93b-2f8fb7410f63",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "sonuc"
                    }
                  ],
                  "block": {
                    "uniqueId": "96dffe01-d480-46a6-929f-c9d8bedfd9c1",
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
              "uniqueId": "035d354e-95b5-4960-8a2b-ec81a29a9e0a",
              "type": "sebitFrameworkOnQuestionHideEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": []
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "87be94c5-a1cd-40f8-87fa-ec957869e525",
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
                          "uniqueId": "9de3a79b-49f5-4ffd-a9fe-4ade0777ad2e",
                          "type": "variableGetValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "sonuc"
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
                          "uniqueId": "6c0be6bb-f934-49d7-bc0f-6c2d9c9e0f69",
                          "type": "procedureCall",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "sonraki"
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "name": "else0",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "deaef21a-2482-44c0-ba22-840ad82802ba",
                          "type": "sebitFrameworkQuestionShow",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [],
                              "block": {
                                "uniqueId": "028bd536-69f6-4d6b-9397-de92d872c860",
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
                                          "uniqueId": "9728b96f-466d-4a53-8db9-ee1f95d8b9d7",
                                          "type": "variableGetValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "name",
                                                  "type": "dropdown",
                                                  "value": "sNo"
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
                                          "uniqueId": "c9a18b32-5a7d-4b44-a26e-4efa894ab4c3",
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
                        },
                        "mutatorItemUniqueId": "48af4d68-25a9-4db2-80a6-286f0a73cf75",
                        "mutatorName": "else"
                      }
                    ],
                    "mutatorItems": [
                      {
                        "uniqueId": "48af4d68-25a9-4db2-80a6-286f0a73cf75",
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
              "uniqueId": "8cfc95ba-8d59-4ca9-ab19-c8bfada79046",
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
                      "value": "sonraki"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "a5a09a00-e9e5-4ba2-8df1-1d8b66f78963",
                    "type": "sebitFrameworkQuestionShow",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [],
                        "block": {
                          "uniqueId": "57683d67-3743-4bcd-a99c-22680b2d2946",
                          "type": "variableGetValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "sNo"
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "d3fed773-fc7c-4b25-8060-c6c4fa890421",
                      "type": "variableSetValue",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "sNo"
                            }
                          ],
                          "block": {
                            "uniqueId": "a9ee233b-da10-467d-8dea-806acdeb89a5",
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
                                    "name": "7091e919-f4b5-4b90-b3f5-f481893fd032",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "76163d27-c90d-48ed-bf58-9205dd64d7c8",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "sNo"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "mutatorItemUniqueId": "7091e919-f4b5-4b90-b3f5-f481893fd032",
                                    "mutatorName": "container"
                                  },
                                  {
                                    "name": "fdbf896d-0e5f-42c4-ba55-7b16b39f7056",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "d6077bb5-cecb-4d5c-b2b2-c9538c1ad3c9",
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
                                    "mutatorItemUniqueId": "fdbf896d-0e5f-42c4-ba55-7b16b39f7056",
                                    "mutatorName": "container"
                                  }
                                ]
                              }
                            ],
                            "mutatorItems": [
                              {
                                "uniqueId": "7091e919-f4b5-4b90-b3f5-f481893fd032",
                                "name": "operation",
                                "allowOnlyOnce": false,
                                "defaultValue": "+"
                              },
                              {
                                "uniqueId": "fdbf896d-0e5f-42c4-ba55-7b16b39f7056",
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
            }
          ]
        },
        {
          "uniqueId": "010dcae9-28b3-40ea-ba20-dd4ae2c5b186",
          "frameIndex": 2,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "textDesignObject",
              "type": "text",
              "id": "text1",
              "uniqueId": "1b2fb2ce-8c91-4e88-90f9-ad4e2cc79805",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 343
              },
              "size": {
                "width": 657,
                "height": 45
              },
              "x": 0,
              "y": 343,
              "width": 657,
              "height": 45,
              "groupName": "text",
              "groupOrder": 1,
              "pivotX": 329,
              "pivotY": 23,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 329,
                "y": 23
              },
              "currentPivotLocation": {
                "x": 329,
                "y": 23
              },
              "styles": [
                {
                  "name": "font-size",
                  "value": "9pt"
                }
              ],
              "isVisual": true,
              "highlightBehavior": false,
              "clippingBehavior": "clip",
              "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs95E872D0{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.csC0303025{color:#000000;background-color:transparent;font-family:Calibri;font-size:15px;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs95E872D0\"><span class=\"csC0303025\">&nbsp;</span></p></body>\r\n</html>",
              "text": "",
              "highlightWidth": 492,
              "highlightHeight": 33
            },
            {
              "typeName": "tableDesignObject",
              "type": "table",
              "id": "table1",
              "uniqueId": "d14d9cea-a517-4a4b-a5b7-c21edab06daa",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 387
              },
              "size": {
                "width": 657,
                "height": 74
              },
              "x": 0,
              "y": 387,
              "width": 657,
              "height": 74,
              "groupName": "table",
              "groupOrder": 1,
              "pivotX": 329,
              "pivotY": 37,
              "alpha": 100,
              "visible": true,
              "useHandCursor": false,
              "className": "",
              "pivotLocation": {
                "x": 329,
                "y": 37
              },
              "currentPivotLocation": {
                "x": 329,
                "y": 37
              },
              "isVisual": true,
              "columns": [
                {
                  "name": "mknt",
                  "headerText": "Mıknatısın Çektikleri",
                  "width": 0,
                  "widthMode": "fixed",
                  "headerTextAlign": "left"
                },
                {
                  "name": "dcsm",
                  "headerText": "Düşen Cisimler",
                  "width": 0,
                  "widthMode": "fixed",
                  "headerTextAlign": "left"
                }
              ],
              "autoWidth": true,
              "autoHeight": true,
              "showHeader": true,
              "showFooter": true,
              "tableStyle": "default",
              "tableEvenRowStyle": "default",
              "tableOddRowStyle": "default",
              "tableRowStyle": "default",
              "tableHeaderRowStyle": "default",
              "tableFooterRowStyle": "default",
              "tableColumnStyle": "default",
              "scrollMode": "none",
              "rowHeight": 15,
              "headerRowHeight": 15,
              "footerRowHeight": 15,
              "selectable": false,
              "selectionMode": "row_selection"
            },
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "button5",
              "uniqueId": "56386f58-f8f0-4bc4-859c-508d68400fda",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 656,
                "y": 387
              },
              "size": {
                "width": 47,
                "height": 25
              },
              "x": 656,
              "y": 387,
              "width": 47,
              "height": 25,
              "groupName": "button",
              "groupOrder": 5,
              "pivotX": 24,
              "pivotY": 12,
              "alpha": 100,
              "visible": true,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 24,
                "y": 12
              },
              "currentPivotLocation": {
                "x": 24,
                "y": 12
              },
              "isVisual": true,
              "value": "EKLE"
            }
          ],
          "blocks": [
            {
              "uniqueId": "5cb6ad80-85d6-48fa-87dd-39df597e5ec1",
              "type": "inputButtonDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "button5"
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
                    "uniqueId": "261acc79-f019-4ff0-b18e-dca30cd60512",
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
                          "uniqueId": "e594d043-08e2-4e94-9991-a110c14aebeb",
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
                                    "uniqueId": "9d564465-45e5-4b9c-a621-94a577b89deb",
                                    "type": "variableGetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "durum"
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
                                    "uniqueId": "86b52f60-0b8c-4e6e-841d-120803b86544",
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
                      },
                      {
                        "name": "then",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "99e5b263-138a-45dc-acaf-e1da4fa3dcb1",
                          "type": "variableSetValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "c1Top"
                                }
                              ],
                              "block": {
                                "uniqueId": "b6419fda-e8fc-4eda-b6e2-321f9079f63a",
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
                                        "name": "d7788e60-838d-465b-b9c4-3aeec5fd3d44",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "89875252-51f8-4cd9-aece-b1d814a065df",
                                          "type": "variableGetValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "name",
                                                  "type": "dropdown",
                                                  "value": "c1Top"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "mutatorItemUniqueId": "d7788e60-838d-465b-b9c4-3aeec5fd3d44",
                                        "mutatorName": "container"
                                      },
                                      {
                                        "name": "5164ac2d-e375-46e3-a876-2004b765a628",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "d21034a3-1798-457a-bd87-c1ec641fe3d3",
                                          "type": "variableGetValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "name",
                                                  "type": "dropdown",
                                                  "value": "c1Vals"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "mutatorItemUniqueId": "5164ac2d-e375-46e3-a876-2004b765a628",
                                        "mutatorName": "container"
                                      }
                                    ]
                                  }
                                ],
                                "mutatorItems": [
                                  {
                                    "uniqueId": "d7788e60-838d-465b-b9c4-3aeec5fd3d44",
                                    "name": "operation",
                                    "allowOnlyOnce": false,
                                    "defaultValue": "+"
                                  },
                                  {
                                    "uniqueId": "5164ac2d-e375-46e3-a876-2004b765a628",
                                    "name": "operation",
                                    "allowOnlyOnce": false,
                                    "defaultValue": "+"
                                  }
                                ]
                              }
                            }
                          ],
                          "flowBlock": {
                            "uniqueId": "4e06c115-2ebd-4d4f-8165-31c5e3864164",
                            "type": "tableDesignObjectSetColumnAtRowByIndex",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "id",
                                    "type": "dropdown",
                                    "value": "table1"
                                  },
                                  {
                                    "name": "rowIndex",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "7a5fa2f9-9881-4368-a345-4e649f084a8d",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "rw"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "columnIndex",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "f741e797-4d4d-4e9d-9872-cc9bcff046d0",
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
                                ],
                                "block": {
                                  "uniqueId": "93bd662e-63f9-4469-8226-c506ebaba950",
                                  "type": "listGetItemAt",
                                  "inputs": [
                                    {
                                      "name": "list",
                                      "type": "pin",
                                      "items": [],
                                      "block": {
                                        "uniqueId": "96ea6e5b-a073-48d0-8f1f-13dc424dd096",
                                        "type": "listCreateFromCommaText",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "pin",
                                            "items": [],
                                            "block": {
                                              "uniqueId": "b20025f5-0532-423f-9887-9bd80b453f6e",
                                              "type": "textValue",
                                              "inputs": [
                                                {
                                                  "name": "default",
                                                  "type": "none",
                                                  "items": [
                                                    {
                                                      "name": "value",
                                                      "type": "textbox",
                                                      "value": "Demir,Tahta,Plastik"
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
                                        "uniqueId": "9ff1f7fb-99b0-4177-9ac2-e1ce984f67cf",
                                        "type": "variableGetValue",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "name",
                                                "type": "dropdown",
                                                "value": "c1Vals"
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
                      },
                      {
                        "name": "elseIf0",
                        "type": "pin",
                        "items": [],
                        "block": {
                          "uniqueId": "6966adb6-9d63-4ad7-866a-282e42b02548",
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
                                    "uniqueId": "9d564465-45e5-4b9c-a621-94a577b89deb",
                                    "type": "variableGetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "durum"
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
                                    "uniqueId": "86b52f60-0b8c-4e6e-841d-120803b86544",
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
                        },
                        "mutatorItemUniqueId": "23ae1c91-2aab-4fbe-b0fc-f9e882a100b6",
                        "mutatorName": "elseIf"
                      },
                      {
                        "name": "elseIf1",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "b5a292fa-d607-46ca-bf4e-11e44f69c62b",
                          "type": "variableSetValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "c2Top"
                                }
                              ],
                              "block": {
                                "uniqueId": "b6419fda-e8fc-4eda-b6e2-321f9079f63a",
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
                                        "name": "d7788e60-838d-465b-b9c4-3aeec5fd3d44",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "89875252-51f8-4cd9-aece-b1d814a065df",
                                          "type": "variableGetValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "name",
                                                  "type": "dropdown",
                                                  "value": "c2Top"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "mutatorItemUniqueId": "d7788e60-838d-465b-b9c4-3aeec5fd3d44",
                                        "mutatorName": "container"
                                      },
                                      {
                                        "name": "5164ac2d-e375-46e3-a876-2004b765a628",
                                        "type": "container",
                                        "block": {
                                          "uniqueId": "d21034a3-1798-457a-bd87-c1ec641fe3d3",
                                          "type": "variableGetValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "name",
                                                  "type": "dropdown",
                                                  "value": "c2Vals"
                                                }
                                              ]
                                            }
                                          ]
                                        },
                                        "mutatorItemUniqueId": "5164ac2d-e375-46e3-a876-2004b765a628",
                                        "mutatorName": "container"
                                      }
                                    ]
                                  }
                                ],
                                "mutatorItems": [
                                  {
                                    "uniqueId": "d7788e60-838d-465b-b9c4-3aeec5fd3d44",
                                    "name": "operation",
                                    "allowOnlyOnce": false,
                                    "defaultValue": "+"
                                  },
                                  {
                                    "uniqueId": "5164ac2d-e375-46e3-a876-2004b765a628",
                                    "name": "operation",
                                    "allowOnlyOnce": false,
                                    "defaultValue": "+"
                                  }
                                ]
                              }
                            }
                          ],
                          "flowBlock": {
                            "uniqueId": "1d17afc0-c4ce-44d3-af1e-5126d9e1727d",
                            "type": "tableDesignObjectSetColumnAtRowByIndex",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "id",
                                    "type": "dropdown",
                                    "value": "table1"
                                  },
                                  {
                                    "name": "rowIndex",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "7a5fa2f9-9881-4368-a345-4e649f084a8d",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "rw"
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "columnIndex",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "f741e797-4d4d-4e9d-9872-cc9bcff046d0",
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
                                ],
                                "block": {
                                  "uniqueId": "93bd662e-63f9-4469-8226-c506ebaba950",
                                  "type": "listGetItemAt",
                                  "inputs": [
                                    {
                                      "name": "list",
                                      "type": "pin",
                                      "items": [],
                                      "block": {
                                        "uniqueId": "96ea6e5b-a073-48d0-8f1f-13dc424dd096",
                                        "type": "listCreateFromCommaText",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "pin",
                                            "items": [],
                                            "block": {
                                              "uniqueId": "417de2fe-c52c-4ba9-b40f-58184abb4718",
                                              "type": "textValue",
                                              "inputs": [
                                                {
                                                  "name": "default",
                                                  "type": "none",
                                                  "items": [
                                                    {
                                                      "name": "value",
                                                      "type": "textbox",
                                                      "value": "-,Tahta,-,Demir,-,Plastik"
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
                                        "uniqueId": "9ff1f7fb-99b0-4177-9ac2-e1ce984f67cf",
                                        "type": "variableGetValue",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "name",
                                                "type": "dropdown",
                                                "value": "c2Vals"
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
                        },
                        "mutatorItemUniqueId": "23ae1c91-2aab-4fbe-b0fc-f9e882a100b6",
                        "mutatorName": "then"
                      }
                    ],
                    "mutatorItems": [
                      {
                        "uniqueId": "23ae1c91-2aab-4fbe-b0fc-f9e882a100b6",
                        "name": "elseIf",
                        "allowOnlyOnce": false,
                        "defaultValue": ""
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "b7832516-fd40-43b7-b31b-aaeda258c0d4",
                      "type": "variableSetValue",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "rw"
                            }
                          ],
                          "block": {
                            "uniqueId": "df5ac7cf-949e-48b4-b949-fa27a7dcc887",
                            "type": "mathMod",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "container",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "f0cd1806-0be6-43b0-9429-c66f8d0cd970",
                                      "type": "mathValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "value",
                                              "type": "numeric",
                                              "value": 3
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ],
                                "block": {
                                  "uniqueId": "e2f03517-d23a-4e82-af25-0e8a819a0982",
                                  "type": "variableGetValue",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "none",
                                      "items": [
                                        {
                                          "name": "name",
                                          "type": "dropdown",
                                          "value": "rw"
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
                        "uniqueId": "bf47bb41-4a96-4a28-a54e-9024b6c7fc42",
                        "type": "variableSetValue",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "pin",
                            "items": [
                              {
                                "name": "name",
                                "type": "dropdown",
                                "value": "rw"
                              }
                            ],
                            "block": {
                              "uniqueId": "dc6eaad5-e96e-4c38-aa75-97330539f5f8",
                              "type": "mathPlusOne",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [],
                                  "block": {
                                    "uniqueId": "72f08d60-2014-4a84-bbce-12b30bbf9f4c",
                                    "type": "variableGetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "rw"
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
              ]
            },
            {
              "uniqueId": "c06641f3-1f33-4bbf-8785-404f54fdb36e",
              "type": "sebitFrameworkOnHypothesisClickEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": []
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "0fb6ed5f-4122-4e21-abb5-650b863bb765",
                    "type": "controlIfThenElse",
                    "inputs": [
                      {
                        "name": "if",
                        "type": "pin",
                        "items": [],
                        "block": {
                          "uniqueId": "df1857e9-5e6a-46ac-92c3-8bde8c012c37",
                          "type": "logicAndOr",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "containerA",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "b2d39a1f-f60c-490b-9a31-063be4523681",
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
                                              "uniqueId": "9d564465-45e5-4b9c-a621-94a577b89deb",
                                              "type": "variableGetValue",
                                              "inputs": [
                                                {
                                                  "name": "default",
                                                  "type": "none",
                                                  "items": [
                                                    {
                                                      "name": "name",
                                                      "type": "dropdown",
                                                      "value": "c1Top"
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
                                              "uniqueId": "28a62434-c7d5-46d5-800c-5cdb347d7103",
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
                                  "name": "criteria",
                                  "type": "dropdown",
                                  "value": "and"
                                },
                                {
                                  "name": "containerB",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "dd998eaf-2bc5-4f54-b264-fd0ab2c6dabe",
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
                                              "uniqueId": "9d564465-45e5-4b9c-a621-94a577b89deb",
                                              "type": "variableGetValue",
                                              "inputs": [
                                                {
                                                  "name": "default",
                                                  "type": "none",
                                                  "items": [
                                                    {
                                                      "name": "name",
                                                      "type": "dropdown",
                                                      "value": "c2Top"
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
                                              "uniqueId": "28a62434-c7d5-46d5-800c-5cdb347d7103",
                                              "type": "mathValue",
                                              "inputs": [
                                                {
                                                  "name": "default",
                                                  "type": "none",
                                                  "items": [
                                                    {
                                                      "name": "value",
                                                      "type": "numeric",
                                                      "value": 9
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
                          ]
                        }
                      },
                      {
                        "name": "then",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "a18ebc7f-ad42-43b0-9395-4bd1620bb129",
                          "type": "textDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "text1"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "text"
                                }
                              ],
                              "block": {
                                "uniqueId": "2e5df2a9-f2eb-4997-8b90-ee9411a1e836",
                                "type": "textValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "textbox",
                                        "value": "Tebrikler hipotezini şimdi doğru kurabilirsin. Anlayacağın gibi cisimlerin yere düşmesinin nedeni dünyanın manyetik alanı değil ayrı bir kuvet olan yerçekimi kuvvetidir. Çünkü manyetik kuvvet buradaki cisimlerimiziden sadece demire etki eder."
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
                        "name": "else",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "92daf75c-0af8-4654-9055-5cfe25d04cbc",
                          "type": "textDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "text1"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "text"
                                }
                              ],
                              "block": {
                                "uniqueId": "2e5df2a9-f2eb-4997-8b90-ee9411a1e836",
                                "type": "textValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "textbox",
                                        "value": "Lütfen deneyleri dikkatle tekrarlayınız."
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "flowBlock": {
                            "uniqueId": "74e00916-3b70-4561-b007-f18d6dc50f2c",
                            "type": "variableSetValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "durum"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "e8ec8234-a744-4edd-801f-552da1fcd26d",
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
                            ],
                            "flowBlock": {
                              "uniqueId": "516260d1-adeb-48db-924b-011b335701e4",
                              "type": "variableSetValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [
                                    {
                                      "name": "name",
                                      "type": "dropdown",
                                      "value": "c1Vals"
                                    }
                                  ],
                                  "block": {
                                    "uniqueId": "e8ec8234-a744-4edd-801f-552da1fcd26d",
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
                              ],
                              "flowBlock": {
                                "uniqueId": "93b90f5e-5cad-4a74-8766-22dfaf1f8cf6",
                                "type": "variableSetValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "pin",
                                    "items": [
                                      {
                                        "name": "name",
                                        "type": "dropdown",
                                        "value": "c1Top"
                                      }
                                    ],
                                    "block": {
                                      "uniqueId": "e8ec8234-a744-4edd-801f-552da1fcd26d",
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
                                ],
                                "flowBlock": {
                                  "uniqueId": "756af65d-91f0-4cb0-b118-801530915d19",
                                  "type": "variableSetValue",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "pin",
                                      "items": [
                                        {
                                          "name": "name",
                                          "type": "dropdown",
                                          "value": "c2Vals"
                                        }
                                      ],
                                      "block": {
                                        "uniqueId": "e8ec8234-a744-4edd-801f-552da1fcd26d",
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
                                  ],
                                  "flowBlock": {
                                    "uniqueId": "ac8825c2-b751-4ea8-a97c-6168e4cf353a",
                                    "type": "variableSetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "pin",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "c2Top"
                                          }
                                        ],
                                        "block": {
                                          "uniqueId": "e8ec8234-a744-4edd-801f-552da1fcd26d",
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
                                    ],
                                    "flowBlock": {
                                      "uniqueId": "eca25319-7957-4fd0-968a-79ff9e14188c",
                                      "type": "variableSetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "pin",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "rw"
                                            }
                                          ],
                                          "block": {
                                            "uniqueId": "e8ec8234-a744-4edd-801f-552da1fcd26d",
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
                                      ],
                                      "flowBlock": {
                                        "uniqueId": "6ff80e7f-d9f6-45e1-9ef1-755a50d36efe",
                                        "type": "procedureCall",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "name",
                                                "type": "dropdown",
                                                "value": "tablo"
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
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "uniqueId": "9c1a2de0-c108-46ea-be60-6fdfa66e2ed4",
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
                    "uniqueId": "e2575fbd-f871-4e1f-8386-20e619ddbdce",
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
                          "uniqueId": "bf3b5290-e794-44dc-8ef7-03b0fb9f5469",
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
                                    "uniqueId": "98a005a5-3133-4d68-be6b-5104817fbad0",
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
                                    "uniqueId": "9302fcf3-fa0d-468a-9d7a-e32a4b82b1aa",
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
                      },
                      {
                        "name": "then",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "de817b85-758e-462e-a78e-0f6e5bae7e61",
                          "type": "sebitFrameworkRestartHide",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": []
                            }
                          ],
                          "flowBlock": {
                            "uniqueId": "045e904b-99b7-4ad2-851c-6136a72291da",
                            "type": "sebitFrameworkFeedbackHide",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [],
                                "block": {
                                  "uniqueId": "85684edf-b923-4e29-b8a4-6082c5d6fb3e",
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
                            ],
                            "flowBlock": {
                              "uniqueId": "bf37dae6-7429-4329-ba3c-370b1cf48e33",
                              "type": "sebitFrameworkHypothesisShow",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [],
                                  "block": {
                                    "uniqueId": "9b3840e2-8b2f-4712-bc97-be1e898a3a87",
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
                              ],
                              "flowBlock": {
                                "uniqueId": "59fa4ed5-1a90-486c-b9ca-bfe581c17388",
                                "type": "procedureCall",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "name",
                                        "type": "dropdown",
                                        "value": "tablo"
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
                  }
                }
              ]
            },
            {
              "uniqueId": "49c926bb-bacf-46c9-9a6a-67ded0b3808d",
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
                      "value": "tablo"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "5ed8e9c4-9401-44ab-8b60-06ac1f6758d5",
                    "type": "tableDesignObjectClear",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "table1"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "c564c605-3df1-48e5-bb33-65319fdf96a5",
                      "type": "tableDesignObjectAddRow",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "none",
                          "items": [
                            {
                              "name": "id",
                              "type": "dropdown",
                              "value": "table1"
                            }
                          ]
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "bd79cd65-e863-4fc8-b364-13373012afd8",
                        "type": "tableDesignObjectAddRow",
                        "inputs": [
                          {
                            "name": "default",
                            "type": "none",
                            "items": [
                              {
                                "name": "id",
                                "type": "dropdown",
                                "value": "table1"
                              }
                            ]
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "38f19aed-f597-45eb-ac2b-1628432665c6",
                          "type": "tableDesignObjectAddRow",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "table1"
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
              "uniqueId": "ec64dd42-f648-4647-a9fd-088836620a4a",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "durum"
                    }
                  ],
                  "block": {
                    "uniqueId": "a2510209-93e4-4318-9d20-83217f9653b7",
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
              "uniqueId": "7eca207a-b51c-463c-a938-03f5d6eb9783",
              "type": "sebitFrameworkOnHypothesisChangedEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": []
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "193108cc-560c-48ee-b11a-4c3a8dc58a1b",
                    "type": "controlIfThenElse",
                    "inputs": [
                      {
                        "name": "if",
                        "type": "pin",
                        "items": [],
                        "block": {
                          "uniqueId": "62316050-eb63-4499-8973-c09f614cfe06",
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
                                    "uniqueId": "9d564465-45e5-4b9c-a621-94a577b89deb",
                                    "type": "variableGetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "dropDownName"
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
                                    "uniqueId": "9bb18107-b217-45b8-b81d-d8643b905ed6",
                                    "type": "textValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "textbox",
                                            "value": "combo1"
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
                          "uniqueId": "35b0a64a-03ca-48c7-8266-d8b44255b6cb",
                          "type": "variableSetValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "durum"
                                }
                              ],
                              "block": {
                                "uniqueId": "5aa3d2f5-b1dc-4031-b7be-c803f8f096fe",
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
                          ],
                          "flowBlock": {
                            "uniqueId": "6d6adc22-7e7e-415b-908d-b0c959ba9854",
                            "type": "variableSetValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "c1Vals"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "0114b5c0-1e23-47cd-9951-0b34606747a1",
                                  "type": "mathToNumeric",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "pin",
                                      "items": [],
                                      "block": {
                                        "uniqueId": "417d8428-79a9-46a5-a8ad-3ea74e9c7079",
                                        "type": "variableGetValue",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "name",
                                                "type": "dropdown",
                                                "value": "dropDownValue"
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
                              "uniqueId": "c877e0e9-4680-41d3-b310-d333d3aa8c34",
                              "type": "textDesignObjectSetProperty",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "text1"
                                    },
                                    {
                                      "name": "propertyName",
                                      "type": "dropdown",
                                      "value": "text"
                                    }
                                  ],
                                  "block": {
                                    "uniqueId": "8b54b61e-c6b9-461a-a52b-eb2d90f1f5b4",
                                    "type": "textValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "textbox",
                                            "value": "Olası farklı durumları seçiniz ve ekleye basarak tabloya ekleyiniz"
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
                      },
                      {
                        "name": "else",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "f80dbcd8-3da6-4d31-baa8-34364a74bc4d",
                          "type": "variableSetValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "durum"
                                }
                              ],
                              "block": {
                                "uniqueId": "5aa3d2f5-b1dc-4031-b7be-c803f8f096fe",
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
                          ],
                          "flowBlock": {
                            "uniqueId": "6d6adc22-7e7e-415b-908d-b0c959ba9854",
                            "type": "variableSetValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "c2Vals"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "0114b5c0-1e23-47cd-9951-0b34606747a1",
                                  "type": "mathToNumeric",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "pin",
                                      "items": [],
                                      "block": {
                                        "uniqueId": "417d8428-79a9-46a5-a8ad-3ea74e9c7079",
                                        "type": "variableGetValue",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "name",
                                                "type": "dropdown",
                                                "value": "dropDownValue"
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
                              "uniqueId": "c877e0e9-4680-41d3-b310-d333d3aa8c34",
                              "type": "textDesignObjectSetProperty",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "text1"
                                    },
                                    {
                                      "name": "propertyName",
                                      "type": "dropdown",
                                      "value": "text"
                                    }
                                  ],
                                  "block": {
                                    "uniqueId": "8b54b61e-c6b9-461a-a52b-eb2d90f1f5b4",
                                    "type": "textValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "textbox",
                                            "value": "Olası farklı durumları seçiniz ve ekleye basarak tabloya ekleyiniz"
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
                  }
                }
              ]
            },
            {
              "uniqueId": "7b981c4d-03ee-4f5c-bba6-6e42f2295162",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "rw"
                    }
                  ],
                  "block": {
                    "uniqueId": "a2510209-93e4-4318-9d20-83217f9653b7",
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
              "uniqueId": "808abe18-5f6d-432e-b49e-e5ea3a99863f",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "c2Top"
                    }
                  ],
                  "block": {
                    "uniqueId": "a2510209-93e4-4318-9d20-83217f9653b7",
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
              "uniqueId": "e7fd1b1b-0b0a-4dab-a95a-1295cccd9dc3",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "c1Vals"
                    }
                  ],
                  "block": {
                    "uniqueId": "a2510209-93e4-4318-9d20-83217f9653b7",
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
              "uniqueId": "f5e92c29-cc87-4521-ab7e-0deddff31d76",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "c1Top"
                    }
                  ],
                  "block": {
                    "uniqueId": "a2510209-93e4-4318-9d20-83217f9653b7",
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
              "uniqueId": "714e627a-2ee5-443d-9699-ff6f40d0e029",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "c2Vals"
                    }
                  ],
                  "block": {
                    "uniqueId": "a2510209-93e4-4318-9d20-83217f9653b7",
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
      ]
    }
  ]
};
