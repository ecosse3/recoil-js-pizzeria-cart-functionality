import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import useSound from 'use-sound';
import { useRecoilState } from 'recoil';
import { theme as appTheme } from '@theme';
import {
  useRemoveProduct, useAddProduct, useDecreaseProduct, useRemoveMultipleProducts, selectedProductsState
} from '@store';
import { currency } from '../../utils/consts';
import popDownSfx from '../../assets/sfx/pop-down.mp3';
import popUpOnSfx from '../../assets/sfx/pop-up-on.mp3';
import popUpOffSfx from '../../assets/sfx/pop-up-off.mp3';
import trashSfx from '../../assets/sfx/trash.mp3';

function createData(id, name, amount, price) {
  return {
    id, name, amount, price: price.toFixed(2), total: (amount * price).toFixed(2)
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name', numeric: false, disablePadding: true, label: 'Product'
  },
  {
    id: 'amount', numeric: true, disablePadding: true, label: 'Amount'
  },
  {
    id: 'price', numeric: true, disablePadding: false, label: 'Price'
  },
  {
    id: 'total', numeric: true, disablePadding: false, label: 'Total'
  },
  {
    id: 'delete', numeric: false, disablePadding: true, label: ''
  }
];

function EnhancedTableHead(props) {
  const {
    classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort
  } = props;

  const [playActive] = useSound(popDownSfx, { volume: 0.25 });
  const [playOn] = useSound(popUpOnSfx, { volume: 0.25 });
  const [playOff] = useSound(popUpOffSfx, { volume: 0.25 });

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            style={{ color: appTheme.colors.primary }}
            inputProps={{ 'aria-label': 'select all products' }}
            onMouseUp={() => {
              rowCount > 0 && numSelected === rowCount ? playOff() : playOn();
            }}
            onMouseDown={playActive}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: appTheme.colors.primary,
        backgroundColor: appTheme.colors.primaryOpacity
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark
      },
  title: {
    flex: '1 1 100%'
  }
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const {
    numSelected, productsToRemove, remove, clearSelected
  } = props;

  const [playRemoveSound] = useSound(trashSfx, { volume: 0.25 });

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Products
        </Typography>
      )}

      {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={() => { remove(productsToRemove); playRemoveSound(); clearSelected(); }}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  productsToRemove: PropTypes.arrayOf(PropTypes.number).isRequired,
  remove: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  },
  tableRow: {
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: appTheme.colors.primaryOpacity
    }
  }
}));

export default function EnhancedTable(props) {
  const { products, totalCost, totalQty } = props;

  const classes = useStyles();
  const [selected, setSelected] = useRecoilState(selectedProductsState);

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);

  const [playActive] = useSound(popDownSfx, { volume: 0.25 });
  const [playOn] = useSound(popUpOnSfx, { volume: 0.25 });
  const [playOff] = useSound(popUpOffSfx, { volume: 0.25 });
  const [playRemoveSound] = useSound(trashSfx, { volume: 0.25 });

  const removeProduct = useRemoveProduct();
  const removeMultipleProducts = useRemoveMultipleProducts();
  const increaseAmount = useAddProduct();
  const decreaseAmount = useDecreaseProduct();

  const cartItems = [];

  React.useEffect(() => {
    products.map(product => cartItems.push(createData(product.id, product.name, product.amount, product.price)));
    setRows(cartItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const checkIfProductIsSelected = (id) => {
    if (selected.indexOf(id) !== -1) {
      setSelected(selected.filter((productId) => productId !== id));
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} productsToRemove={selected} remove={() => removeMultipleProducts(selected)} clearSelected={() => setSelected([])} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      className={classes.tableRow}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          onClick={(event) => handleClick(event, row.id)}
                          style={{ color: appTheme.colors.primary }}
                          onMouseUp={() => {
                            isItemSelected ? playOff() : playOn();
                          }}
                          onMouseDown={playActive}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="right" padding="none">
                        <Tooltip title="Decrease amount" placement="left">
                          <RemoveCircleIcon
                            onClick={() => decreaseAmount({ id: row.id, name: row.name, price: row.price })}
                            style={{
                              cursor: 'pointer', color: appTheme.colors.primary, verticalAlign: 'middle', marginRight: 5
                            }}
                          />
                        </Tooltip>
                        {row.amount}
                        <Tooltip title="Increase amount" placement="right">
                          <AddCircleIcon
                            onClick={() => increaseAmount({ id: row.id, name: row.name, price: row.price })}
                            style={{
                              cursor: 'pointer', color: appTheme.colors.primary, verticalAlign: 'middle', marginLeft: 5
                            }}
                          />
                        </Tooltip>
                      </TableCell>
                      <TableCell align="right">{row.price} {currency}</TableCell>
                      <TableCell align="right">{row.total} {currency}</TableCell>
                      <TableCell padding="none">
                        <Tooltip title="Delete" placement="right">
                          <DeleteIcon onClick={() => { checkIfProductIsSelected(row.id); removeProduct(row.id); playRemoveSound(); }} style={{ cursor: 'pointer', color: appTheme.colors.primary, marginTop: 5 }} />
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
              <TableRow>
                <TableCell style={{ fontWeight: 'bold' }} colSpan={2}>Total</TableCell>
                <TableCell style={{ fontWeight: 'bold' }} align="right">{totalQty > 0 && totalQty}</TableCell>
                <TableCell />
                <TableCell style={{ fontWeight: 'bold' }} align="right">{totalCost.toFixed(2)} {currency}</TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

EnhancedTable.propTypes = {
  products: PropTypes.array.isRequired,
  totalCost: PropTypes.number.isRequired,
  totalQty: PropTypes.number.isRequired
};
