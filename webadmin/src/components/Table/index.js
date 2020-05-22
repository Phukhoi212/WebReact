import React from 'react';
import MaterialTable from 'material-table';

class Table extends React.Component {
  state = {
    data: [],
  }

  render() {
    return (
      <MaterialTable
        title={this.props.title}
        columns={this.props.columns}
        data={this.props.dataTable}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const data = this.state.data;
                const index = data.indexOf(oldData);
                data[index] = newData;
                this.setState({ data }, () => resolve());
                resolve();
              }, 1000);
            }),
        }}
      />
    );
  }
}
export default Table;