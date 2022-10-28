var vFabrikaPlayerData_Projem = {
  "isLooping": false,
  "isAutoPlay": true,
  "stageWidth": 762,
  "stageHeight": 463,
  "frameCount": 6,
  "framesPerSecond": 24.0,
  "omitConsoleMessages": false,
  "layers": [
    {
      "uniqueId": "3aa2e229-1fab-4146-baa3-4c3d60cf688e",
      "name": "Katman 2",
      "underscoredName": "Katman_2",
      "keyframes": [
        {
          "uniqueId": "a0212d3f-a8fb-4fd2-805a-580c317269d5",
          "frameIndex": 0,
          "frameCount": 5,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "button1",
              "uniqueId": "e828b403-a9a4-4960-8776-54af4226459d",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 635,
                "y": 414
              },
              "size": {
                "width": 100,
                "height": 25
              },
              "x": 635,
              "y": 414,
              "width": 100,
              "height": 25,
              "groupName": "button",
              "groupOrder": 1,
              "pivotX": 50,
              "pivotY": 12,
              "alpha": 100,
              "visible": true,
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
              "value": "Sonraki"
            }
          ],
          "blocks": [
            {
              "uniqueId": "8fa5520d-81c5-48ab-afb6-1f8fd48b9a7b",
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
                      "value": "mousedown"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "3b8ee906-3ff2-40a7-91fe-6567ec66763b",
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
                              "uniqueId": "234e8d35-0fac-4747-a72e-ed5319785dee",
                              "type": "variableGetValue",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "name",
                                      "type": "dropdown",
                                      "value": "cFrame"
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
                      "uniqueId": "c6f93204-3f70-4309-91b7-8cee310a32df",
                      "type": "variableSetValue",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "cFrame"
                            }
                          ],
                          "block": {
                            "uniqueId": "69b0b979-0154-4e22-8c5c-8a7ab3c89a15",
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
                                    "name": "1b926129-3627-4dfd-a7e7-03800e39949d",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "4bc51544-f3c8-4306-8fe7-807416289c2a",
                                      "type": "variableGetValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "name",
                                              "type": "dropdown",
                                              "value": "cFrame"
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "mutatorItemUniqueId": "1b926129-3627-4dfd-a7e7-03800e39949d",
                                    "mutatorName": "container"
                                  },
                                  {
                                    "name": "ce720681-d00c-424a-8e22-63d215628519",
                                    "type": "container",
                                    "block": {
                                      "uniqueId": "f78642d0-d77a-491c-9d5e-c84da1552991",
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
                                    "mutatorItemUniqueId": "ce720681-d00c-424a-8e22-63d215628519",
                                    "mutatorName": "container"
                                  }
                                ]
                              }
                            ],
                            "mutatorItems": [
                              {
                                "uniqueId": "1b926129-3627-4dfd-a7e7-03800e39949d",
                                "name": "operation",
                                "allowOnlyOnce": false,
                                "defaultValue": "+"
                              },
                              {
                                "uniqueId": "ce720681-d00c-424a-8e22-63d215628519",
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
              "uniqueId": "fa54401f-2786-489b-89fb-16e2f78d3ed0",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "cFrame"
                    }
                  ],
                  "block": {
                    "uniqueId": "8e8580a1-1a24-4a0f-a369-922c3730cedb",
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
        },
        {
          "uniqueId": "3ef0308c-494c-4844-a3b1-3c978c61e1bb",
          "frameIndex": 5,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "triggerDesignObject",
              "type": "trigger",
              "id": "trigger2",
              "uniqueId": "5f812f8b-ea0c-45cc-b7f2-60e96627ebc8",
              "enabled": false,
              "tag": "",
              "location": {
                "x": 842,
                "y": 226
              },
              "x": 842,
              "y": 226,
              "width": 48,
              "height": 48,
              "groupName": "trigger",
              "groupOrder": 2
            },
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "button4",
              "uniqueId": "a5e6725e-4611-4005-88e9-8bdc4180a1af",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 635,
                "y": 414
              },
              "size": {
                "width": 100,
                "height": 25
              },
              "x": 635,
              "y": 414,
              "width": 100,
              "height": 25,
              "groupName": "button",
              "groupOrder": 4,
              "pivotX": 50,
              "pivotY": 12,
              "alpha": 100,
              "visible": true,
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
              "value": "Sonraki"
            }
          ],
          "blocks": [
            {
              "uniqueId": "a3a9207b-a9c7-465e-89b6-a08e71858370",
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
                      "value": "mousedown"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "3b8ee906-3ff2-40a7-91fe-6567ec66763b",
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
                              "uniqueId": "f78642d0-d77a-491c-9d5e-c84da1552991",
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
                      "uniqueId": "c6f93204-3f70-4309-91b7-8cee310a32df",
                      "type": "variableSetValue",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "name",
                              "type": "dropdown",
                              "value": "cFrame"
                            }
                          ],
                          "block": {
                            "uniqueId": "f874eeb8-b258-491d-977b-c2add4169763",
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
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "uniqueId": "62d910cf-6aeb-449c-8af6-67716c60fbc7",
      "name": "Katman 1",
      "underscoredName": "Katman_1",
      "keyframes": [
        {
          "uniqueId": "d9a2d8fb-f43a-4b7b-86c0-b44c7261e74e",
          "frameIndex": 0,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageButtonDesignObject",
              "type": "imageButton",
              "id": "imageButton1",
              "uniqueId": "28783cef-ad41-485d-9335-d1e1dd2a3c99",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 239,
                "y": 38
              },
              "x": 239,
              "y": 38,
              "width": 150,
              "height": 40,
              "groupName": "imageButton",
              "groupOrder": 1,
              "pivotX": 50,
              "pivotY": 12,
              "alpha": 100,
              "visible": true,
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
              "statesImageUrl": "img/btn2.jpg",
              "stateBehavior": "four_state",
              "interactionBehavior": "toggle",
              "selected": false,
              "imageName": "btn2",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "statesImageWidth": 150,
              "statesImageHeight": 122,
              "text": "Durdur",
              "textAlign": "middle_center",
              "textMargin": 50,
              "stateSize": {
                "width": 150,
                "height": 40
              }
            },
            {
              "typeName": "videoDesignObject",
              "type": "video",
              "id": "video1",
              "uniqueId": "84b95223-e4f7-4f4a-a7cd-612745f3d2c6",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 13,
                "y": 96
              },
              "size": {
                "width": 596,
                "height": 346
              },
              "x": 13,
              "y": 96,
              "width": 596,
              "height": 346,
              "groupName": "video",
              "groupOrder": 1,
              "pivotX": 18,
              "pivotY": 20,
              "alpha": 100,
              "visible": true,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 18,
                "y": 20
              },
              "currentPivotLocation": {
                "x": 18,
                "y": 20
              },
              "isVisual": true,
              "videoUrl": "/Deli Kadri Hıçkırırsa - Şeker Hoca ( 720 X 1280 )",
              "posterUrl": "resources/img/sprite.jpg",
              "hasControls": true,
              "isAutoPlay": false,
              "isLooped": false
            }
          ],
          "blocks": [
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
              "uniqueId": "7bf57b2b-40e6-4e0a-b97f-bd4ae5492eb4",
              "type": "imageButtonDesignObjectOnMouseEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "imageButton1"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "mousedown"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "5547c5ba-7670-42ea-a144-506ea8ab1c59",
                    "type": "controlIfThen",
                    "inputs": [
                      {
                        "name": "if",
                        "type": "pin",
                        "items": [],
                        "block": {
                          "uniqueId": "7c0fc6e8-78a0-405a-a269-9b84677de163",
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
                        "name": "then",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "25721b41-ab20-452f-af03-7956976558b6",
                          "type": "videoDesignObjectPlayerControl",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "video1"
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
                      {
                        "name": "else0",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "9f756f3c-f1db-43ca-9aa4-a814ca3ea853",
                          "type": "videoDesignObjectPlayerControl",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "video1"
                                },
                                {
                                  "name": "command",
                                  "type": "dropdown",
                                  "value": "stop"
                                }
                              ]
                            }
                          ]
                        },
                        "mutatorItemUniqueId": "19efac30-b1a2-4ab4-85e4-17aff5f6ddd9",
                        "mutatorName": "else"
                      }
                    ],
                    "mutatorItems": [
                      {
                        "uniqueId": "19efac30-b1a2-4ab4-85e4-17aff5f6ddd9",
                        "name": "else",
                        "allowOnlyOnce": true,
                        "defaultValue": ""
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "5f53f0cb-c0cf-461e-a196-96badaf2a25c",
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
                            "uniqueId": "0b9c9f20-827b-48f2-99cd-7c64787039e5",
                            "type": "logicInverse",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [],
                                "block": {
                                  "uniqueId": "75102ee0-52d6-4526-98a2-2123fb745f93",
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
              "uniqueId": "110d7def-c0a0-4e76-b06a-e13c56853112",
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
                    "uniqueId": "ed86d4f0-f3e0-4c35-90e9-4dc4a0ea789d",
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
        },
        {
          "uniqueId": "90d35858-929b-4b0e-af16-ca638cf5f5d5",
          "frameIndex": 1,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image1",
              "uniqueId": "2900b386-28bc-4fcb-ac0e-69adfeadff6a",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 41,
                "y": 25
              },
              "size": {
                "width": 130,
                "height": 127
              },
              "x": 41,
              "y": 25,
              "width": 130,
              "height": 127,
              "groupName": "image",
              "groupOrder": 1,
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
                "x": 400,
                "y": 190
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/sprite.jpg",
              "imageName": "sprite",
              "imageExtension": ".jpg",
              "imagePath": "resources/img/",
              "spriteWidth": 130,
              "spriteHeight": 127,
              "highlightWidth": 97,
              "highlightHeight": 95,
              "isSprite": true,
              "spriteFrameCount": 15,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 24.0,
              "autoAnimate": true,
              "isSpriteLooping": true,
              "keepAspectRatio": true,
              "resizingType": "clip",
              "imageFormat": "bitmap"
            },
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image2",
              "uniqueId": "d5bfa86b-bb93-4c6f-9758-7829d230929c",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 214,
                "y": 40
              },
              "size": {
                "width": 512,
                "height": 256
              },
              "x": 214,
              "y": 40,
              "width": 512,
              "height": 256,
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
                "x": 400,
                "y": 190
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 50
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/sprites-cat-running.png",
              "imageName": "sprites-cat-running",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 512,
              "spriteHeight": 256,
              "highlightWidth": 384,
              "highlightHeight": 192,
              "isSprite": true,
              "spriteFrameCount": 15,
              "spriteSequencerType": "none",
              "spriteInitialFrameIndex": 1,
              "spriteFramePerSecond": 48.0,
              "autoAnimate": true,
              "isSpriteLooping": true,
              "keepAspectRatio": true,
              "resizingType": "clip",
              "imageFormat": "bitmap"
            }
          ],
          "blocks": []
        },
        {
          "uniqueId": "e4612d34-409f-4ea6-8b14-6e6ed01e3c7d",
          "frameIndex": 2,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "tableDesignObject",
              "type": "table",
              "id": "table1",
              "uniqueId": "fdea83b3-b2d0-4c7a-afe7-a63ce082b808",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 36,
                "y": 35
              },
              "size": {
                "width": 491,
                "height": 318
              },
              "x": 36,
              "y": 35,
              "width": 491,
              "height": 318,
              "groupName": "table",
              "groupOrder": 1,
              "pivotX": 246,
              "pivotY": 159,
              "alpha": 100,
              "visible": true,
              "useHandCursor": false,
              "className": "",
              "pivotLocation": {
                "x": 246,
                "y": 159
              },
              "currentPivotLocation": {
                "x": 246,
                "y": 159
              },
              "isVisual": true,
              "columns": [
                {
                  "name": "No",
                  "headerText": "Öğrenci No",
                  "width": 100,
                  "widthMode": "fixed",
                  "headerTextAlign": "center"
                },
                {
                  "name": "Ad",
                  "headerText": "Öğrenci Adı",
                  "width": 100,
                  "widthMode": "fixed",
                  "headerTextAlign": "left"
                },
                {
                  "name": "Not",
                  "headerText": "Yazılı Notu",
                  "width": 100,
                  "widthMode": "fixed",
                  "headerTextAlign": "left"
                }
              ],
              "autoWidth": true,
              "autoHeight": true,
              "showHeader": true,
              "showFooter": false,
              "tableStyle": "default",
              "tableEvenRowStyle": "default",
              "tableOddRowStyle": "default",
              "tableRowStyle": "default",
              "tableHeaderRowStyle": "default",
              "tableFooterRowStyle": "default",
              "tableColumnStyle": "default",
              "scrollMode": "vertical",
              "rowHeight": 15,
              "headerRowHeight": 15,
              "footerRowHeight": 15,
              "selectable": false,
              "selectionMode": "row_selection"
            },
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "button2",
              "uniqueId": "dcbad880-d493-4b04-b92e-9ffb335f6aba",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 569,
                "y": 51
              },
              "size": {
                "width": 100,
                "height": 25
              },
              "x": 569,
              "y": 51,
              "width": 100,
              "height": 25,
              "groupName": "button",
              "groupOrder": 2,
              "pivotX": 50,
              "pivotY": 12,
              "alpha": 100,
              "visible": true,
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
              "value": "Ekle"
            },
            {
              "typeName": "sliderDesignObject",
              "type": "slider",
              "id": "slider1",
              "uniqueId": "04c860c0-28fd-455c-ad0f-25711816071a",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 575,
                "y": 105
              },
              "size": {
                "width": 150,
                "height": 30
              },
              "x": 575,
              "y": 105,
              "width": 150,
              "height": 30,
              "groupName": "slider",
              "groupOrder": 1,
              "pivotX": 75,
              "pivotY": 12,
              "alpha": 100,
              "visible": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 75,
                "y": 15
              },
              "currentPivotLocation": {
                "x": 75,
                "y": 12
              },
              "isVisual": true,
              "minimumValue": 0.0,
              "maximumValue": 3.0,
              "value": 0.0,
              "stepSize": 1.0
            },
            {
              "typeName": "sliderDesignObject",
              "type": "slider",
              "id": "slider2",
              "uniqueId": "263dd362-f0c0-4fc4-a222-0ee9800d4b9a",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 575,
                "y": 155
              },
              "size": {
                "width": 150,
                "height": 30
              },
              "x": 575,
              "y": 155,
              "width": 150,
              "height": 30,
              "groupName": "slider",
              "groupOrder": 2,
              "pivotX": 75,
              "pivotY": 12,
              "alpha": 100,
              "visible": true,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 75,
                "y": 15
              },
              "currentPivotLocation": {
                "x": 75,
                "y": 12
              },
              "isVisual": true,
              "minimumValue": 0.0,
              "maximumValue": 3.0,
              "value": 0.0,
              "stepSize": 1.0
            },
            {
              "typeName": "inputDropDownListDesignObject",
              "type": "inputDropDownList",
              "id": "dropDown1",
              "uniqueId": "a0454438-afd2-4517-a2cb-b08cdf01141c",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 575,
                "y": 218
              },
              "size": {
                "width": 149,
                "height": 25
              },
              "x": 575,
              "y": 218,
              "width": 149,
              "height": 25,
              "groupName": "dropDown",
              "groupOrder": 1,
              "pivotX": 75,
              "pivotY": 12,
              "alpha": 100,
              "visible": true,
              "className": "",
              "pivotLocation": {
                "x": 75,
                "y": 12
              },
              "currentPivotLocation": {
                "x": 75,
                "y": 12
              },
              "isVisual": true,
              "dropDownHeight": 0,
              "items": [
                {
                  "text": "Ahmet",
                  "value": "Ahmet",
                  "arguments": ""
                },
                {
                  "text": "Yusuf",
                  "value": "Yusuf",
                  "arguments": ""
                },
                {
                  "text": "Rabia",
                  "value": "Rabia",
                  "arguments": ""
                }
              ]
            }
          ],
          "blocks": [
            {
              "uniqueId": "aaff0960-8f80-48f2-b580-67139d606b0e",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "tableVal"
                    }
                  ],
                  "block": {
                    "uniqueId": "62ad9e8a-ee3f-4d7c-ad42-1b6f6fd390ca",
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
              "uniqueId": "1cd53362-71c2-49e0-aa8e-a7bfed00255e",
              "type": "sliderDesignObjectOnValueChangeEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "slider1"
                    },
                    {
                      "name": "eventName",
                      "type": "dropdown",
                      "value": "valueChanged"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "0d5ae127-e45f-4060-815c-2809dc783e74",
                    "type": "variableSetValue",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "tableVal"
                          }
                        ],
                        "block": {
                          "uniqueId": "ebd7ea0d-e592-47f6-be9f-84a12774f37d",
                          "type": "variableGetValue",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "none",
                              "items": [
                                {
                                  "name": "name",
                                  "type": "dropdown",
                                  "value": "value"
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
              "uniqueId": "b1ea1da5-6b8f-411d-ab86-ad30660a3413",
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
                    "uniqueId": "75c966d4-65ff-43e4-9838-dbf0dd3ca50a",
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
                      "uniqueId": "1d7ad05a-8d99-43e0-9366-86db6825dc9a",
                      "type": "tableDesignObjectSetColumnByName",
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
                              "name": "columnName",
                              "type": "container",
                              "block": {
                                "uniqueId": "50513ff4-6de6-46fc-b13d-5da0c25c5a3c",
                                "type": "textValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "textbox",
                                        "value": "No"
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          ],
                          "block": {
                            "uniqueId": "cd505551-ac38-4f07-95db-4115c92f462c",
                            "type": "variableGetValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "tableVal"
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "1d7ad05a-8d99-43e0-9366-86db6825dc9a",
                        "type": "tableDesignObjectSetColumnByName",
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
                                "name": "columnName",
                                "type": "container",
                                "block": {
                                  "uniqueId": "50513ff4-6de6-46fc-b13d-5da0c25c5a3c",
                                  "type": "textValue",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "none",
                                      "items": [
                                        {
                                          "name": "value",
                                          "type": "textbox",
                                          "value": "Not"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ],
                            "block": {
                              "uniqueId": "41a1cc3e-b53a-4de4-b7e7-74b80a10a690",
                              "type": "sliderDesignObjectGetProperty",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "slider2"
                                    },
                                    {
                                      "name": "propertyName",
                                      "type": "dropdown",
                                      "value": "value"
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ],
                        "flowBlock": {
                          "uniqueId": "1d7ad05a-8d99-43e0-9366-86db6825dc9a",
                          "type": "tableDesignObjectSetColumnByName",
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
                                  "name": "columnName",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "50513ff4-6de6-46fc-b13d-5da0c25c5a3c",
                                    "type": "textValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "textbox",
                                            "value": "Ad"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                }
                              ],
                              "block": {
                                "uniqueId": "1d7c529f-ab9c-459a-af50-13d79052f719",
                                "type": "inputDropDownListDesignObjectGetProperty",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "id",
                                        "type": "dropdown",
                                        "value": "dropDown1"
                                      },
                                      {
                                        "name": "propertyName",
                                        "type": "dropdown",
                                        "value": "value"
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
          "uniqueId": "d1054f41-8d03-4db1-95b5-842b5496c1ee",
          "frameIndex": 3,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "canvasDesignObject",
              "type": "canvas",
              "id": "canvas1",
              "uniqueId": "b785da93-fd6a-4408-bf8d-4dd5880ac2f0",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 26,
                "y": 12
              },
              "size": {
                "width": 561,
                "height": 435
              },
              "x": 26,
              "y": 12,
              "width": 561,
              "height": 435,
              "groupName": "canvas",
              "groupOrder": 1,
              "pivotX": 281,
              "pivotY": 218,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 281,
                "y": 218
              },
              "currentPivotLocation": {
                "x": 281,
                "y": 218
              },
              "isVisual": true
            },
            {
              "typeName": "inputButtonDesignObject",
              "type": "inputButton",
              "id": "button3",
              "uniqueId": "d5b671fa-56c9-467a-90fe-b8e863cef502",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 626,
                "y": 28
              },
              "size": {
                "width": 100,
                "height": 25
              },
              "x": 626,
              "y": 28,
              "width": 100,
              "height": 25,
              "groupName": "button",
              "groupOrder": 3,
              "pivotX": 50,
              "pivotY": 12,
              "alpha": 100,
              "visible": true,
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
              "value": "Üçgen Çiz"
            },
            {
              "typeName": "highlightDesignObject",
              "type": "highlight",
              "id": "highlight1",
              "uniqueId": "8cbb5d86-ff02-4463-91b2-3a75e27de86d",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 623,
                "y": 13
              },
              "size": {
                "width": 100,
                "height": 63
              },
              "x": 623,
              "y": 13,
              "width": 100,
              "height": 63,
              "groupName": "highlight",
              "groupOrder": 1,
              "pivotX": 50,
              "pivotY": 32,
              "alpha": 100,
              "visible": true,
              "className": "",
              "pivotLocation": {
                "x": 50,
                "y": 32
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 32
              },
              "isVisual": true,
              "highlightOrientation": "all",
              "highlightColor": "black",
              "highlightType": "rectangle_button",
              "customFramePerSecond": 0,
              "customImageCount": 0,
              "customImageUrl": ""
            },
            {
              "typeName": "delayDesignObject",
              "type": "delay",
              "id": "delay1",
              "uniqueId": "a84601f8-9329-4e7c-85a5-9fccc626d2a3",
              "enabled": false,
              "tag": "",
              "location": {
                "x": 780,
                "y": 138
              },
              "x": 780,
              "y": 138,
              "width": 48,
              "height": 48,
              "groupName": "delay",
              "groupOrder": 1,
              "interval": 1000,
              "isAutoStart": false
            },
            {
              "typeName": "timerDesignObject",
              "type": "timer",
              "id": "timer1",
              "uniqueId": "518773e9-3d1b-4b31-a536-5e7e678bf642",
              "enabled": false,
              "tag": "",
              "location": {
                "x": 783,
                "y": 206
              },
              "x": 783,
              "y": 206,
              "width": 48,
              "height": 48,
              "groupName": "timer",
              "groupOrder": 1,
              "interval": 1000,
              "isAutoStart": false
            },
            {
              "typeName": "contentDesignObject",
              "type": "content",
              "id": "content1",
              "uniqueId": "eacb9c7a-1aa4-4c52-8827-931677efb5b1",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 620,
                "y": 96
              },
              "size": {
                "width": 100,
                "height": 42
              },
              "x": 620,
              "y": 96,
              "width": 100,
              "height": 42,
              "groupName": "content",
              "groupOrder": 1,
              "pivotX": 50,
              "pivotY": 21,
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
                "y": 21
              },
              "currentPivotLocation": {
                "x": 50,
                "y": 21
              },
              "isVisual": true,
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 75,
              "highlightHeight": 31
            },
            {
              "typeName": "triggerDesignObject",
              "type": "trigger",
              "id": "trigger1",
              "uniqueId": "a7878500-3675-4cdf-85d5-4f414e043956",
              "enabled": false,
              "tag": "",
              "location": {
                "x": 786,
                "y": 275
              },
              "x": 786,
              "y": 275,
              "width": 48,
              "height": 48,
              "groupName": "trigger",
              "groupOrder": 1
            }
          ],
          "blocks": [
            {
              "uniqueId": "c03f9557-d0fd-4f28-8142-2db7c69a3d46",
              "type": "onTimelineEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "comment",
                      "type": "button"
                    },
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
                    "uniqueId": "73fc53fd-f583-477f-9b41-bda59c5f0aef",
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
                          "uniqueId": "cc7f1b00-5fce-4b91-86dd-f0e70cec424a",
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
                                    "uniqueId": "4d8bc4a1-a028-4f2f-9d96-4dc86d137913",
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
                                    "uniqueId": "69841211-22b8-4adf-8926-3b9e97af8d53",
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
                          "uniqueId": "86c63c77-cc45-4c7a-b243-dd49cc825fa8",
                          "type": "alert",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [],
                              "block": {
                                "uniqueId": "7211bb84-fd4a-4b2d-a95d-c7d6f838c3d8",
                                "type": "mathValue",
                                "inputs": [
                                  {
                                    "name": "default",
                                    "type": "none",
                                    "items": [
                                      {
                                        "name": "value",
                                        "type": "numeric",
                                        "value": 1346
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
              "uniqueId": "16c8ad57-171d-4df4-9a43-58fe97a50d9d",
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
                    "uniqueId": "fda4b131-8845-48ef-8eb9-19f81ce3e44e",
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
                    ],
                    "flowBlock": {
                      "uniqueId": "cad412c6-5fe0-41e9-96e2-f0268008a46a",
                      "type": "canvasDesignObjectContext",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "none",
                          "items": [
                            {
                              "name": "id",
                              "type": "dropdown",
                              "value": "canvas1"
                            }
                          ]
                        },
                        {
                          "name": "block",
                          "type": "container",
                          "items": [],
                          "flowBlock": {
                            "uniqueId": "95bd6607-ba53-48be-9984-4742d7681489",
                            "type": "canvasDesignObjectMoveTo",
                            "inputs": [
                              {
                                "name": "x",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "comment",
                                    "type": "button"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "bbcd8b94-c9ce-41bb-920d-eb09c51e6b1f",
                                  "type": "mathValue",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "none",
                                      "items": [
                                        {
                                          "name": "value",
                                          "type": "numeric",
                                          "value": 30
                                        }
                                      ]
                                    }
                                  ]
                                }
                              },
                              {
                                "name": "y",
                                "type": "pin",
                                "items": [],
                                "block": {
                                  "uniqueId": "bbcd8b94-c9ce-41bb-920d-eb09c51e6b1f",
                                  "type": "mathValue",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "none",
                                      "items": [
                                        {
                                          "name": "value",
                                          "type": "numeric",
                                          "value": 10
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ],
                            "flowBlock": {
                              "uniqueId": "bc4edb16-c6f7-4003-b187-a2de9de7d430",
                              "type": "canvasDesignObjectLineTo",
                              "inputs": [
                                {
                                  "name": "x",
                                  "type": "pin",
                                  "items": [],
                                  "block": {
                                    "uniqueId": "39fe5936-d55f-4233-8986-022ebe28efb7",
                                    "type": "mathValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "numeric",
                                            "value": 30
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                },
                                {
                                  "name": "y",
                                  "type": "pin",
                                  "items": [],
                                  "block": {
                                    "uniqueId": "39fe5936-d55f-4233-8986-022ebe28efb7",
                                    "type": "mathValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "numeric",
                                            "value": 260
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                }
                              ],
                              "flowBlock": {
                                "uniqueId": "0339e999-4448-4364-abc0-0f1c9d11e970",
                                "type": "canvasDesignObjectLineTo",
                                "inputs": [
                                  {
                                    "name": "x",
                                    "type": "pin",
                                    "items": [],
                                    "block": {
                                      "uniqueId": "39fe5936-d55f-4233-8986-022ebe28efb7",
                                      "type": "mathValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "value",
                                              "type": "numeric",
                                              "value": 280
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "y",
                                    "type": "pin",
                                    "items": [],
                                    "block": {
                                      "uniqueId": "39fe5936-d55f-4233-8986-022ebe28efb7",
                                      "type": "mathValue",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": [
                                            {
                                              "name": "value",
                                              "type": "numeric",
                                              "value": 260
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  }
                                ],
                                "flowBlock": {
                                  "uniqueId": "bff9d7fc-5bfe-465a-984b-48e85320c1e1",
                                  "type": "canvasDesignObjectLineTo",
                                  "inputs": [
                                    {
                                      "name": "x",
                                      "type": "pin",
                                      "items": [],
                                      "block": {
                                        "uniqueId": "39fe5936-d55f-4233-8986-022ebe28efb7",
                                        "type": "mathValue",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "value",
                                                "type": "numeric",
                                                "value": 30
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "name": "y",
                                      "type": "pin",
                                      "items": [],
                                      "block": {
                                        "uniqueId": "39fe5936-d55f-4233-8986-022ebe28efb7",
                                        "type": "mathValue",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "value",
                                                "type": "numeric",
                                                "value": 10
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    }
                                  ],
                                  "flowBlock": {
                                    "uniqueId": "07dc10ef-dd13-4ac7-8596-f5d2b638e6a2",
                                    "type": "canvasDesignObjectFillStyle",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "pin",
                                        "items": [],
                                        "block": {
                                          "uniqueId": "576f4f99-519d-4526-ba93-ebf781ab542b",
                                          "type": "textValue",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "none",
                                              "items": [
                                                {
                                                  "name": "value",
                                                  "type": "textbox",
                                                  "value": "#ff0000"
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    "flowBlock": {
                                      "uniqueId": "8b98729c-d82b-4f17-a421-e872f049a846",
                                      "type": "canvasDesignObjectFill",
                                      "inputs": [
                                        {
                                          "name": "default",
                                          "type": "none",
                                          "items": []
                                        }
                                      ],
                                      "flowBlock": {
                                        "uniqueId": "0ff2b413-62a1-4c9b-ad31-74bad61a34d7",
                                        "type": "canvasDesignObjectLineWidth",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "pin",
                                            "items": [],
                                            "block": {
                                              "uniqueId": "ebe31f74-8a25-40e0-ad35-80d958b45d9f",
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
                                        ],
                                        "flowBlock": {
                                          "uniqueId": "1a60f873-65b8-447d-b569-4fbe6b961cfc",
                                          "type": "canvasDesignObjectStrokeStyle",
                                          "inputs": [
                                            {
                                              "name": "default",
                                              "type": "pin",
                                              "items": [],
                                              "block": {
                                                "uniqueId": "c984b84f-9200-4936-8a3f-73ae78d58ca7",
                                                "type": "textValue",
                                                "inputs": [
                                                  {
                                                    "name": "default",
                                                    "type": "none",
                                                    "items": [
                                                      {
                                                        "name": "value",
                                                        "type": "textbox",
                                                        "value": "#000000"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            }
                                          ],
                                          "flowBlock": {
                                            "uniqueId": "0588c31f-d8bf-4c4c-87a1-6f2eaab5f31e",
                                            "type": "canvasDesignObjectStroke",
                                            "inputs": [
                                              {
                                                "name": "default",
                                                "type": "none",
                                                "items": []
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
                        }
                      ]
                    }
                  }
                }
              ]
            },
            {
              "uniqueId": "2cad3a1b-0bb3-4058-9b37-ef61e7b9588f",
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
                    "uniqueId": "b861bcf3-6e12-4686-95af-dbf5b46de913",
                    "type": "highlightDesignObjectShow",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "highlight1"
                          }
                        ]
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "5c496b53-676f-4933-95a5-450bab3ab8c0",
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
              ]
            },
            {
              "uniqueId": "97d8c405-ab5e-44a0-99a9-ea34e8aba26c",
              "type": "timerDesignObjectEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "comment",
                      "type": "button"
                    },
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
                    "uniqueId": "68cc8521-9fe2-411c-86d4-15f7c3d5fe64",
                    "type": "variableSetValue",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "pin",
                        "items": [
                          {
                            "name": "name",
                            "type": "dropdown",
                            "value": "time"
                          }
                        ],
                        "block": {
                          "uniqueId": "49ef2b6d-fd0f-45e9-b711-b0fc2da10a1d",
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
                                  "name": "b944256e-abd7-4133-a304-6a9711b04cdf",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "9e57cfff-0675-4fc0-90df-7130a0886b4d",
                                    "type": "variableGetValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "name",
                                            "type": "dropdown",
                                            "value": "time"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "mutatorItemUniqueId": "b944256e-abd7-4133-a304-6a9711b04cdf",
                                  "mutatorName": "container"
                                },
                                {
                                  "name": "5296d41c-4be6-49c8-a827-508c7309ed43",
                                  "type": "container",
                                  "block": {
                                    "uniqueId": "b2e1562e-2296-4065-b2e7-5ccf010031b5",
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
                                  "mutatorItemUniqueId": "5296d41c-4be6-49c8-a827-508c7309ed43",
                                  "mutatorName": "container"
                                }
                              ]
                            }
                          ],
                          "mutatorItems": [
                            {
                              "uniqueId": "b944256e-abd7-4133-a304-6a9711b04cdf",
                              "name": "operation",
                              "allowOnlyOnce": false,
                              "defaultValue": "+"
                            },
                            {
                              "uniqueId": "5296d41c-4be6-49c8-a827-508c7309ed43",
                              "name": "operation",
                              "allowOnlyOnce": false,
                              "defaultValue": "+"
                            }
                          ]
                        }
                      }
                    ],
                    "flowBlock": {
                      "uniqueId": "3a628f11-a30c-4323-9742-7cffbb4edc51",
                      "type": "contentDesignObjectSetProperty",
                      "inputs": [
                        {
                          "name": "default",
                          "type": "pin",
                          "items": [
                            {
                              "name": "id",
                              "type": "dropdown",
                              "value": "content1"
                            },
                            {
                              "name": "propertyName",
                              "type": "dropdown",
                              "value": "text"
                            }
                          ],
                          "block": {
                            "uniqueId": "e6798b39-8304-4df4-b9a4-682c9c20e6dd",
                            "type": "variableGetValue",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "none",
                                "items": [
                                  {
                                    "name": "name",
                                    "type": "dropdown",
                                    "value": "time"
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ],
                      "flowBlock": {
                        "uniqueId": "e9c4849e-95bb-4940-9fbf-7b013da4469a",
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
                              "uniqueId": "4c5ea35c-b025-43ab-bffe-935c7cce1ed7",
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
                                        "uniqueId": "d5cf8f82-6934-4dd6-8933-7bb3b6c7191c",
                                        "type": "variableGetValue",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "name",
                                                "type": "dropdown",
                                                "value": "time"
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
                                        "uniqueId": "9767a797-f7d7-4fa7-a724-8480675819c9",
                                        "type": "mathValue",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "value",
                                                "type": "numeric",
                                                "value": 10
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
                              "uniqueId": "e3ac3cc5-a5fb-4186-8ebd-01a7ca0cfe4f",
                              "type": "highlightDesignObjectHide",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "none",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "highlight1"
                                    }
                                  ]
                                }
                              ],
                              "flowBlock": {
                                "uniqueId": "5c496b53-676f-4933-95a5-450bab3ab8c0",
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
                                ],
                                "flowBlock": {
                                  "uniqueId": "44905ee0-272c-474c-af44-795cda3bc3dd",
                                  "type": "alert",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "pin",
                                      "items": [],
                                      "block": {
                                        "uniqueId": "0a2561a4-971d-416a-acf0-da8ef03408d6",
                                        "type": "textValue",
                                        "inputs": [
                                          {
                                            "name": "default",
                                            "type": "none",
                                            "items": [
                                              {
                                                "name": "value",
                                                "type": "textbox",
                                                "value": "zamanlayıcı sonu"
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
                  }
                }
              ]
            },
            {
              "uniqueId": "45b0418e-c595-44fa-86e1-589d8f21b17f",
              "type": "variableInitializeGlobal",
              "inputs": [
                {
                  "name": "default",
                  "type": "pin",
                  "items": [
                    {
                      "name": "name",
                      "type": "textbox",
                      "value": "time"
                    }
                  ],
                  "block": {
                    "uniqueId": "4892ddda-76ac-4cae-bf6b-dfebaf861b76",
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
        },
        {
          "uniqueId": "70edc311-6c50-4da8-8e1b-4675cbc05cb9",
          "frameIndex": 4,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "parallaxScrollDesignObject",
              "type": "parallaxScroll",
              "id": "parallaxScroll1",
              "uniqueId": "a1d5edc5-37d4-4a81-9692-8799170a0e64",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 0,
                "y": 0
              },
              "size": {
                "width": 762,
                "height": 463
              },
              "x": 0,
              "y": 0,
              "width": 762,
              "height": 463,
              "groupName": "parallaxScroll",
              "groupOrder": 1,
              "pivotX": 100,
              "pivotY": 100,
              "alpha": 100,
              "visible": true,
              "useHandCursor": false,
              "className": "",
              "pivotLocation": {
                "x": 381,
                "y": 232
              },
              "currentPivotLocation": {
                "x": 100,
                "y": 100
              },
              "isVisual": true,
              "scrollImages": [
                {
                  "imageUrl": "img/agac4.png",
                  "scrollConstant": 3.0,
                  "name": "agac4.png",
                  "imageName": "agac4",
                  "imageExtension": ".png",
                  "imagePath": "resources/img/",
                  "width": 762,
                  "height": 463
                },
                {
                  "imageUrl": "img/daglar.png",
                  "scrollConstant": 2.0,
                  "name": "daglar.png",
                  "imageName": "daglar",
                  "imageExtension": ".png",
                  "imagePath": "resources/img/",
                  "width": 893,
                  "height": 588
                },
                {
                  "imageUrl": "img/bulut.png",
                  "scrollConstant": 1.0,
                  "name": "bulut.png",
                  "imageName": "bulut",
                  "imageExtension": ".png",
                  "imagePath": "resources/img/",
                  "width": 500,
                  "height": 169
                },
                {
                  "imageUrl": "img/gok.jpg",
                  "scrollConstant": 0.0,
                  "name": "gok.jpg",
                  "imageName": "gok",
                  "imageExtension": ".jpg",
                  "imagePath": "resources/img/",
                  "width": 900,
                  "height": 600
                }
              ],
              "scrollSpeed": 100,
              "scrollStep": 10,
              "scrollDirection": "left",
              "autoPlay": true
            },
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image3",
              "uniqueId": "2b2d6132-f36b-48a3-821a-d24bacf9b725",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 18,
                "y": 366
              },
              "size": {
                "width": 221,
                "height": 95
              },
              "x": 18,
              "y": 366,
              "width": 221,
              "height": 95,
              "groupName": "image",
              "groupOrder": 3,
              "pivotX": 111,
              "pivotY": 47,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 111,
                "y": 47
              },
              "currentPivotLocation": {
                "x": 111,
                "y": 47
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/DogalSayilarlaislemler25.png",
              "imageName": "DogalSayilarlaislemler25",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 508,
              "spriteHeight": 207,
              "highlightWidth": 165,
              "highlightHeight": 71,
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
              "typeName": "triggerDesignObject",
              "type": "trigger",
              "id": "trigger3",
              "uniqueId": "19929aa9-4a64-4121-a6dd-a9a489f01c59",
              "enabled": false,
              "tag": "",
              "location": {
                "x": -104,
                "y": 61
              },
              "x": -104,
              "y": 61,
              "width": 48,
              "height": 48,
              "groupName": "trigger",
              "groupOrder": 3
            }
          ],
          "blocks": [
            {
              "uniqueId": "9477fbff-2011-48b0-824e-917fbde16c9d",
              "type": "triggerDesignObjectOnInvokeEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "trigger3"
                    },
                    {
                      "name": "eventName",
                      "type": "hidden",
                      "value": "invoke"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "36d5a5b4-0808-4741-a47b-fd39113a94f4",
                    "type": "highlightDesignObjectHide",
                    "inputs": [
                      {
                        "name": "default",
                        "type": "none",
                        "items": [
                          {
                            "name": "id",
                            "type": "dropdown",
                            "value": "highlight1"
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
          "uniqueId": "1c288421-6340-41ce-a809-aae138d00d95",
          "frameIndex": 5,
          "frameCount": 1,
          "rotationDirection": "clockwise",
          "motionTween": false,
          "easingFunction": "linear",
          "designObjects": [
            {
              "typeName": "textDesignObject",
              "type": "text",
              "id": "text1",
              "uniqueId": "49c78064-f91e-4bef-820c-1bda9fdf5095",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 23,
                "y": 18
              },
              "size": {
                "width": 392,
                "height": 64
              },
              "x": 23,
              "y": 18,
              "width": 392,
              "height": 64,
              "groupName": "text",
              "groupOrder": 1,
              "pivotX": 197,
              "pivotY": 32,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 197,
                "y": 32
              },
              "currentPivotLocation": {
                "x": 197,
                "y": 32
              },
              "isVisual": true,
              "highlightBehavior": false,
              "clippingBehavior": "clip",
              "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs95E872D0{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs5C65F215{color:#000000;background-color:transparent;font-family:Calibri;font-size:32px;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs95E872D0\"><span class=\"cs5C65F215\">Buranın adı nedir?</span></p></body>\r\n</html>",
              "text": "Buranın adı nedir?",
              "highlightWidth": 294,
              "highlightHeight": 48
            },
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image4",
              "uniqueId": "81d29921-b24f-4af7-bd4f-c28cf7173538",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 26,
                "y": 137
              },
              "size": {
                "width": 554,
                "height": 281
              },
              "x": 26,
              "y": 137,
              "width": 554,
              "height": 281,
              "groupName": "image",
              "groupOrder": 4,
              "pivotX": 277,
              "pivotY": 140,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 277,
                "y": 140
              },
              "currentPivotLocation": {
                "x": 277,
                "y": 140
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/DogalSayilarlaislemler25.png",
              "imageName": "DogalSayilarlaislemler25",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 508,
              "spriteHeight": 207,
              "highlightWidth": 415,
              "highlightHeight": 210,
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
              "id": "content2",
              "uniqueId": "736ec94d-8d14-4538-b4d9-b1027b45ba83",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 99,
                "y": 21
              },
              "size": {
                "width": 638,
                "height": 412
              },
              "x": 99,
              "y": 21,
              "width": 638,
              "height": 412,
              "groupName": "content",
              "groupOrder": 2,
              "pivotX": 320,
              "pivotY": 206,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 320,
                "y": 206
              },
              "currentPivotLocation": {
                "x": 320,
                "y": 206
              },
              "isVisual": true,
              "designObjects": [
                {
                  "parentId": "content2",
                  "typeName": "contentDesignObject",
                  "type": "content",
                  "id": "CVB_CNT1",
                  "uniqueId": "23889770-d42f-41ce-a503-e861df78becb",
                  "enabled": true,
                  "tag": "",
                  "location": {
                    "x": 326,
                    "y": 199
                  },
                  "size": {
                    "width": 181,
                    "height": 46
                  },
                  "x": 326,
                  "y": 199,
                  "width": 181,
                  "height": 46,
                  "groupName": "CVB_CNT",
                  "groupOrder": 1,
                  "pivotX": 91,
                  "pivotY": 23,
                  "alpha": 100,
                  "visible": true,
                  "isDraggable": false,
                  "revertDragging": "true",
                  "isDroppable": true,
                  "useHandCursor": false,
                  "className": "",
                  "rotation": 0.0,
                  "pivotLocation": {
                    "x": 91,
                    "y": 23
                  },
                  "currentPivotLocation": {
                    "x": 91,
                    "y": 23
                  },
                  "styles": [
                    {
                      "name": "border-style",
                      "value": "solid"
                    },
                    {
                      "name": "border-width",
                      "value": "5px"
                    }
                  ],
                  "isVisual": true,
                  "text": "",
                  "clippingBehavior": "overflow",
                  "highlightBehavior": true,
                  "highlightWidth": 25,
                  "highlightHeight": 25
                },
                {
                  "parentId": "content2",
                  "typeName": "textDesignObject",
                  "type": "text",
                  "id": "SRK1",
                  "uniqueId": "e673d665-2ce5-44ca-aeed-097dca6e809b",
                  "enabled": true,
                  "tag": "",
                  "location": {
                    "x": 452,
                    "y": 11
                  },
                  "size": {
                    "width": 178,
                    "height": 42
                  },
                  "x": 452,
                  "y": 11,
                  "width": 178,
                  "height": 42,
                  "groupName": "SRK",
                  "groupOrder": 1,
                  "pivotX": 90,
                  "pivotY": 22,
                  "alpha": 100,
                  "visible": true,
                  "isDraggable": true,
                  "revertDragging": "always",
                  "isDroppable": false,
                  "useHandCursor": false,
                  "className": "",
                  "rotation": 0.0,
                  "pivotLocation": {
                    "x": 90,
                    "y": 22
                  },
                  "currentPivotLocation": {
                    "x": 90,
                    "y": 22
                  },
                  "styles": [
                    {
                      "name": "background-color",
                      "value": "lightblue"
                    },
                    {
                      "name": "border-style",
                      "value": "solid"
                    },
                    {
                      "name": "border-width",
                      "value": "5px"
                    }
                  ],
                  "isVisual": true,
                  "highlightBehavior": false,
                  "clippingBehavior": "clip",
                  "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs336D6A9C{color:#000000;background-color:transparent;font-family:Calibri;font-size:24px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs336D6A9C\">JANT</span></p></body>\r\n</html>",
                  "text": "JANT",
                  "highlightWidth": 133,
                  "highlightHeight": 31
                },
                {
                  "parentId": "content2",
                  "typeName": "textDesignObject",
                  "type": "text",
                  "id": "SRK5",
                  "uniqueId": "7aa104cf-3ee9-4c97-a352-12e268b22233",
                  "enabled": true,
                  "tag": "",
                  "location": {
                    "x": 452,
                    "y": 57
                  },
                  "size": {
                    "width": 178,
                    "height": 42
                  },
                  "x": 452,
                  "y": 57,
                  "width": 178,
                  "height": 42,
                  "groupName": "SRK",
                  "groupOrder": 5,
                  "pivotX": 90,
                  "pivotY": 22,
                  "alpha": 100,
                  "visible": true,
                  "isDraggable": true,
                  "revertDragging": "always",
                  "isDroppable": false,
                  "useHandCursor": false,
                  "className": "",
                  "rotation": 0.0,
                  "pivotLocation": {
                    "x": 90,
                    "y": 22
                  },
                  "currentPivotLocation": {
                    "x": 90,
                    "y": 22
                  },
                  "styles": [
                    {
                      "name": "background-color",
                      "value": "lightblue"
                    },
                    {
                      "name": "border-style",
                      "value": "solid"
                    },
                    {
                      "name": "border-width",
                      "value": "5px"
                    }
                  ],
                  "isVisual": true,
                  "highlightBehavior": false,
                  "clippingBehavior": "clip",
                  "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs336D6A9C{color:#000000;background-color:transparent;font-family:Calibri;font-size:24px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs336D6A9C\">TEKERLEK</span></p></body>\r\n</html>",
                  "text": "TEKERLEK",
                  "highlightWidth": 133,
                  "highlightHeight": 31
                },
                {
                  "parentId": "content2",
                  "typeName": "contentDesignObject",
                  "type": "content",
                  "id": "CVB_CNT2",
                  "uniqueId": "deeefbfc-5f47-4f62-a291-6e33e907db1f",
                  "enabled": true,
                  "tag": "",
                  "location": {
                    "x": 210,
                    "y": 81
                  },
                  "size": {
                    "width": 181,
                    "height": 46
                  },
                  "x": 210,
                  "y": 81,
                  "width": 181,
                  "height": 46,
                  "groupName": "CVB_CNT",
                  "groupOrder": 2,
                  "pivotX": 91,
                  "pivotY": 23,
                  "alpha": 100,
                  "visible": true,
                  "isDraggable": false,
                  "revertDragging": "true",
                  "isDroppable": true,
                  "useHandCursor": false,
                  "className": "",
                  "rotation": 0.0,
                  "pivotLocation": {
                    "x": 91,
                    "y": 23
                  },
                  "currentPivotLocation": {
                    "x": 91,
                    "y": 23
                  },
                  "styles": [
                    {
                      "name": "border-style",
                      "value": "solid"
                    },
                    {
                      "name": "border-width",
                      "value": "5px"
                    }
                  ],
                  "isVisual": true,
                  "text": "",
                  "clippingBehavior": "overflow",
                  "highlightBehavior": true,
                  "highlightWidth": 25,
                  "highlightHeight": 25
                },
                {
                  "parentId": "content2",
                  "typeName": "textDesignObject",
                  "type": "text",
                  "id": "SRK2",
                  "uniqueId": "088bb058-e82d-49c3-8ab9-20afae5e5f4c",
                  "enabled": true,
                  "tag": "",
                  "location": {
                    "x": 452,
                    "y": 104
                  },
                  "size": {
                    "width": 178,
                    "height": 42
                  },
                  "x": 452,
                  "y": 104,
                  "width": 178,
                  "height": 42,
                  "groupName": "SRK",
                  "groupOrder": 2,
                  "pivotX": 90,
                  "pivotY": 22,
                  "alpha": 100,
                  "visible": true,
                  "isDraggable": true,
                  "revertDragging": "always",
                  "isDroppable": false,
                  "useHandCursor": false,
                  "className": "",
                  "rotation": 0.0,
                  "pivotLocation": {
                    "x": 90,
                    "y": 22
                  },
                  "currentPivotLocation": {
                    "x": 90,
                    "y": 22
                  },
                  "styles": [
                    {
                      "name": "background-color",
                      "value": "lightblue"
                    },
                    {
                      "name": "border-style",
                      "value": "solid"
                    },
                    {
                      "name": "border-width",
                      "value": "5px"
                    }
                  ],
                  "isVisual": true,
                  "highlightBehavior": false,
                  "clippingBehavior": "clip",
                  "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs336D6A9C{color:#000000;background-color:transparent;font-family:Calibri;font-size:24px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs336D6A9C\">DİREKSİYON</span></p></body>\r\n</html>",
                  "text": "DİREKSİYON",
                  "highlightWidth": 133,
                  "highlightHeight": 31
                },
                {
                  "parentId": "content2",
                  "typeName": "textDesignObject",
                  "type": "text",
                  "id": "SRK3",
                  "uniqueId": "3480b683-4d0a-4936-88e8-961751f9ff87",
                  "enabled": true,
                  "tag": "",
                  "location": {
                    "x": 452,
                    "y": 146
                  },
                  "size": {
                    "width": 178,
                    "height": 42
                  },
                  "x": 452,
                  "y": 146,
                  "width": 178,
                  "height": 42,
                  "groupName": "SRK",
                  "groupOrder": 3,
                  "pivotX": 90,
                  "pivotY": 22,
                  "alpha": 100,
                  "visible": true,
                  "isDraggable": true,
                  "revertDragging": "always",
                  "isDroppable": false,
                  "useHandCursor": false,
                  "className": "",
                  "rotation": 0.0,
                  "pivotLocation": {
                    "x": 90,
                    "y": 22
                  },
                  "currentPivotLocation": {
                    "x": 90,
                    "y": 22
                  },
                  "styles": [
                    {
                      "name": "background-color",
                      "value": "lightblue"
                    },
                    {
                      "name": "border-style",
                      "value": "solid"
                    },
                    {
                      "name": "border-width",
                      "value": "5px"
                    }
                  ],
                  "isVisual": true,
                  "highlightBehavior": false,
                  "clippingBehavior": "clip",
                  "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs336D6A9C{color:#000000;background-color:transparent;font-family:Calibri;font-size:24px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs336D6A9C\">KAPI</span></p></body>\r\n</html>",
                  "text": "KAPI",
                  "highlightWidth": 133,
                  "highlightHeight": 31
                },
                {
                  "parentId": "content2",
                  "typeName": "contentDesignObject",
                  "type": "content",
                  "id": "CVB_CNT3",
                  "uniqueId": "dd769131-3c24-4986-aea9-cd255ab2b761",
                  "enabled": true,
                  "tag": "",
                  "location": {
                    "x": 126,
                    "y": 294
                  },
                  "size": {
                    "width": 181,
                    "height": 46
                  },
                  "x": 126,
                  "y": 294,
                  "width": 181,
                  "height": 46,
                  "groupName": "CVB_CNT",
                  "groupOrder": 3,
                  "pivotX": 91,
                  "pivotY": 23,
                  "alpha": 100,
                  "visible": true,
                  "isDraggable": false,
                  "revertDragging": "true",
                  "isDroppable": true,
                  "useHandCursor": false,
                  "className": "",
                  "rotation": 0.0,
                  "pivotLocation": {
                    "x": 91,
                    "y": 23
                  },
                  "currentPivotLocation": {
                    "x": 91,
                    "y": 23
                  },
                  "styles": [
                    {
                      "name": "border-style",
                      "value": "solid"
                    },
                    {
                      "name": "border-width",
                      "value": "5px"
                    }
                  ],
                  "isVisual": true,
                  "text": "",
                  "clippingBehavior": "overflow",
                  "highlightBehavior": true,
                  "highlightWidth": 25,
                  "highlightHeight": 25
                },
                {
                  "parentId": "content2",
                  "typeName": "textDesignObject",
                  "type": "text",
                  "id": "SRK4",
                  "uniqueId": "55a54a5c-7c56-44df-a12c-ba0bab96f616",
                  "enabled": true,
                  "tag": "",
                  "location": {
                    "x": 460,
                    "y": 258
                  },
                  "size": {
                    "width": 178,
                    "height": 42
                  },
                  "x": 460,
                  "y": 258,
                  "width": 178,
                  "height": 42,
                  "groupName": "SRK",
                  "groupOrder": 4,
                  "pivotX": 90,
                  "pivotY": 22,
                  "alpha": 100,
                  "visible": true,
                  "isDraggable": true,
                  "revertDragging": "always",
                  "isDroppable": false,
                  "useHandCursor": false,
                  "className": "",
                  "rotation": 0.0,
                  "pivotLocation": {
                    "x": 90,
                    "y": 22
                  },
                  "currentPivotLocation": {
                    "x": 90,
                    "y": 22
                  },
                  "styles": [
                    {
                      "name": "background-color",
                      "value": "lightblue"
                    },
                    {
                      "name": "border-style",
                      "value": "solid"
                    },
                    {
                      "name": "border-width",
                      "value": "5px"
                    }
                  ],
                  "isVisual": true,
                  "highlightBehavior": false,
                  "clippingBehavior": "clip",
                  "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs336D6A9C{color:#000000;background-color:transparent;font-family:Calibri;font-size:24px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs336D6A9C\">BAGAJ</span></p></body>\r\n</html>",
                  "text": "BAGAJ",
                  "highlightWidth": 133,
                  "highlightHeight": 31
                },
                {
                  "parentId": "content2",
                  "typeName": "contentDesignObject",
                  "type": "content",
                  "id": "CVB_CNT4",
                  "uniqueId": "88c85023-f9f1-473b-862a-981d4a90ec09",
                  "enabled": true,
                  "tag": "",
                  "location": {
                    "x": -59,
                    "y": 104
                  },
                  "size": {
                    "width": 181,
                    "height": 46
                  },
                  "x": -59,
                  "y": 104,
                  "width": 181,
                  "height": 46,
                  "groupName": "CVB_CNT",
                  "groupOrder": 4,
                  "pivotX": 91,
                  "pivotY": 23,
                  "alpha": 100,
                  "visible": true,
                  "isDraggable": false,
                  "revertDragging": "true",
                  "isDroppable": true,
                  "useHandCursor": false,
                  "className": "",
                  "rotation": 0.0,
                  "pivotLocation": {
                    "x": 91,
                    "y": 23
                  },
                  "currentPivotLocation": {
                    "x": 91,
                    "y": 23
                  },
                  "styles": [
                    {
                      "name": "border-style",
                      "value": "solid"
                    },
                    {
                      "name": "border-width",
                      "value": "5px"
                    }
                  ],
                  "isVisual": true,
                  "text": "",
                  "clippingBehavior": "overflow",
                  "highlightBehavior": true,
                  "highlightWidth": 25,
                  "highlightHeight": 25
                },
                {
                  "parentId": "content2",
                  "typeName": "contentDesignObject",
                  "type": "content",
                  "id": "CVB_CNT5",
                  "uniqueId": "824ad1aa-a02b-474c-8b71-d6efda7abd16",
                  "enabled": true,
                  "tag": "",
                  "location": {
                    "x": 111,
                    "y": 356
                  },
                  "size": {
                    "width": 181,
                    "height": 46
                  },
                  "x": 111,
                  "y": 356,
                  "width": 181,
                  "height": 46,
                  "groupName": "CVB_CNT",
                  "groupOrder": 5,
                  "pivotX": 91,
                  "pivotY": 23,
                  "alpha": 100,
                  "visible": true,
                  "isDraggable": false,
                  "revertDragging": "true",
                  "isDroppable": true,
                  "useHandCursor": false,
                  "className": "",
                  "rotation": 0.0,
                  "pivotLocation": {
                    "x": 91,
                    "y": 23
                  },
                  "currentPivotLocation": {
                    "x": 91,
                    "y": 23
                  },
                  "styles": [
                    {
                      "name": "border-style",
                      "value": "solid"
                    },
                    {
                      "name": "border-width",
                      "value": "5px"
                    }
                  ],
                  "isVisual": true,
                  "text": "",
                  "clippingBehavior": "overflow",
                  "highlightBehavior": true,
                  "highlightWidth": 25,
                  "highlightHeight": 25
                }
              ],
              "text": "",
              "clippingBehavior": "overflow",
              "highlightBehavior": false,
              "highlightWidth": 478,
              "highlightHeight": 309
            },
            {
              "typeName": "textDesignObject",
              "type": "text",
              "id": "TXT_CVB2",
              "uniqueId": "04d24382-4ece-41d1-92aa-1f93d5036550",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 311,
                "y": 99
              },
              "size": {
                "width": 178,
                "height": 42
              },
              "x": 311,
              "y": 99,
              "width": 178,
              "height": 42,
              "groupName": "TXT_CVB",
              "groupOrder": 2,
              "pivotX": 90,
              "pivotY": 22,
              "alpha": 100,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 90,
                "y": 22
              },
              "currentPivotLocation": {
                "x": 90,
                "y": 22
              },
              "styles": [
                {
                  "name": "background-color",
                  "value": "lightblue"
                },
                {
                  "name": "border-style",
                  "value": "solid"
                },
                {
                  "name": "border-width",
                  "value": "5px"
                }
              ],
              "isVisual": true,
              "highlightBehavior": false,
              "clippingBehavior": "clip",
              "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs336D6A9C{color:#000000;background-color:transparent;font-family:Calibri;font-size:24px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs336D6A9C\">DİREKSİYON</span></p></body>\r\n</html>",
              "text": "DİREKSİYON",
              "highlightWidth": 133,
              "highlightHeight": 31
            },
            {
              "typeName": "textDesignObject",
              "type": "text",
              "id": "TXT_CVB1",
              "uniqueId": "dc9a327d-4b60-479d-ac9b-1bfb4a8de702",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 428,
                "y": 220
              },
              "size": {
                "width": 178,
                "height": 42
              },
              "x": 428,
              "y": 220,
              "width": 178,
              "height": 42,
              "groupName": "TXT_CVB",
              "groupOrder": 1,
              "pivotX": 90,
              "pivotY": 22,
              "alpha": 100,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 90,
                "y": 22
              },
              "currentPivotLocation": {
                "x": 90,
                "y": 22
              },
              "styles": [
                {
                  "name": "background-color",
                  "value": "lightblue"
                },
                {
                  "name": "border-style",
                  "value": "solid"
                },
                {
                  "name": "border-width",
                  "value": "5px"
                }
              ],
              "isVisual": true,
              "highlightBehavior": false,
              "clippingBehavior": "clip",
              "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs336D6A9C{color:#000000;background-color:transparent;font-family:Calibri;font-size:24px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs336D6A9C\">JANT</span></p></body>\r\n</html>",
              "text": "JANT",
              "highlightWidth": 133,
              "highlightHeight": 31
            },
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image5",
              "uniqueId": "9d10c464-8fd6-4c54-b9b8-8fcb7449fa23",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 439,
                "y": 296
              },
              "size": {
                "width": 89,
                "height": 7
              },
              "x": 439,
              "y": 296,
              "width": 89,
              "height": 7,
              "groupName": "image",
              "groupOrder": 5,
              "pivotX": 44,
              "pivotY": 3,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 296.61,
              "pivotLocation": {
                "x": 44,
                "y": 3
              },
              "currentPivotLocation": {
                "x": 44,
                "y": 3
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/ok_orta.png",
              "imageName": "ok_orta",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 89,
              "spriteHeight": 7,
              "highlightWidth": 66,
              "highlightHeight": 5,
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
              "id": "image6",
              "uniqueId": "79e21fd9-20e6-4c98-902a-6ca8afc81ae9",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 338,
                "y": 184
              },
              "size": {
                "width": 89,
                "height": 7
              },
              "x": 338,
              "y": 184,
              "width": 89,
              "height": 7,
              "groupName": "image",
              "groupOrder": 6,
              "pivotX": 44,
              "pivotY": 3,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 296.61,
              "pivotLocation": {
                "x": 44,
                "y": 3
              },
              "currentPivotLocation": {
                "x": 44,
                "y": 3
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/ok_orta.png",
              "imageName": "ok_orta",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 89,
              "spriteHeight": 7,
              "highlightWidth": 66,
              "highlightHeight": 5,
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
              "id": "image7",
              "uniqueId": "4523b114-c03a-4167-aafa-d1c235e03971",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 274,
                "y": 295
              },
              "size": {
                "width": 54,
                "height": 10
              },
              "x": 274,
              "y": 295,
              "width": 54,
              "height": 10,
              "groupName": "image",
              "groupOrder": 7,
              "pivotX": 27,
              "pivotY": 3,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 43.75,
              "pivotLocation": {
                "x": 27,
                "y": 3
              },
              "currentPivotLocation": {
                "x": 27,
                "y": 3
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/ok_orta.png",
              "imageName": "ok_orta",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 89,
              "spriteHeight": 7,
              "highlightWidth": 40,
              "highlightHeight": 7,
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
              "id": "TXT_CVB3",
              "uniqueId": "c70e7dbc-87a8-40a5-aa52-4fa632b30c1d",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 228,
                "y": 317
              },
              "size": {
                "width": 178,
                "height": 42
              },
              "x": 228,
              "y": 317,
              "width": 178,
              "height": 42,
              "groupName": "TXT_CVB",
              "groupOrder": 3,
              "pivotX": 90,
              "pivotY": 22,
              "alpha": 100,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 90,
                "y": 22
              },
              "currentPivotLocation": {
                "x": 90,
                "y": 22
              },
              "styles": [
                {
                  "name": "background-color",
                  "value": "lightblue"
                },
                {
                  "name": "border-style",
                  "value": "solid"
                },
                {
                  "name": "border-width",
                  "value": "5px"
                }
              ],
              "isVisual": true,
              "highlightBehavior": false,
              "clippingBehavior": "clip",
              "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs336D6A9C{color:#000000;background-color:transparent;font-family:Calibri;font-size:24px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs336D6A9C\">KAPI</span></p></body>\r\n</html>",
              "text": "KAPI",
              "highlightWidth": 133,
              "highlightHeight": 31
            },
            {
              "typeName": "textDesignObject",
              "type": "text",
              "id": "TXT_CVB4",
              "uniqueId": "3438d0d0-215c-45f2-b18c-dc90ef9b79c2",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 42,
                "y": 127
              },
              "size": {
                "width": 178,
                "height": 42
              },
              "x": 42,
              "y": 127,
              "width": 178,
              "height": 42,
              "groupName": "TXT_CVB",
              "groupOrder": 4,
              "pivotX": 90,
              "pivotY": 22,
              "alpha": 100,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 90,
                "y": 22
              },
              "currentPivotLocation": {
                "x": 90,
                "y": 22
              },
              "styles": [
                {
                  "name": "background-color",
                  "value": "lightblue"
                },
                {
                  "name": "border-style",
                  "value": "solid"
                },
                {
                  "name": "border-width",
                  "value": "5px"
                }
              ],
              "isVisual": true,
              "highlightBehavior": false,
              "clippingBehavior": "clip",
              "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs336D6A9C{color:#000000;background-color:transparent;font-family:Calibri;font-size:24px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs336D6A9C\">BAGAJ</span></p></body>\r\n</html>",
              "text": "BAGAJ",
              "highlightWidth": 133,
              "highlightHeight": 31
            },
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image8",
              "uniqueId": "ed6b2cd2-e16a-4e95-ae9e-68ba53a702b9",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 29,
                "y": 211
              },
              "size": {
                "width": 83,
                "height": 10
              },
              "x": 29,
              "y": 211,
              "width": 83,
              "height": 10,
              "groupName": "image",
              "groupOrder": 8,
              "pivotX": 42,
              "pivotY": 3,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": -92.27,
              "pivotLocation": {
                "x": 42,
                "y": 3
              },
              "currentPivotLocation": {
                "x": 42,
                "y": 3
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/ok_orta.png",
              "imageName": "ok_orta",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 89,
              "spriteHeight": 7,
              "highlightWidth": 62,
              "highlightHeight": 7,
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
              "id": "TXT_CVB5",
              "uniqueId": "7891935d-946f-4205-8649-3d9975f46ee0",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 183,
                "y": 391
              },
              "size": {
                "width": 178,
                "height": 42
              },
              "x": 183,
              "y": 391,
              "width": 178,
              "height": 42,
              "groupName": "TXT_CVB",
              "groupOrder": 5,
              "pivotX": 90,
              "pivotY": 22,
              "alpha": 100,
              "visible": false,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 0.0,
              "pivotLocation": {
                "x": 90,
                "y": 22
              },
              "currentPivotLocation": {
                "x": 90,
                "y": 22
              },
              "styles": [
                {
                  "name": "background-color",
                  "value": "lightblue"
                },
                {
                  "name": "border-style",
                  "value": "solid"
                },
                {
                  "name": "border-width",
                  "value": "5px"
                }
              ],
              "isVisual": true,
              "highlightBehavior": false,
              "clippingBehavior": "clip",
              "htmlText": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2E86D3A6{text-align:center;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs336D6A9C{color:#000000;background-color:transparent;font-family:Calibri;font-size:24px;font-weight:bold;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2E86D3A6\"><span class=\"cs336D6A9C\">TEKERLEK</span></p></body>\r\n</html>",
              "text": "TEKERLEK",
              "highlightWidth": 133,
              "highlightHeight": 31
            },
            {
              "typeName": "imageDesignObject",
              "type": "image",
              "id": "image9",
              "uniqueId": "8cd5269c-ce8f-4536-8d17-027a6221bcbd",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 153,
                "y": 391
              },
              "size": {
                "width": 54,
                "height": 10
              },
              "x": 153,
              "y": 391,
              "width": 54,
              "height": 10,
              "groupName": "image",
              "groupOrder": 9,
              "pivotX": 27,
              "pivotY": 3,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 29.85,
              "pivotLocation": {
                "x": 27,
                "y": 3
              },
              "currentPivotLocation": {
                "x": 27,
                "y": 3
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/ok_orta.png",
              "imageName": "ok_orta",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 89,
              "spriteHeight": 7,
              "highlightWidth": 40,
              "highlightHeight": 7,
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
              "id": "image10",
              "uniqueId": "1f6cfc50-d372-4a65-b9c3-c8ad83fc0bb2",
              "enabled": true,
              "tag": "",
              "location": {
                "x": 384,
                "y": 395
              },
              "size": {
                "width": 54,
                "height": 10
              },
              "x": 384,
              "y": 395,
              "width": 54,
              "height": 10,
              "groupName": "image",
              "groupOrder": 10,
              "pivotX": 27,
              "pivotY": 3,
              "alpha": 100,
              "visible": true,
              "isDraggable": false,
              "revertDragging": "true",
              "isDroppable": false,
              "useHandCursor": false,
              "className": "",
              "rotation": 149.54,
              "pivotLocation": {
                "x": 27,
                "y": 3
              },
              "currentPivotLocation": {
                "x": 27,
                "y": 3
              },
              "isVisual": true,
              "highlightBehavior": false,
              "imageUrl": "img/ok_orta.png",
              "imageName": "ok_orta",
              "imageExtension": ".png",
              "imagePath": "resources/img/",
              "spriteWidth": 89,
              "spriteHeight": 7,
              "highlightWidth": 40,
              "highlightHeight": 7,
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
          "blocks": [
            {
              "uniqueId": "f3c0053e-f3f3-4976-875d-be1849cb512e",
              "type": "contentDesignObjectOnDragAndDropEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "CVB_CNT1"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "a57d9d37-158c-46f6-8c3a-9955ea9e9497",
                    "type": "controlIfThen",
                    "inputs": [
                      {
                        "name": "if",
                        "type": "pin",
                        "items": [],
                        "block": {
                          "uniqueId": "bd4be053-10fb-43f8-b133-05dd422f06c9",
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
                                    "uniqueId": "3fb57d3e-273c-434f-a71b-7d4998f7d854",
                                    "type": "contentDesignObjectGetDragObjectId",
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
                                    "uniqueId": "e724227f-0c8d-46ed-8cc9-1c77e236c111",
                                    "type": "textValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "textbox",
                                            "value": "SRK1"
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
                          "uniqueId": "1dca2c04-6554-44a4-adce-c88c56ef67c1",
                          "type": "textDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "SRK1"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                            "uniqueId": "6215e66b-94fa-4899-90f4-d1b5a907049b",
                            "type": "textDesignObjectSetProperty",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "id",
                                    "type": "dropdown",
                                    "value": "TXT_CVB1"
                                  },
                                  {
                                    "name": "propertyName",
                                    "type": "dropdown",
                                    "value": "visible"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                              "uniqueId": "d698d05c-30d8-4b46-92e0-32356422a231",
                              "type": "contentDesignObjectSetProperty",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "CVB_CNT1"
                                    },
                                    {
                                      "name": "propertyName",
                                      "type": "dropdown",
                                      "value": "visible"
                                    }
                                  ],
                                  "block": {
                                    "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                                "uniqueId": "451eb654-ff25-4991-b6d4-9816af820dbb",
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
                                  "uniqueId": "fa529f3b-19e7-4722-843b-0ae64d6b8081",
                                  "type": "sebitFrameworkScoComplete",
                                  "inputs": [
                                    {
                                      "name": "default",
                                      "type": "none",
                                      "items": []
                                    }
                                  ],
                                  "flowBlock": {
                                    "uniqueId": "7a028329-37dc-4e74-9153-64fb25f5f7e9",
                                    "type": "sebitFrameworkRestartShow",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": []
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      {
                        "name": "else0",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "dca2b3db-295a-4413-95fa-7790ca0b131a",
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
                        },
                        "mutatorItemUniqueId": "f849ac15-f64a-4f9f-84ad-b3d846d83956",
                        "mutatorName": "else"
                      }
                    ],
                    "mutatorItems": [
                      {
                        "uniqueId": "f849ac15-f64a-4f9f-84ad-b3d846d83956",
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
              "uniqueId": "29c33efb-b181-4f0e-8e70-ddec58c6c1ec",
              "type": "contentDesignObjectOnDragAndDropEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "CVB_CNT5"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "a57d9d37-158c-46f6-8c3a-9955ea9e9497",
                    "type": "controlIfThen",
                    "inputs": [
                      {
                        "name": "if",
                        "type": "pin",
                        "items": [],
                        "block": {
                          "uniqueId": "bd4be053-10fb-43f8-b133-05dd422f06c9",
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
                                    "uniqueId": "3fb57d3e-273c-434f-a71b-7d4998f7d854",
                                    "type": "contentDesignObjectGetDragObjectId",
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
                                    "uniqueId": "e724227f-0c8d-46ed-8cc9-1c77e236c111",
                                    "type": "textValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "textbox",
                                            "value": "SRK5"
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
                          "uniqueId": "1dca2c04-6554-44a4-adce-c88c56ef67c1",
                          "type": "textDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "SRK5"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                            "uniqueId": "6215e66b-94fa-4899-90f4-d1b5a907049b",
                            "type": "textDesignObjectSetProperty",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "id",
                                    "type": "dropdown",
                                    "value": "TXT_CVB5"
                                  },
                                  {
                                    "name": "propertyName",
                                    "type": "dropdown",
                                    "value": "visible"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                              "uniqueId": "d698d05c-30d8-4b46-92e0-32356422a231",
                              "type": "contentDesignObjectSetProperty",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "CVB_CNT5"
                                    },
                                    {
                                      "name": "propertyName",
                                      "type": "dropdown",
                                      "value": "visible"
                                    }
                                  ],
                                  "block": {
                                    "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                                "uniqueId": "451eb654-ff25-4991-b6d4-9816af820dbb",
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
                                ]
                              }
                            }
                          }
                        }
                      },
                      {
                        "name": "else0",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "dca2b3db-295a-4413-95fa-7790ca0b131a",
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
                        },
                        "mutatorItemUniqueId": "f849ac15-f64a-4f9f-84ad-b3d846d83956",
                        "mutatorName": "else"
                      }
                    ],
                    "mutatorItems": [
                      {
                        "uniqueId": "f849ac15-f64a-4f9f-84ad-b3d846d83956",
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
              "uniqueId": "40141cd3-7760-42b0-b55d-4b4a1a3488e5",
              "type": "contentDesignObjectOnDragAndDropEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "CVB_CNT4"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "a57d9d37-158c-46f6-8c3a-9955ea9e9497",
                    "type": "controlIfThen",
                    "inputs": [
                      {
                        "name": "if",
                        "type": "pin",
                        "items": [],
                        "block": {
                          "uniqueId": "bd4be053-10fb-43f8-b133-05dd422f06c9",
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
                                    "uniqueId": "3fb57d3e-273c-434f-a71b-7d4998f7d854",
                                    "type": "contentDesignObjectGetDragObjectId",
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
                                    "uniqueId": "e724227f-0c8d-46ed-8cc9-1c77e236c111",
                                    "type": "textValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "textbox",
                                            "value": "SRK4"
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
                          "uniqueId": "1dca2c04-6554-44a4-adce-c88c56ef67c1",
                          "type": "textDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "SRK4"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                            "uniqueId": "6215e66b-94fa-4899-90f4-d1b5a907049b",
                            "type": "textDesignObjectSetProperty",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "id",
                                    "type": "dropdown",
                                    "value": "TXT_CVB4"
                                  },
                                  {
                                    "name": "propertyName",
                                    "type": "dropdown",
                                    "value": "visible"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                              "uniqueId": "d698d05c-30d8-4b46-92e0-32356422a231",
                              "type": "contentDesignObjectSetProperty",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "CVB_CNT4"
                                    },
                                    {
                                      "name": "propertyName",
                                      "type": "dropdown",
                                      "value": "visible"
                                    }
                                  ],
                                  "block": {
                                    "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                                "uniqueId": "451eb654-ff25-4991-b6d4-9816af820dbb",
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
                                ]
                              }
                            }
                          }
                        }
                      },
                      {
                        "name": "else0",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "dca2b3db-295a-4413-95fa-7790ca0b131a",
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
                        },
                        "mutatorItemUniqueId": "f849ac15-f64a-4f9f-84ad-b3d846d83956",
                        "mutatorName": "else"
                      }
                    ],
                    "mutatorItems": [
                      {
                        "uniqueId": "f849ac15-f64a-4f9f-84ad-b3d846d83956",
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
              "uniqueId": "e65ef312-4211-4c25-877f-1a8d7e744f35",
              "type": "contentDesignObjectOnDragAndDropEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "CVB_CNT3"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "a57d9d37-158c-46f6-8c3a-9955ea9e9497",
                    "type": "controlIfThen",
                    "inputs": [
                      {
                        "name": "if",
                        "type": "pin",
                        "items": [],
                        "block": {
                          "uniqueId": "bd4be053-10fb-43f8-b133-05dd422f06c9",
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
                                    "uniqueId": "3fb57d3e-273c-434f-a71b-7d4998f7d854",
                                    "type": "contentDesignObjectGetDragObjectId",
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
                                    "uniqueId": "e724227f-0c8d-46ed-8cc9-1c77e236c111",
                                    "type": "textValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "textbox",
                                            "value": "SRK3"
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
                          "uniqueId": "1dca2c04-6554-44a4-adce-c88c56ef67c1",
                          "type": "textDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "SRK3"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                            "uniqueId": "6215e66b-94fa-4899-90f4-d1b5a907049b",
                            "type": "textDesignObjectSetProperty",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "id",
                                    "type": "dropdown",
                                    "value": "TXT_CVB3"
                                  },
                                  {
                                    "name": "propertyName",
                                    "type": "dropdown",
                                    "value": "visible"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                              "uniqueId": "d698d05c-30d8-4b46-92e0-32356422a231",
                              "type": "contentDesignObjectSetProperty",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "CVB_CNT3"
                                    },
                                    {
                                      "name": "propertyName",
                                      "type": "dropdown",
                                      "value": "visible"
                                    }
                                  ],
                                  "block": {
                                    "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                                "uniqueId": "451eb654-ff25-4991-b6d4-9816af820dbb",
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
                                ]
                              }
                            }
                          }
                        }
                      },
                      {
                        "name": "else0",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "dca2b3db-295a-4413-95fa-7790ca0b131a",
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
                        },
                        "mutatorItemUniqueId": "f849ac15-f64a-4f9f-84ad-b3d846d83956",
                        "mutatorName": "else"
                      }
                    ],
                    "mutatorItems": [
                      {
                        "uniqueId": "f849ac15-f64a-4f9f-84ad-b3d846d83956",
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
              "uniqueId": "e63c3971-31c0-4ee1-8af6-60d7b847e13f",
              "type": "contentDesignObjectOnDragAndDropEvent",
              "inputs": [
                {
                  "name": "default",
                  "type": "none",
                  "items": [
                    {
                      "name": "id",
                      "type": "dropdown",
                      "value": "CVB_CNT2"
                    }
                  ]
                },
                {
                  "name": "block",
                  "type": "container",
                  "items": [],
                  "flowBlock": {
                    "uniqueId": "a57d9d37-158c-46f6-8c3a-9955ea9e9497",
                    "type": "controlIfThen",
                    "inputs": [
                      {
                        "name": "if",
                        "type": "pin",
                        "items": [],
                        "block": {
                          "uniqueId": "bd4be053-10fb-43f8-b133-05dd422f06c9",
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
                                    "uniqueId": "3fb57d3e-273c-434f-a71b-7d4998f7d854",
                                    "type": "contentDesignObjectGetDragObjectId",
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
                                    "uniqueId": "e724227f-0c8d-46ed-8cc9-1c77e236c111",
                                    "type": "textValue",
                                    "inputs": [
                                      {
                                        "name": "default",
                                        "type": "none",
                                        "items": [
                                          {
                                            "name": "value",
                                            "type": "textbox",
                                            "value": "SRK2"
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
                          "uniqueId": "1dca2c04-6554-44a4-adce-c88c56ef67c1",
                          "type": "textDesignObjectSetProperty",
                          "inputs": [
                            {
                              "name": "default",
                              "type": "pin",
                              "items": [
                                {
                                  "name": "id",
                                  "type": "dropdown",
                                  "value": "SRK2"
                                },
                                {
                                  "name": "propertyName",
                                  "type": "dropdown",
                                  "value": "visible"
                                }
                              ],
                              "block": {
                                "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                            "uniqueId": "6215e66b-94fa-4899-90f4-d1b5a907049b",
                            "type": "textDesignObjectSetProperty",
                            "inputs": [
                              {
                                "name": "default",
                                "type": "pin",
                                "items": [
                                  {
                                    "name": "id",
                                    "type": "dropdown",
                                    "value": "TXT_CVB2"
                                  },
                                  {
                                    "name": "propertyName",
                                    "type": "dropdown",
                                    "value": "visible"
                                  }
                                ],
                                "block": {
                                  "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                              "uniqueId": "d698d05c-30d8-4b46-92e0-32356422a231",
                              "type": "contentDesignObjectSetProperty",
                              "inputs": [
                                {
                                  "name": "default",
                                  "type": "pin",
                                  "items": [
                                    {
                                      "name": "id",
                                      "type": "dropdown",
                                      "value": "CVB_CNT2"
                                    },
                                    {
                                      "name": "propertyName",
                                      "type": "dropdown",
                                      "value": "visible"
                                    }
                                  ],
                                  "block": {
                                    "uniqueId": "5e6d45e8-b7cb-4282-87e2-758a04087353",
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
                                "uniqueId": "451eb654-ff25-4991-b6d4-9816af820dbb",
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
                                ]
                              }
                            }
                          }
                        }
                      },
                      {
                        "name": "else0",
                        "type": "container",
                        "items": [],
                        "flowBlock": {
                          "uniqueId": "dca2b3db-295a-4413-95fa-7790ca0b131a",
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
                        },
                        "mutatorItemUniqueId": "f849ac15-f64a-4f9f-84ad-b3d846d83956",
                        "mutatorName": "else"
                      }
                    ],
                    "mutatorItems": [
                      {
                        "uniqueId": "f849ac15-f64a-4f9f-84ad-b3d846d83956",
                        "name": "else",
                        "allowOnlyOnce": true,
                        "defaultValue": ""
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
