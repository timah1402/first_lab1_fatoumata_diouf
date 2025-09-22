import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert
} from 'react-native';

const SocialFeed = () => {
  
  // Sample posts data
  const posts = [
    {
      id: 1,
      userName: 'Fatima Diouf',
      timestamp: '2 hours ago',
      content: 'hello everyone i hope you are doing well today a write my first post on facebook please follow me',
      hasImage: false,
    },
    {
      id: 2,
      userName: 'Mame Diarra Diouf',
      timestamp: '4 hours ago', 
      content: 'Beautiful sunset from my balcony tonight',
      hasImage: true,
    },
    {
      id: 3,
      userName: 'Alioune Sine',
      timestamp: '1 day ago',
      content: 'Had an amazing coffee at the new cafe downtown. Highly recommend!',
      hasImage: true,
    }
  ];

  // Button handlers
  const handleLike = (postId) => {
    Alert.alert('Liked', `You liked post ${postId}`);
  };

  const handleComment = (postId) => {
    Alert.alert('Comment', `Comment on post ${postId}`);
  };

  const handleShare = (postId) => {
    Alert.alert('Share', `Share post ${postId}`);
  };

  // Header Component
  const Header = () => (
    <View style={styles.header}>
      <Text style={styles.logo}>Facebook</Text>
      <TouchableOpacity style={styles.profileIcon}>
        <Text style={styles.profileText}>👤</Text>
      </TouchableOpacity>
    </View>
  );

  // User Info Component
  const UserInfo = ({ userName, timestamp }) => (
    <View style={styles.userInfo}>
      <Image 
        source={require('../assets/moi.jpg')}
        style={styles.avatar}
      />
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );

  // Action Buttons Component
  const ActionButtons = ({ postId }) => (
    <View style={styles.actionButtons}>
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => handleLike(postId)}
      >
        <Text style={styles.actionText}>👍 Like</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => handleComment(postId)}
      >
        <Text style={styles.actionText}>💬 Comment</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={() => handleShare(postId)}
      >
        <Text style={styles.actionText}>📤 Share</Text>
      </TouchableOpacity>
    </View>
  );

  // Post Component
  const Post = ({ post }) => (
    <View style={styles.postContainer}>
      <UserInfo userName={post.userName} timestamp={post.timestamp} />
      
      <Text style={styles.postContent}>{post.content}</Text>
      
      {post.hasImage && (
        <Image 
          source={require('../assets/sista.jpg')}
          style={styles.postImage}
        />
      )}
      
      <ActionButtons postId={post.id} />

      
    </View>
    
  );

  // my main container
  return (
    <SafeAreaView>
         <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.feed}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },

  // Header styles
  header: {
    backgroundColor: '#1877f2',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  logo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: 'white',
    fontSize: 20,
  },

  // Feed styles
  feed: {
    flex: 1,
  },

  // Post styles
  postContainer: {
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 15,
  },
  postContent: {
    fontSize: 16,
    color: '#1c1e21',
    lineHeight: 20,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },

  // User info styles
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c1e21',
  },
  timestamp: {
    fontSize: 12,
    color: '#65676b',
    marginTop: 2,
  },

  // Action buttons styles
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e4e6ea',
    paddingTop: 10,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  actionText: {
    color: '#65676b',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default SocialFeed;