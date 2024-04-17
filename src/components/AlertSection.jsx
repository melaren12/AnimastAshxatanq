export default function AlertSection() {
  const ourData = [{
    id: 45,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }]

  const columns = [{
    title: 'Id',
    width: '50px',
    dataIndex: 'id',
  }, {
    title: 'Protocol',
    width: 'auto',
    dataIndex: 'protocol',
  }, {
    title: 'Source',
    width: 'auto',
    dataIndex: 'source',
  }, {
    title: 'Source Port',
    width: 'auto',
    dataIndex: 'sourcePort',
  }, {
    title: 'Destination',
    width: 'auto',
    dataIndex: 'destination',
  }, {
    title: 'Destination Port',
    width: 'auto',
    dataIndex: 'destinationPort',
  }, {
    title: 'Lenght',
    width: 'auto',
    dataIndex: 'length',
  }, {
    title: 'Action',
    width: 'auto',
    dataIndex: 'id',
    render: (id) => <img src={eye} alt="Eye" onClick={handleClick} style={{cursor: 'pointer'}}/>,
  }]
  return(
    <h2>Alert</h2>
    
  )
}