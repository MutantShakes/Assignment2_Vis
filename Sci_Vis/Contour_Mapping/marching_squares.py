# sea_data = open("./sea_dataset_14_Jan_2021.txt", "r")
# print(sea_data.readline())

import numpy as np
import matplotlib.pyplot as plt

def getData():
    # data = np.array([[2, 2, 2, 2, 2],
    #                  [2, 1, 1, 1, 2],
    #                  [2, 1, 0, 1, 2], 
    #                  [2, 1, 1, 1, 2],
    #                  [2, 2, 2, 2, 2]])
    
    data = np.array([[2, 2, 2, 2, 2],
                     [2, 1, 1, 3, 2],
                     [2, 1, 3, 3, 3], 
                     [2, 3, 3, 3, 3],
                     [2, 2, 3, 3, 2]])
    return data

def binarizeData(data, val) :
    binarizedData = data.copy()
    rows, columns = np.shape(binarizedData)

    for i in range (0, rows):
        for j in range (0, columns):
            if(data[i, j] > val):
                binarizedData[i, j] = 1
            else:
                binarizedData[i, j] = 0
    
    return binarizedData

def getCaseMatrix(binarizedData) :
    rows, columns = np.shape(binarizedData)
    newRows = rows - 1
    newColumns = columns - 1
    caseMatrix = np.zeros((newRows, newColumns), dtype=int)

    for i in range (0, newRows):
        for j in range (0, newColumns):
            data8 = binarizedData[i, j]
            data4 = binarizedData[i, j+1]
            data1 = binarizedData[i+1, j]
            data2 = binarizedData[i+1, j+1]
            
            currentCase = 0
            if(data8 == 1):
                currentCase += 8
            if(data4 == 1):
                currentCase += 4
            if(data1 == 1):
                currentCase += 1
            if(data2 == 1):
                currentCase += 2

            caseMatrix[i, j] = currentCase

    return caseMatrix

def getLookUpTable() :
    table = np.zeros((16, 4), dtype=int)

    table[0] = np.array([0, 0, 0, 0])
    table[1] = np.array([1, 4, 0, 0])
    table[2] = np.array([1, 2, 0, 0])
    table[3] = np.array([2, 4, 0, 0])
    table[4] = np.array([2, 3, 0, 0])
    table[5] = np.array([1, 2, 3, 4]) #ambiguous case
    table[6] = np.array([1, 3, 0, 0])
    table[7] = np.array([3, 4, 0, 0])
    table[8] = np.array([3, 4, 0, 0])
    table[9] = np.array([1, 3, 0, 0])
    table[10] = np.array([1, 4, 2, 3]) #ambiguous case
    table[11] = np.array([2, 3, 0, 0])
    table[12] = np.array([2, 4, 0, 0])
    table[13] = np.array([1, 2, 0, 0])
    table[14] = np.array([1, 4, 0, 0])
    table[15] = np.array([0, 0, 0, 0])

    return table

def marchingSquares(caseMatrix) :
    rows, columns = np.shape(caseMatrix)
    lookUpTable = getLookUpTable()
    for i in range (0, rows) :
        for j in range (0, columns) :
            currentCase = caseMatrix[i, j]
            currentLine = lookUpTable[currentCase]

            k = rows-1-i
            if(currentLine[0] != 0) :
                x1 = []
                y1 = []
                if(currentLine[0] == 4) :
                    x1.append(2*j+1)
                    y1.append(2*k+2)
                elif(currentLine[0] == 1) :
                    x1.append(2*j+2)
                    y1.append(2*k+1)
                elif(currentLine[0] == 3) :
                    x1.append(2*j+2)
                    y1.append(2*k+3)
                elif(currentLine[0] == 2) :
                    x1.append(2*j+3)
                    y1.append(2*k+2)

                if(currentLine[1] == 4) :
                    x1.append(2*j+1)
                    y1.append(2*k+2)
                elif(currentLine[1] == 1) :
                    x1.append(2*j+2)
                    y1.append(2*k+1)
                elif(currentLine[1] == 3) :
                    x1.append(2*j+2)
                    y1.append(2*k+3)
                elif(currentLine[1] == 2) :
                    x1.append(2*j+3)
                    y1.append(2*k+2)

                plt.plot(x1, y1, c="black")
                # plt.show()
            if(currentLine[2] != 0) :
                x1 = []
                y1 = []
                if(currentLine[2] == 4) :
                    x1.append(2*j+1)
                    y1.append(2*k+2)
                elif(currentLine[2] == 1) :
                    x1.append(2*j+2)
                    y1.append(2*k+1)
                elif(currentLine[2] == 3) :
                    x1.append(2*j+2)
                    y1.append(2*k+3)
                elif(currentLine[2] == 2) :
                    x1.append(2*j+3)
                    y1.append(2*k+2)

                if(currentLine[3] == 4) :
                    x1.append(2*j+1)
                    y1.append(2*k+2)
                elif(currentLine[3] == 1) :
                    x1.append(2*j+2)
                    y1.append(2*k+1)
                elif(currentLine[3] == 3) :
                    x1.append(2*j+2)
                    y1.append(2*k+3)
                elif(currentLine[3] == 2) :
                    x1.append(2*j+3)
                    y1.append(2*k+2)

                plt.plot(x1, y1 , c="black")
                # plt.show()

    plt.show()

def contourMapping() :
    data = getData()
    print(data)

    binarizedData = binarizeData(data, 2)
    print(binarizedData)

    caseMatrix = getCaseMatrix(binarizedData)
    print(caseMatrix)

    


marchingSquares(caseMatrix)

