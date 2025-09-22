import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Alert
} from 'react-native';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [rememberMe, setRememberMe] = useState(false);

  

  

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email or Username"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        
        <TouchableOpacity 
          style={styles.forgotPasswordContainer}
        
        >
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <View style={styles.roleContainer}>
          <Text style={styles.roleLabel}>Role:</Text>
          <View style={styles.roleButtons}>
            <TouchableOpacity
              style={[styles.roleButton, role === 'student' && styles.selectedRole]}
              onPress={() => setRole('student')}
            >
              <Text style={[styles.roleText, role === 'student' && styles.selectedRoleText]}>
                Student
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.roleButton, role === 'teacher' && styles.selectedRole]}
              onPress={() => setRole('teacher')}
            >
              <Text style={[styles.roleText, role === 'teacher' && styles.selectedRoleText]}>
                Teacher
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Remember me</Text>
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
          />
        </View>
        
        <TouchableOpacity style={styles.submitButton} >
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDDDE7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    width: '100%',
    maxWidth: 400,
   
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#F00E93',
    fontSize: 14,
  },
  roleContainer: {
    marginBottom: 20,
  },
  roleLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  roleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roleButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedRole: {
    backgroundColor: '#F00E93',
    borderColor: '#F00E93',
  },
  roleText: {
    fontSize: 16,
    color: '#333',
  },
  selectedRoleText: {
    color: 'white',
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#F00E93',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AuthForm;