    <?php
    // include the file we just wrote - connect
     // like a JS import statement

    $result = array();

    function getAllItems($conn) {
        $query = "SELECT * FROM tbl_portfolio";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo (json_encode($result));
    }

    function getSingleItem($conn, $id) {
        $query = "SELECT * FROM tbl_portfolio WHERE id=" . $id . "";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo (json_encode($result));
    }