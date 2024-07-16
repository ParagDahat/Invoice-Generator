import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

// Define styles for PDF using @react-pdf/renderer
const styles = StyleSheet.create({
  page: {
    // padding: 30,
    paddingLeft:30,
    paddingRight:30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 2,
  },
  header1: {
    width: 60,
    height: 40,
    backgroundColor: 'black',
    marginRight: 10,
  },
  header2: {
    width: 370,
    height: 40,
    backgroundColor: 'orange',
  },
  logo: {
    width: 150,
    src: 'public/logo.jpg'
  },
  headerText: {
    textAlign: 'right',
  },
  invoiceTitle: {
    fontSize: 20,
    color: '#FFA500',
  },
  subHeader: {
    fontSize: 12,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableColHeader: {
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    fontSize: 10,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'left',
  },
  footercolor: {
    position: 'absolute',
    fontSize: 10,
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: 'orange',
  },
  bg1: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
  },
});

const InvoiceDocument = ({ data }) => (
  <Document>
    <Page style={styles.page} size="A4">
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.header1}><Text></Text></View>
        <Image
          style={styles.logo}
          src="/logo.jpg" // Replace with the path to your logo
        />
        <View style={styles.header2}><Text></Text></View>
      </View>
      <View style={styles.headerText}>
        <Text style={styles.invoiceTitle}>INVOICE</Text>
        <Text># {data.invoiceNumber}</Text>
        <Text>{data.date}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={[styles.bold, { marginTop: 10 }]}>BILLED TO:</Text>
          <Text style={[styles.bold, { marginTop: 10 }]}>{data.billedTo}</Text>
          <Text>{data.phone}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Dear Sir,</Text>
        <Text>Thank you for choosing <Text style={styles.bold}>{data.companyName}</Text> </Text>
      </View>
      <View style={[styles.bold, { marginTop: 10 }]}>
        <Text style={[styles.bold, { fontSize: 20 }]}>INVOICE</Text>
        <View style={[styles.table, { marginTop: 20 }]}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Description</Text>
            <Text style={styles.tableColHeader}>Amount</Text>
          </View>
          {data.items.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCol}>{item.description}</Text>
              <Text style={styles.tableCol}>{item.amount}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={[styles.bold, { marginTop: 30 }]}>
        <Text style={styles.bold}>INSTALLMENTS</Text>
        <View style={[styles.table, { marginTop: 30 }]}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Installment Description</Text>
            <Text style={styles.tableColHeader}>Amount</Text>
          </View>
          {data.installments.map((installment, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCol}>{installment.description}</Text>
              <Text style={styles.tableCol}>{installment.amount}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={[styles.section, { marginTop: 10 }]}>
        <Text style={[styles.bold, { marginTop: 10 }]}>Subtotal: Rs. {data.subtotal}</Text>
        <Text style={[styles.bold, { marginTop: 10 }]}>Total: Rs. {data.total}</Text>
        <Text style={[styles.bold, { marginTop: 10 }]}>Remaining: Rs. {data.remaining}</Text>
      </View>
      <Text style={{ marginTop: 30 }}>Sincerely,</Text>
      <Text style={{ marginTop: 10 }}>{data.managerName}</Text>
      <Text>Human Resource Manager</Text>
      <Text>{data.companyName}</Text>
      <Text style={{ marginTop: 30 }}>
        If you have any questions or need further assistance, feel free to contact our support team at {data.supportEmail} or call us on {data.supportPhone}.
      </Text>
      <Text style={{ marginTop: 10 }}>
        We look forward to providing you with excellent service and helping you find the best opportunities in your career.
      </Text>
      {/* Footer Section */}
      <View style={styles.footer}>
        <View style={styles.bg1}>
          <Text>{data.companyAddress}</Text>
          <Text>{data.companyPhone}</Text>
          <Text style={{ textAlign: 'center' }}>{data.companyWebsite}</Text>
        </View>
      </View>
      <View style={styles.footercolor}></View>
    </Page>
  </Document>
);

const InvoicePreview = ({ data }) => (
  <PDFViewer style={{ width: '100%', height: '500px' }}>
    <InvoiceDocument data={data} />
  </PDFViewer>
);

const DownloadInvoice = ({ data }) => (
  <PDFDownloadLink document={<InvoiceDocument data={data} />} fileName="invoice.pdf">
    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Invoice')}
  </PDFDownloadLink>
);

export { InvoicePreview, DownloadInvoice };
