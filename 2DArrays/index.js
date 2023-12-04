 
 const marix = [[1,2,3,10],
                [4,5,6],
                [7,9]];

// matrix[0][0] = 'x';
// matrix[0][1] = 'O';
// matrix[0][2] = 'x';

// matrix[1][0] = 'O';
// matrix[1][1] = 'x';
// matrix[1][2] = 'O';

// matrix[2][0] = 'x';
// matrix[2][1] = 'O';
// matrix[2][2] = 'x';

for(let row of marix){
    const rowString = row.join(' ');
    console.log(rowString);
}