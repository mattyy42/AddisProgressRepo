module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
          gender: String,
          dateofbirth: Date,
          salary: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Employee = mongoose.model("employee_db", schema);
  return Employee;
};