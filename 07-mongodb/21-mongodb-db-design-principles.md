- Data is denormalized where it makes sense (we have multi-valued attributes, arrays with values / arrays with embedded documents)
    - this is so that we can minimize joins
    - $lookup can be used for doing joins
- Application requirements
    - If we do many many reads compared to writes, such data may be duplicated
        - A user can place many orders
        - Order collection, and a User collection
            - In RDBMS, while displaying invoice for an order, we end up joining Order and User tables to get the user name
                - this is slow
            - In MongoDB we would instead store the name of the user in the order document created when an order is placed (duplicating name!) - denormalization
                - no join is required
- Cardinality relationships
    - Employee and Projects
        - M:N 
    ```
    Employee
    {
        name: 'John',
        worksOn: [
            1, 2, 5
        ]
    }
    ```
    - Articles and Comments
        - 1:N
    ```
    Article
    {
        name: 'A day in Paris',
        comments: [
            { commenter: 'Jane', text: 'Wow, love your pics' }
        ]
    }
    ```

