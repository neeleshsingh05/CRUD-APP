//innerHTML is used to access the inner html contents of the html tags to change or modify the content in it
//getelementbytagname is used when more than 1 element is to be called. 
var selectedRow=null;//global variable declared
function onFormSubmit(e){
    event.preventDefault();//stop default action in the element.
    var formdata=readFormData();
    if(selectedRow==null){
        insertNewRecord(formdata);
    }
    else{
        updateRecord(formdata);
    }
    resetForm();
}
//retrieve the data.
function readFormData(){
    var formdata={};//variable declared
    /*created object*/formdata["productCode"]=document.getElementById("productCode").value;//pushed html element id into the object
    formdata["product"]=document.getElementById("product").value;
    formdata["qty"]=document.getElementById("qty").value;
    formdata["perprice"]=document.getElementById("perprice").value;
    return formdata;
}
// insert the data.
function insertNewRecord(data){
    var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);//adding new row inside tbody tag. and table.length will increment the length by 1 after adding each record.
    var cell1=newRow.insertCell(0);//1st cell productcode with index number 0 and so on.
        cell1.innerHTML=data.productCode;
    var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.product;
    var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.qty;
    var cell4=newRow.insertCell(3);
        cell4.innerHTML=data.perprice;
    var cell5=newRow.insertCell(4);//creating the edit and delete button in the same table
        cell5.innerHTML=`<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;//calling the onedit and ondelete functions here.
}
// edit the data
function onEdit(td){//accessing each data in the cell of the table
    selectedRow=td.parentElement.parentElement;//selecting a particular row
    document.getElementById('productCode').value=selectedRow.cells[0].innerHTML;//editing performed after submit opreation
    document.getElementById('product').value=selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value=selectedRow.cells[2].innerHTML;
    document.getElementById('perprice').value=selectedRow.cells[3].innerHTML;
}
function updateRecord(formdata){//updating the edited value in the table
        selectedRow.cells[0].innerHTML=formdata.productCode;
        selectedRow.cells[1].innerHTML=formdata.product;
        selectedRow.cells[2].innerHTML=formdata.qty;
        selectedRow.cells[3].innerHTML=formdata.perprice;

}
function onDelete(td){
        if(confirm('Do you want to delete this record??')){
            /*stores the deleted row inside row*/row=td.parentElement.parentElement;//returns the parent element of td tag
            document.getElementById('storeList').deleteRow(row.rowIndex);//delete the entire row after confirmation.
        }
        resetForm();
}
//reset function after deletion
function resetForm(){
    document.getElementById('productCode').value='';//reseting thr rows again to null after deletion.
    document.getElementById('product').value='';
    document.getElementById('qty').value='';
    document.getElementById('perprice').value='';
}