import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { useDispatch } from "react-redux";
import { checkPuzzle } from "../store/checkerFunc";

const Table2 = (props, { navigation }) => {
  const { board } = props;
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Table borderStyle={{ borderWidth: 1, borderColor: "black" }}>
        <Rows data={board} textStyle={styles.TableText} />
      </Table>
      <TouchableOpacity
        onPress={() => {
          dispatch(checkPuzzle(board));
        }}
      >
        <Text>Check this board</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 35,
    backgroundColor: "blue",
  },
  TableText: {
    margin: 10,
  },
});
export default Table2;
