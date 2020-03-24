import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "../shared/Button";
const reviewSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(4),
  body: yup
    .string()
    .required()
    .min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating mus be a number 1-5", val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
});
const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={{ ...globalStyles.titleText, alignSelf: "center" }}>
        Add your review
      </Text>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          // need to clear the form use
          //actions.resetForm()
          addReview(values);
        }}
      >
        {formProps => (
          <View>
            <Text style={globalStyles.errorText}>
              {formProps.touched.title && formProps.errors.title}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Reivew Title"
              value={formProps.values.title}
              onChangeText={formProps.handleChange("title")}
              onBlur={formProps.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {formProps.touched.body && formProps.errors.body}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Reivew Body"
              value={formProps.values.body}
              onChangeText={formProps.handleChange("body")}
              onBlur={formProps.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {formProps.touched.rating && formProps.errors.rating}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Rating 1-5"
              value={formProps.values.rating}
              keyboardType="numeric"
              onChangeText={formProps.handleChange("rating")}
              onBlur={formProps.handleBlur("rating")}
            />

            <Button
              text="Submit"
              textColor="white"
              bkColor="#de3163"
              onPress={formProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
